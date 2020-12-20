import AbstractView from './abstract.js';

const createOffersListTemplate = (offers) => {
  return offers.map((item) => {
    return `<li class="event__offer">
              <span class="event__offer-title">` + item.label + `</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">` + item.price + `</span>
            </li>`;
  }).join(``);
};

export default class OffersList extends AbstractView {
  constructor(offers) {
    super();
    this._offers = offers;
  }

  getTemplate() {
    return createOffersListTemplate(this._offers);
  }
}
