import AbstractView from './abstract.js';

const getFullPrice = (tripPoints) => {
  let totalPrice = 0;

  for (const item in tripPoints) {
    if (item.tripPrice) {
      totalPrice += item.tripPrice;
    }
  }

  return totalPrice;
};

const createTripPriceTemplate = (tripPoints) => {
  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${getFullPrice(tripPoints)}</span>
  </p>`;
};

export default class TripPrice extends AbstractView {
  constructor(tripPoints) {
    super();
    this._tripPoints = tripPoints;
  }

  getTemplate() {
    return createTripPriceTemplate(this._tripPoints);
  }
}
