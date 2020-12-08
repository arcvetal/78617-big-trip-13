import {createEventHeaderTemplate} from './event-header.js';
import {createEventOfferTemplate} from './event-offer.js';
import {createEventDestinationTemplate} from './event-destination.js';
import {createElement} from '../utils/utils.js';


const createEditTripPointTemplate = (tripObj, locationsAndTypes, allOffers) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${createEventHeaderTemplate(tripObj, locationsAndTypes)}
      ${createEventOfferTemplate(allOffers)}
      ${createEventDestinationTemplate(tripObj)}
    </form>
  </li>`;
};

export default class EditTripPoint {
  constructor(tripObj, locationsAndTypes, allOffers) {
    this._tripObj = tripObj;
    this._locationsAndTypes = locationsAndTypes;
    this._allOffers = allOffers;
    this._element = null;
  }

  getTemplate() {
    return createEditTripPointTemplate(this._tripObj, this._locationsAndTypes, this._allOffers);
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
