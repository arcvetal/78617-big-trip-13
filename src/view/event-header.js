import {formatDate} from '../utils/date.js';
import AbstractView from './abstract.js';

const renderTypes = (types = []) => {

  return types.map((type) => {
    return `<div class="event__type-item">
    <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}">
    <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
  </div>`;
  }).join(``);
};

const renderLocations = (locations = []) => {
  return locations.map((location) => {
    return `<option value="${location}"></option>`;
  }).join(``);
};

const renderButtons = (isEdit) => {
  if (isEdit) {
    return `<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>`;
  }
  return `<button class="event__save-btn  btn  btn--blue" type="submit">Save</  button>
    <button class="event__reset-btn" type="reset">Cancel</button>`;
};

const createEventHeaderTemplate = ({type, location, start, end, tripPrice}, tripPointTypes, locations, isEdit) => {

  return `<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        ${type ? `<img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon" />` : ``}
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${renderTypes(tripPointTypes)}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${location}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${renderLocations(locations)}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatDate(start, `YYYY-MM-DD HH:mm`)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatDate(end, `YYYY-MM-DD HH:mm`)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;${tripPrice}
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
    </div>
    ${renderButtons(isEdit)}
  </header>`;
};

export default class EventHeader extends AbstractView {
  constructor(tripItem, tripPointTypes, locations, isEdit) {
    super();
    this._tripItem = tripItem;
    this._tripPointTypes = tripPointTypes;
    this._locations = locations;
    this._isEdit = isEdit;
  }

  getTemplate() {
    return createEventHeaderTemplate(this._tripItem, this._tripPointTypes, this._locations, this._isEdit);
  }
}
