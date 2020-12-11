// import AddTripPointView from './view/add-trip-point.js';
import EditTripPointView from './view/edit-trip-point.js';
import FiltersView from './view/filters.js';
import ListSortView from './view/list-sort.js';
import MenuView from './view/menu.js';
import TripPointsListView from './view/trip-points-list.js';
import TripPointView from './view/trip-point.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import {renderElement, RenderPosition} from './utils/utils.js';

// Mocks
import {generateTripPoint, tripPointTypes, locations, offers, generateMocksCollection, RANDOM_TOTAL_PRICE} from './mock/mocks.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControls = document.querySelector('.trip-controls');
const tripControlsMenu = tripControls.querySelector('h2:first-of-type');
const tripEventsTitleElement = document.querySelector('.trip-events h2');
const tripEventsSectionElement = document.querySelector('.trip-events');

// Функция отрисовки точки маршрута
const renderTripPoint = (container, tripPoint, tripPointTypes, locations, offers) => {
  const tripPointComponent = new TripPointView(tripPoint);
  const editTripPointComponent = new EditTripPointView(tripPoint, tripPointTypes, locations, offers);

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
renderElement(tripMainElement, new TripPriceView(RANDOM_TOTAL_PRICE).getElement(), RenderPosition.BEFOREEND);

// Добавим меню
renderElement(tripControlsMenu, new MenuView().getElement(), RenderPosition.AFTEREND);

// Добавим фильтры
renderElement(tripControls, new FiltersView().getElement(), RenderPosition.BEFOREEND);


const tripPointsListElement = new TripPointsListView().getElement();

// Добавим сортировку
renderElement(tripEventsTitleElement, new ListSortView().getElement(), RenderPosition.AFTEREND);

// Добавим <ul> для будущего списка пунктов
renderElement(tripEventsSectionElement, tripPointsListElement, RenderPosition.BEFOREEND);

// Сгенерируем масив обьектов-моков
const tripPointsCollection = generateMocksCollection(generateTripPoint);

for (const Item of tripPointsCollection) {
  renderTripPoint(tripPointsListElement, Item, tripPointTypes, locations, offers);
};
