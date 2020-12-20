import AbstractView from './abstract.js';
import {formatDate} from '../utils/date.js';


const createTripInfoTemplate = (locations, dateStart, dateEnd) => {

  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${locations[0]} &mdash; ${locations[Math.floor((locations.length - 1) / 2)]} &mdash;${locations[locations.length - 1]}</h1>

            <p class="trip-info__dates">${formatDate(dateStart, `DD MMM`)}&nbsp;&mdash;&nbsp;${formatDate(dateEnd, `DD`)}</p>
          </div>`;
};

export default class TripInfo extends AbstractView {
  constructor(locations, dateStart, dateEnd) {
    super();
    this._locations = locations;
    this._dateStart = dateStart;
    this._dateEnd = dateEnd;
  }

  getTemplate() {
    return createTripInfoTemplate(this._locations, this._dateStart, this._dateEnd);
  }
}
