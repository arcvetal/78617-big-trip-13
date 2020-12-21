import FiltersView from '../view/filters.js';
import ListSortView from '../view/list-sort.js';
import MenuView from '../view/menu.js';
import TripInfoView from '../view/trip-info.js';
import TripPriceView from '../view/trip-price.js';
import TripPointsListView from './view/trip-points-list.js';
import {renderElement, RenderPosition} from '../utils/render.js';



export default class Trip {
  constructor(tripMainElement, tripControlsElement, tripControlsMenuElement, tripEventsSectionElement, tripEventsTitleElement) {
    this._tripMainElement = tripMainElement;
    this._tripControlsElement = tripControlsElement;
    this._tripControlsMenuElement = tripControlsMenuElement;
    this._tripEventsSectionElement = tripEventsSectionElement;
    this._tripEventsTitleElement = tripEventsTitleElement;

    this._tripInfoComponent = new TripInfoView(locations);
    this._tripPriceComponent = new TripPriceView(RANDOM_TOTAL_PRICE);
    this._tripMenuComponent = new MenuView();
    this._tripFiltersComponent = new FiltersView();
    this._tripListSortComponent = new ListSortView();
    this._tripPointsListComponent = new TripPointsListView(tripPoints.length).getElement();
  }

  init(tripPoints) {
    this._tripPoints = tripPoints.slice();
  }

  _renderTripInfo() {
    renderElement(this._tripMainElement, this._tripInfoComponent, RenderPosition.AFTERBEGIN);
  }

  _renderTripPrice() {
    renderElement(this._tripMainElement, this._tripPriceComponent, RenderPosition.BEFOREEND);
  }

  _renderMenu() {
    renderElement(this._tripControlsMenuElement, this._tripMenuComponent, RenderPosition.AFTEREND);
  }

  _renderFilters() {
    renderElement(this._tripControlsElement, this._tripFiltersComponent, RenderPosition.BEFOREEND);
  }

  _renderListSort() {
    renderElement(this._tripEventsTitleElement, this._tripListSortComponent, RenderPosition.AFTEREND);
  }

  _renderTripPointsList() {
    renderElement(this._tripEventsSectionElement, this._tripPointsListComponent, RenderPosition.BEFOREEND);
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
