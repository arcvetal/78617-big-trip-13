import {createElement} from '../utils/utils.js';

const createTripPointsListTemplate = (tripPointsLength) => {
  if (tripPointsLength > 0) {
    return `<ul class="trip-events__list"></ul>`;
  }

  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class TripPointsList {
  constructor(tripPointsLength) {
    this._tripPointsLength = tripPointsLength;
    this._element = null;
  }

  getTemplate() {
    return createTripPointsListTemplate(this._tripPointsLength);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
