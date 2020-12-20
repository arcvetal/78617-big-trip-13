import EventHeaderView from './event-header.js';
import EventOfferView from './event-offer.js';
import EventDestinationView from './event-destination.js';
import AbstractView from './abstract.js';

const createAddTripPointTemplate = (tripItem, tripPointTypes, locations, offers) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${new EventHeaderView(tripItem, tripPointTypes, locations).getTemplate()}
      ${new EventOfferView(offers).getTemplate()}
      ${new EventDestinationView().getTemplate()}
    </form>
  </li>`;
};

export default class AddTripPoint extends AbstractView {
  constructor(tripItem, tripPointTypes, locations, offers) {
    super();
    this._tripItem = tripItem;
    this._tripPointTypes = tripPointTypes;
    this.locations = locations;
    this._offers = offers;
  }

  getTemplate() {
    return createAddTripPointTemplate(this._tripItem, this._tripPointTypes, this.locations, this._offers);
  }
}
