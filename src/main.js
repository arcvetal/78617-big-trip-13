// import AddTripPointView from './view/add-trip-point.js';
import EditTripPointView from './view/edit-trip-point.js';
import FiltersView from './view/filter.js';
import ListSortView from './view/list-sort.js';
import TripMenuView from './view/menu.js';
import TripPointListView from './view/trip-points-list.js';
import TripPointView from './view/trip-point.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import {renderElement, RenderPosition} from './utils/utils.js';

// Mocks
import {generateTripPoint} from './mock/mocks.js';
import {allTypesAndLocations} from './mock/mocks.js';
import {allOffers} from './mock/mocks.js';
import {generateMocksCollection} from './mock/mocks.js';

const POINTS_COUNT = 17;

const tripMainElement = document.querySelector('.trip-main');
const tripControls = document.querySelector('.trip-controls');
const tripControlsMenu = document.querySelector('.trip-controls :first-child');
const tripEventsTitleElement = document.querySelector('.trip-events h2');
const tripEventsSectionElement = document.querySelector('.trip-events');

// Функция отрисовки точки маршрута
const renderTripPoint = (container, tripPoint, allTypesAndLocations, allOffers) => {
  const tripPointComponent = new TripPointView(tripPoint);
  const editTripPointComponent = new EditTripPointView(tripPoint, allTypesAndLocations(), allOffers());

  const replacePointToFormEdit = () => {
    container.replaceChild(editTripPointComponent.getElement(), tripPointComponent.getElement());
  };

  const replaceFormEditToPoint = () => {
    container.replaceChild(tripPointComponent.getElement(), editTripPointComponent.getElement());
  };

  tripPointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToFormEdit();
  });

  editTripPointComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormEditToPoint();
  });

  renderElement(container, tripPointComponent.getElement(), RenderPosition.BEFOREEND);
}

// Добавмим информацию о маршруте
renderElement(tripMainElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);

// Добавим стоимость поездки
renderElement(tripMainElement, new TripPriceView().getElement(), RenderPosition.BEFOREEND);

// Добавим меню
renderElement(tripControlsMenu, new TripMenuView().getElement(), RenderPosition.AFTEREND);

// Добавим фильтры
renderElement(tripControls, new FiltersView().getElement(), RenderPosition.BEFOREEND);

// Добавим сортировку
renderElement(tripEventsTitleElement, new ListSortView().getElement(), RenderPosition.AFTEREND);

// Добавим <ul> для будущего списка пунктов
renderElement(tripEventsSectionElement, new TripPointListView().getElement(), RenderPosition.BEFOREEND);

// Найдем только что добавленный <ul>
const tripPointsListElement = document.querySelector('.trip-events__list');

// Сгенерируем масив обьектов-моков
const tripPointsCollection = generateMocksCollection(generateTripPoint);

for (let i = 0; i < POINTS_COUNT; i++) {
  renderTripPoint(tripPointsListElement, tripPointsCollection[i], allTypesAndLocations, allOffers);
};
