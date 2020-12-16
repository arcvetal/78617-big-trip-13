import EventHeaderView from './event-header.js';
import EventOfferView from './event-offer.js';
import EventDestinationView from './event-destination.js';
import AbstractView from './abstract.js';

const IS_EDIT = true;

const createEditTripPointTemplate = (tripItem, tripPointTypes, locations, offers) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${new EventHeaderView(tripItem, tripPointTypes, locations, IS_EDIT).getTemplate()}
      ${new EventOfferView(offers).getTemplate()}
      ${new EventDestinationView(tripItem).getTemplate()}
    </form>
  </li>`;
};

export default class EditTripPoint extends AbstractView {
  constructor(tripItem, tripPointTypes, locations, offers) {
    super();
    this._tripItem = tripItem;
    this._tripPointTypes = tripPointTypes;
    this._locations = locations;
    this._offers = offers;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  getTemplate() {
    return createEditTripPointTemplate(this._tripItem, this._tripPointTypes, this._locations, this._offers);
  }

  _editClickHandler() {
    this._callback.editClick();
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.formSubmit();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._editClickHandler);
  }

  setFormSubmitHandler(callback) {
    this._callback.formSubmit = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._formSubmitHandler);
  }
}
