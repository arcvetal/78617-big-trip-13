import {createEventHeaderTemplate} from './event-header.js';
import {createEventOfferTemplate} from './event-offer.js';
import {createEventDestinationTemplate} from './event-destination.js';


export const createEditTripPointTemplate = (tripObj) => {
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${createEventHeaderTemplate(tripObj)}
      ${createEventOfferTemplate()}
      ${createEventDestinationTemplate()}
    </form>
  </li>`;
};
