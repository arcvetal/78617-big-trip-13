import ListSortView from '../view/list-sort.js';
import TripInfoView from '../view/trip-info.js';
import TripPriceView from '../view/trip-price.js';
import TripPointsListView from '../view/trip-points-list.js';
import TripPointsListEmptyView from '../view/trip-points-list-empty.js';
import PointPresenter from './point.js';
import {renderElement, RenderPosition} from '../utils/render.js';
import {formatDate} from '../utils/date.js';

export default class Trip {
  constructor(tripMainElement, tripControlsElement, tripControlsMenuElement, tripEventsSectionElement, tripEventsTitleElement) {
    this._tripMainElement = tripMainElement;
    this._tripControlsElement = tripControlsElement;
    this._tripControlsMenuElement = tripControlsMenuElement;
    this._tripEventsSectionElement = tripEventsSectionElement;
    this._tripEventsTitleElement = tripEventsTitleElement;


  }

  init(tripPoints, tripPointTypes, locations, offers) {
    this._tripPoints = tripPoints.slice();
    this._tripPointTypes = tripPointTypes;
    this._locations = locations;
    this._offers = offers;
    this._renderTrip();
    this._renderTripInfo();
    this._renderTripPrice(this._tripPoints);
    this._renderListSort();
    this._renderTripPoints(this._tripPoints, this._tripPointTypes, this._locations, this._offers);
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
      return `${this._tripPoints[0].location} &mdash; ${this._tripPoints[Math.floor((this._tripPoints.length - 1) / 2)].location} &mdash;${this._tripPoints[this._tripPoints.length - 1].location}`;
    };

    const getTripDates = () => {
      return `${formatDate(this._tripPoints[0].start, `DD MMM`)}&nbsp;&mdash;&nbsp;${formatDate(this._tripPoints[this._tripPoints.length - 1].end, `DD`)}`;
    };

    const tripInfoComponent = new TripInfoView(getRoute(), getTripDates());
    renderElement(this._tripMainElement, tripInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripPrice(tripPoints) {
    const fullTripPriceComponent = new TripPriceView(tripPoints);
    renderElement(this._tripMainElement, fullTripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderListSort() {
    const listSortComponent = new ListSortView();
    renderElement(this._tripEventsTitleElement, listSortComponent, RenderPosition.AFTEREND);
  }

  _renderTripPointsList() {
    this._tripPointsListComponent = new TripPointsListView();
    renderElement(this._tripEventsSectionElement, this._tripPointsListComponent, RenderPosition.BEFOREEND);
  }

  _renderTripPointsListEmpty() {
    this._tripPointsListEmptyComponent = new TripPointsListEmptyView();
    renderElement(this._tripEventsSectionElement, this._tripPointsListEmptyComponent, RenderPosition.BEFOREEND);
  }

  _renderTripPoint(item, tripPointTypes, locations, offers) {
    const tripPoint = new PointPresenter(this._tripPointsListComponent);
    tripPoint.init(item, tripPointTypes, locations, offers);
  }

  _renderTripPoints(tripPoints, tripPointTypes, locations, offers) {
    for (const item of tripPoints) {
      // Здесь будет презентер точки маршрута

      this._renderTripPoint(item, tripPointTypes, locations, offers);
    }
  }
}
