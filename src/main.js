import {createAddTripPointTemplate} from './view/add-trip-point.js';
import {createEditTripPointTemplate} from './view/edit-trip-point.js';
import FiltersView from './view/filter.js';
import ListSortView from './view/list-sort.js';
// import {createMenuTemplate} from './view/menu.js';
import TripMenuView from './view/menu.js';
import TripPointListView from './view/trip-points-list.js';
// import {createTripPointTemplate} from './view/trip-point.js';
import TripPointView from './view/trip-point.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import {renderTemplate, renderElement, RenderPosition} from './utils/utils.js';

// Mocks
import {generateTripPoint} from './mock/mocks.js';
import {allTypesAndLocations} from './mock/mocks.js';
import {allOffers} from './mock/mocks.js';
import {generateMocksCollection} from './mock/mocks.js';

const POINTS_COUNT = 17;

const tripMainElement = document.querySelector('.trip-main');
const tripControls = document.querySelector('.trip-controls');
// const tripMenuTitleElement = document.querySelector('.trip-controls :first-child');
// const tripEventsTitleElement = document.querySelector('.trip-events');
const tripEventsSectionElement = document.querySelector('.trip-events');


// Добавмим информацию о маршруте
// renderTemplate(tripMainElement, createTripInfoTemplate(), 'afterbegin');
renderElement(tripMainElement, new TripInfoView().getElement(), RenderPosition.AFTERBEGIN);

// Добавим стоимость поездки
// renderTemplate(tripMainElement, createTripPriceTemplate(), 'beforeend');
renderElement(tripMainElement, new TripPriceView().getElement(), RenderPosition.BEFOREEND);

// Добавим меню
// renderTemplate(tripMenuTitleElement, createMenuTemplate(), 'afterend');
renderElement(tripControls, new TripMenuView().getElement(), RenderPosition.AFTERBEGIN);

// Добавим фильтры
// renderTemplate(tripFilterTitleElement, createFiltersTemplate(), 'afterend');
renderElement(tripControls, new FiltersView().getElement(), RenderPosition.BEFOREEND);

// Добавим сортировку
// Вставил перед заголовком, но в index.html указано после. Уточнить
renderElement(tripEventsSectionElement, new ListSortView().getElement(), RenderPosition.AFTERBEGIN);

// Добавим <ul> для будущего списка пунктов
renderElement(tripEventsSectionElement, new TripPointListView().getElement(), RenderPosition.BEFOREEND);

// Найдем только что добавленный <ul>
const tripPointsListElement = document.querySelector('.trip-events__list');




// Сгенерируем масив обьектов-моков
const tripPointsCollection = generateMocksCollection(generateTripPoint);


// Добавим форму редактора пункта
renderTemplate(tripPointsListElement, createEditTripPointTemplate(tripPointsCollection[0], allTypesAndLocations(), allOffers()), 'afterbegin');


// Добавим форму добавления нового пункта
renderTemplate(tripPointsListElement, createAddTripPointTemplate(tripPointsCollection[0], allTypesAndLocations(), allOffers()), 'beforeend');


// Добавим список пунктов
for (let i = 1; i < POINTS_COUNT; i++) {
  renderElement(tripPointsListElement, new TripPointView(tripPointsCollection[i]).getElement(), RenderPosition.BEFOREEND);
}
