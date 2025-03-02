const DATE_FORMAT_DAY = 'MMM D';
const DATE_FORMAT_TIME = 'MM:DD';
const DATE_FORMAT_TIME_EDITFORM = 'YY/MM/DD hh:mm';

const FilterType = {
  EVERYTHING:'everything',
  FUTURE:'future',
  PRESENT:'present',
  PAST:'past',
};

const TripSort = {
  DAY:'day',
  EVENT:'event',
  TIME:'time',
  PRICE:'price',
  OFFER:'offer',
};

const EventType = {
  TAXI:'taxi',
  BUS:'bus',
  TRAIN:'train',
  SHIP:'ship',
  DRIVE:'drive',
  FLIGHT:'flight',
  CHECKIN:'check-in',
  SIGHTSEEING:'sightseeing',
  RESTARAUNT:'restaurant',
};

export { DATE_FORMAT_DAY, DATE_FORMAT_TIME, DATE_FORMAT_TIME_EDITFORM, FilterType, TripSort, EventType };
