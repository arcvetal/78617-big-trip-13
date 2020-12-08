import {createEventHeaderTemplate} from './event-header.js';
import {createEventOfferTemplate} from './event-offer.js';
import {createEventDestinationTemplate} from './event-destination.js';
import {createElement} from '../utils/utils.js';


const createAddTripPointTemplate = (tripObj, locationsAndTypes, allOffers) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${createEventHeaderTemplate(tripObj, locationsAndTypes)}
      ${createEventOfferTemplate(allOffers)}
      ${createEventDestinationTemplate()}
    </form>
  </li>`;
};

export default class AddTripPoint {
  constructor(tripObj, locationsAndTypes, allOffers) {
    this._tripObj = tripObj;
    this._locationsAndTypes = locationsAndTypes;
    this._allOffers = allOffers;
    this._element = null;
  }

  getTemplate() {
    return createAddTripPointTemplate(this._tripObj, this._locationsAndTypes, this._allOffers);
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
