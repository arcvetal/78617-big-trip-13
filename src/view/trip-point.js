import AbstractView from './abstract.js';
import OffersListView from './offers-list.js';
import {showTime, getDateDiffDuration} from '../utils/date.js';

const createTripPointTemplate = ({type, location, start, end, tripPrice, offers, isFavorite}) => {
  const {days, hours, minutes} = getDateDiffDuration(start, end);

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">18 MAR</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${location}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T12:25">${showTime(start)}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T13:35">${showTime(end)}</time>
      </p>
      <p class="event__duration">${days !== 0 ? `${days}D` : ``}  ${hours !== 0 ? `${hours}H` : ``} ${minutes !== 0 ? `${minutes}M` : ``}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${tripPrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${new OffersListView(offers).getTemplate()}
    </ul>
    <button class="event__favorite-btn  ${isFavorite ? `event__favorite-btn--active` : ``}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

export default class TripPoint extends AbstractView {
  constructor(tripItem) {
    super();
    this._tripItem = tripItem;
    this._tripPointClickHandler = this._tripPointClickHandler.bind(this);
  }

  getTemplate() {
    return createTripPointTemplate(this._tripItem);
  }

  _tripPointClickHandler() {
    this._callback.tripPointClick();
  }

  setTripPointClickHandler(callback) {
    this._callback.tripPointClick = callback;

    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._tripPointClickHandler);
  }
}
