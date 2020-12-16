import AbstractView from './abstract.js';

const createTripPointsListTemplate = (tripPointsLength) => {
  if (tripPointsLength > 0) {
    return `<ul class="trip-events__list"></ul>`;
  }

  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class TripPointsList extends AbstractView {
  constructor(tripPointsLength) {
    super();
    this._tripPointsLength = tripPointsLength;
  }

  getTemplate() {
    return createTripPointsListTemplate(this._tripPointsLength);
  }
}
