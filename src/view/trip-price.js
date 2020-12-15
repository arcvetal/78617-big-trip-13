import {createElement} from '../utils/utils.js';

const createTripPriceTemplate = (totalPrice) => {
  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`;
};


export default class TripPrice {
  constructor(totalPrice) {
    this._totalPrice = totalPrice;
    this._element = null;
  }

  getTemplate() {
    return createTripPriceTemplate(this._totalPrice);
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
