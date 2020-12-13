import {createElement} from '../utils/utils.js';

const createTripPointsListEmptyTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class TripPointsListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripPointsListEmptyTemplate();
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
