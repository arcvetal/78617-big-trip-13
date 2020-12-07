import {createAddTripPointTemplate} from './view/add-trip-point.js';
import {createEditTripPointTemplate} from './view/edit-trip-point.js';
// import {createFiltersTemplate} from './view/filter.js';
import FiltersMenuView from './view/filter.js';
import {createListSortTemplate} from './view/list-sort.js';
import {createMenuTemplate} from './view/menu.js';
import {createTripPointsListTemplate} from './view/trip-points-list.js';
import {createTripPointTemplate} from './view/trip-point.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripPriceTemplate} from './view/trip-price.js';
import {renderTemplate, renderElement} from './utils/utils.js';

// Mocks
import {generateTripPoint} from './mock/mocks.js';
import {allTypesAndLocations} from './mock/mocks.js';
import {allOffers} from './mock/mocks.js';
import {generateMocksCollection} from './mock/mocks.js';

const POINTS_COUNT = 17;

const tripMainElement = document.querySelector('.trip-main');
const tripControls = document.querySelector('.trip-controls');
const tripMenuTitleElement = document.querySelector('.trip-controls :first-child');
const tripEventsTitleElement = document.querySelector('.trip-events h2');
const tripEventsSectionElement = document.querySelector('.trip-events');


// Добавмим информацию о маршруте
renderTemplate(tripMainElement, createTripInfoTemplate(), 'afterbegin');

// Добавим стоимость поездки
renderTemplate(tripMainElement, createTripPriceTemplate(), 'beforeend');

// Добавим меню
renderTemplate(tripMenuTitleElement, createMenuTemplate(), 'afterend');

// Добавим фильтры
// renderTemplate(tripFilterTitleElement, createFiltersTemplate(), 'afterend');
renderElement(tripControls, new FiltersMenuView().getElement(), 'beforeend');

// Добавим сортировку
renderTemplate(tripEventsTitleElement, createListSortTemplate(), 'afterend');

// Добавим <ul> для будущего списка пунктов
renderTemplate(tripEventsSectionElement, createTripPointsListTemplate(), 'beforeend');

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
  renderTemplate(tripPointsListElement, createTripPointTemplate(tripPointsCollection[i]), 'beforeend');
}
