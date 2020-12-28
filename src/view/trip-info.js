import AbstractView from './abstract.js';

const createTripInfoTemplate = (route, tripDates) => {

  return `<div class="trip-info__main">
            <h1 class="trip-info__title">${route}</h1>

            <p class="trip-info__dates">${tripDates}</p>
          </div>`;
};

export default class TripInfo extends AbstractView {
  constructor(route, tripDates) {
    super();
    this._route = route;
    this._tripDates = tripDates;
  }

  getTemplate() {
    return createTripInfoTemplate(this._route, this._tripDates);
  }
}
