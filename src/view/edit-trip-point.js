import {createEventHeaderTemplate} from './event-header.js';
import {createEventOfferTemplate} from './event-offer.js';
import {createEventDestinationTemplate} from './event-destination.js';
import {createElement} from '../utils/utils.js';


const createEditTripPointTemplate = (tripItem, tripPointTypes, locations, offers) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${createEventHeaderTemplate(tripItem, tripPointTypes, locations)}
      ${createEventOfferTemplate(offers)}
      ${createEventDestinationTemplate(tripItem)}
    </form>
  </li>`;
};

export default class EditTripPoint {
  constructor(tripItem, tripPointTypes, locations, offers) {
    this._tripItem = tripItem;
    this._tripPointTypes = tripPointTypes;
    this.locations = locations;
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createEditTripPointTemplate(this._tripItem, this._tripPointTypes, this.locations, this._offers);
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
