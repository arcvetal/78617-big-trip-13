import {addNewTripPointTemplate} from './view/add-point.js';
import {createEditTripPointTemplate} from './view/edit-point.js';
import {createFiltersTemplate} from './view/filter.js';
import {createListSortTemplate} from './view/list-sort.js';
import {createMenuTemplate} from './view/menu.js';
import {createTripPointsListTemplate} from './view/points-list.js';
import {createTripPointTemplate} from './view/point.js';
import {createTripInfoTemplate} from './view/trip-info.js';
import {createTripPriceTemplate} from './view/trip-price.js';

const POINTS_COUNT = 3;

const tripMain = document.querySelector('.trip-main');
const tripMenuTitle = document.querySelector('.trip-controls :first-child');
const tripFilterTitle = document.querySelector('.trip-controls :last-child');
const tripEventsTitle = document.querySelector('.trip-events h2');
const tripEventsSection = document.querySelector('.trip-events');

// Рендер компонента
const render = (targetEl, template, position) => {
  targetEl.insertAdjacentHTML(position, template);
};

// Добавмим информацию о маршруте
render(tripMain, createTripInfoTemplate(), 'afterbegin');

// Добавим стоимость поездки
render(tripMain, createTripPriceTemplate(), 'beforeend');

// Добавим меню
render(tripMenuTitle, createMenuTemplate(), 'afterend');

// Добавим фильтры
render(tripFilterTitle, createFiltersTemplate(), 'afterend');

// Добавим сортировку
render(tripEventsTitle, createListSortTemplate(), 'afterend');

// Добавим <ul> для будущего списка пунктов
render(tripEventsSection, createTripPointsListTemplate(), 'beforeend');

// Найдем только что добавленный <ul>
const tripPointsList = document.querySelector('.trip-events__list');

// Добавим форму редактора пункта
render(tripPointsList, createEditTripPointTemplate(), 'afterbegin');

// Добавим форму добавления нового пункта
render(tripPointsList, addNewTripPointTemplate(), 'beforeend');

// Добавим список пунктов
for (let i = 0; i < POINTS_COUNT; i++) {
  render(tripPointsList, createTripPointTemplate(), 'beforeend');
}
