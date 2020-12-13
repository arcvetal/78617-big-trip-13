import {createElement} from '../utils/utils.js';

const createOffersListTemplate = (offers) => {
  return offers.map((item) => {
    return `<li class="event__offer">
              <span class="event__offer-title">` + item.label + `</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">` + item.price + `</span>
            </li>`;
  }).join(``);
};

export default class OffersList {
  constructor(offers) {
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createOffersListTemplate(this._offers);
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
