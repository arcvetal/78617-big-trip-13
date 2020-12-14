// import AddTripPointView from './view/add-trip-point.js';
import EditTripPointView from './view/edit-trip-point.js';
import FiltersView from './view/filters.js';
import ListSortView from './view/list-sort.js';
import MenuView from './view/menu.js';
import TripPointsListView from './view/trip-points-list.js';
import TripPointView from './view/trip-point.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import {createElement, renderElement, RenderPosition} from './utils/utils.js';

// Mocks
import {generateTripPoint, tripPointTypes, locations, offers, generateMocksCollection, RANDOM_TOTAL_PRICE, emptyListTemplate} from './mock/mocks.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsElement = document.querySelector('.trip-controls');
const tripControlsMenuElement = tripControlsElement.querySelector('h2:first-of-type');
const tripEventsSectionElement = document.querySelector('.trip-events');
const tripEventsTitleElement = tripEventsSectionElement.querySelector('h2');



// Сгенерируем масив обьектов-моков
const tripPoints = generateMocksCollection(generateTripPoint);

// Функция отрисовки точки маршрута
const renderTripPoint = (container, tripPoint, tripPointTypes, locations, offers) => {
  const tripPointComponent = new TripPointView(tripPoint);
  const editTripPointComponent = new EditTripPointView(tripPoint, tripPointTypes, locations, offers);

  const tripPointItem = tripPointComponent.getElement();
  const editTripPointItem = editTripPointComponent.getElement();

  const replacePointToFormEdit = () => {
    container.replaceChild(editTripPointItem, tripPointItem);
  };

  const replaceFormEditToPoint = () => {
    container.replaceChild(tripPointItem, editTripPointItem);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceFormEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }

  editTripPointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormEditToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  tripPointComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToFormEdit();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editTripPointComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormEditToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  renderElement(container, tripPointComponent.getElement(), RenderPosition.BEFOREEND);
}

// Добавмим информацию о маршруте
renderElement(tripMainElement, new TripInfoView(locations).getElement(), RenderPosition.AFTERBEGIN);

// Добавим стоимость поездки
renderElement(tripMainElement, new TripPriceView(RANDOM_TOTAL_PRICE).getElement(), RenderPosition.BEFOREEND);

// Добавим меню
renderElement(tripControlsMenuElement, new MenuView().getElement(), RenderPosition.AFTEREND);

// Добавим фильтры
renderElement(tripControlsElement, new FiltersView().getElement(), RenderPosition.BEFOREEND);


const tripPointsListElement = new TripPointsListView().getElement();

// Добавим сортировку
renderElement(tripEventsTitleElement, new ListSortView().getElement(), RenderPosition.AFTEREND);


if (tripPoints.length > 0) {
  // Добавим <ul> для будущего списка пунктов
  renderElement(tripEventsSectionElement, tripPointsListElement, RenderPosition.BEFOREEND);

  for (const item of tripPoints) {
    renderTripPoint(tripPointsListElement, item, tripPointTypes, locations, offers);
  };
} else {
  renderElement(tripEventsSectionElement, createElement(emptyListTemplate), RenderPosition.BEFOREEND);
}
