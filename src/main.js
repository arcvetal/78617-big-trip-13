import {addNewTripPointTemplate} from './view/add-trip-point.js';
import {createEditTripPointTemplate} from './view/edit-trip-point.js';
import {createFiltersTemplate} from './view/filter.js';
import {createListSortTemplate} from './view/list-sort.js';
import {createMenuTemplate} from './view/menu.js';
import {createTripPointsListTemplate} from './view/trip-points-list.js';
import {createTripPointTemplate} from './view/trip-point.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripPriceTemplate} from './view/trip-price.js';

// Mocks
import {generateTripPoint} from './mock/mocks.js';
import {generateMocksCollection} from './mock/mocks.js';

const POINTS_COUNT = 17;

const tripMainElement = document.querySelector('.trip-main');
const tripMenuTitleElement = document.querySelector('.trip-controls :first-child');
const tripFilterTitleElement = document.querySelector('.trip-controls :last-child');
const tripEventsTitleElement = document.querySelector('.trip-events h2');
const tripEventsSectionElement = document.querySelector('.trip-events');

// Рендер компонента
const render = (targetEl, template, position) => {
  targetEl.insertAdjacentHTML(position, template);
};

// Добавмим информацию о маршруте
render(tripMainElement, createTripInfoTemplate(), 'afterbegin');

// Добавим стоимость поездки
render(tripMainElement, createTripPriceTemplate(), 'beforeend');

// Добавим меню
render(tripMenuTitleElement, createMenuTemplate(), 'afterend');

// Добавим фильтры
render(tripFilterTitleElement, createFiltersTemplate(), 'afterend');

// Добавим сортировку
render(tripEventsTitleElement, createListSortTemplate(), 'afterend');

// Добавим <ul> для будущего списка пунктов
render(tripEventsSectionElement, createTripPointsListTemplate(), 'beforeend');

// Найдем только что добавленный <ul>
const tripPointsListElement = document.querySelector('.trip-events__list');



// Добавим форму добавления нового пункта
render(tripPointsListElement, addNewTripPointTemplate(), 'beforeend');



// Сгенерируем масив обьектов-моков


const tripPointsCollection = generateMocksCollection(generateTripPoint);

console.log(tripPointsCollection);

// Добавим форму редактора пункта
render(tripPointsListElement, createEditTripPointTemplate(tripPointsCollection[0]), 'afterbegin');

// Добавим список пунктов
for (let i = 1; i < POINTS_COUNT; i++) {
  render(tripPointsListElement, createTripPointTemplate(tripPointsCollection[i]), 'beforeend');
}





