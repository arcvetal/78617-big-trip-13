import EventHeaderView from './event-header.js';
import EventOfferView from './event-offer.js';
import EventDestinationView from './event-destination.js';
import {createElement} from '../utils/utils.js';


const createEditTripPointTemplate = (tripItem, tripPointTypes, locations, offers) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${new EventHeaderView(tripItem, tripPointTypes, locations).getTemplate()}
      ${new EventOfferView(offers).getTemplate()}
      ${new EventDestinationView(tripItem).getTemplate()}
    </form>
  </li>`;
};

export default class EditTripPoint {
  constructor(tripItem, tripPointTypes, locations, offers) {
    this._tripItem = tripItem;
    this._tripPointTypes = tripPointTypes;
    this._locations = locations;
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createEditTripPointTemplate(this._tripItem, this._tripPointTypes, this._locations, this._offers);
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
