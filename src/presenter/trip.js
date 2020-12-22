import ListSortView from '../view/list-sort.js';
import TripInfoView from '../view/trip-info.js';
import TripPriceView from '../view/trip-price.js';
import TripPointsListView from './view/trip-points-list.js';
import TripPointsListEmptyView from './view/trip-points-list-empty.js';
import {renderElement, RenderPosition} from '../utils/render.js';

export default class Trip {
  constructor(tripMainElement, tripControlsElement, tripControlsMenuElement, tripEventsSectionElement, tripEventsTitleElement) {
    this._tripMainElement = tripMainElement;
    this._tripControlsElement = tripControlsElement;
    this._tripControlsMenuElement = tripControlsMenuElement;
    this._tripEventsSectionElement = tripEventsSectionElement;
    this._tripEventsTitleElement = tripEventsTitleElement;


    this._tripPriceComponent = new TripPriceView(RANDOM_TOTAL_PRICE);
    this._tripListSortComponent = new ListSortView();

  }

  init(tripPoints) {
    this._tripPoints = tripPoints.slice();
    this._renderTrip();
  }

  _renderTrip() {
    if (this._tripPoints.length === 0) {
      this._renderTripPointsListEmpty();
    } else {
      this._renderTripPointsList();
    }
  }

  _renderTripInfo() {
    const getRoute = () => {
      return `${this._tripPoints[0].location} &mdash; ${this._tripPoints[Math.floor((locations.length - 1) / 2)].location} &mdash;${this._tripPoints[this._tripPoints.length - 1].location}`;
    };

    const getTripDates = () => {

    };

    const tripInfoComponent = new TripInfoView(getRoute(), dates);
    renderElement(this._tripMainElement, tripInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripPrice() {
    renderElement(this._tripMainElement, this._tripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderListSort() {
    renderElement(this._tripEventsTitleElement, this._tripListSortComponent, RenderPosition.AFTEREND);
  }

  _renderTripPointsList() {
    this._tripPointsListComponent = new TripPointsListView();
    renderElement(this._tripEventsSectionElement, this._tripPointsListComponent, RenderPosition.BEFOREEND);
  }

  _renderTripPointsListEmpty() {
    this._tripPointsListEmptyComponent = new TripPointsListEmptyView();
    renderElement(this._tripEventsSectionElement, this._tripPointsListEmptyComponent, RenderPosition.BEFOREEND);
  }

  _renderTripPoints() {
    if (this._tripPointsListComponent.classList.contains('trip-events__list')) {
      for (const item of tripPoints) {
        // Здесь будет презентер точки маршрута

        // renderTripPoint(tripPointsListElement, item, tripPointTypes, locations, offers);
      };
    }

  }
}
