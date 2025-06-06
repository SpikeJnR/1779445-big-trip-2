import BoardPresenter from '../src/presenter/board-presenter.js';
import PointModel from '../src/model/point-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-point-button-view.js';
import { render } from './framework/render.js';
import PointApiService from './point-api-service.js';
import { generateRandomToken } from './utils/common.js';

const AUTH_TOKEN = generateRandomToken();

const AUTHORIZATION = `Basic ${AUTH_TOKEN}`;
const END_POINT = 'https://23.objects.htmlacademy.pro/big-trip';

const headerElement = document.querySelector('.trip-main');
const mainElement = document.querySelector('.trip-events');
const controlsElement = headerElement.querySelector('.trip-controls__filters');

const filterModel = new FilterModel();

const pointsModel = new PointModel({
  pointApiService: new PointApiService(END_POINT, AUTHORIZATION)
});

const boardPresenter = new BoardPresenter(
  {
    headerElement,
    mainElement,
    pointsModel,
    filterModel,
    onNewPointDestroy: handleNewPointFormClose,
  }
);

const filterPresenter = new FilterPresenter(
  {
    filterContainer: controlsElement,
    filterModel,
    pointsModel,
  }
);

const newPointButtonComponent = new NewPointButtonView({
  onClick: handleNewPointButtonClick,
});

function handleNewPointFormClose(){
  newPointButtonComponent.element.disabled = false;
}

function handleNewPointButtonClick() {
  boardPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

filterPresenter.init();
boardPresenter.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, headerElement);
  });

