import AbstractView from './abstract.js';

const createTripPointsListTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class TripPointsListEmpty extends AbstractView {
  getTemplate() {
    return createTripPointsListTemplate();
  }
}
