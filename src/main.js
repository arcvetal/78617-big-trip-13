import {addNewPointTemplate} from './view/add-point.js';
import {createEditPointTemplate} from './view/edit-point.js';
import {createFiltersTemplate} from './view/filter.js';
import {createListSortTemplate} from './view/list-sort.js';
import {createMenuTemplate} from './view/menu.js';
import {createpointsListTemplate} from './view/points-list.js';
import {createPointTemplate} from './view/point.js';
import {createRouteInfoTemplate} from './view/route-info.js';
import {createRoutePriceTemplate} from './view/route-price.js';

const pointsCount = 3;

const tripMain = document.querySelector('.trip-main');
const tripMenuTitle = document.querySelector('.trip-controls :first-child');
const tripFilterTitle = document.querySelector('.trip-controls :last-child');
const tripeventsTitle = document.querySelector('.trip-events h2');
const tripeventsSection = document.querySelector('.trip-events');


// Рендер компонента
function render(targetEl, template, position) {
  targetEl.insertAdjacentHTML(position, template);
}


// Добавмим информацию о маршруте
render(tripMain, createRouteInfoTemplate(), 'afterbegin');

// Добавим стоимость поездки
render(tripMain, createRoutePriceTemplate(), 'beforeend');

// Добавим меню
render(tripMenuTitle, createMenuTemplate(), 'afterend');

// Добавим фильтры
render(tripFilterTitle, createFiltersTemplate(), 'afterend');

// Добавим сортировку
render(tripeventsTitle, createListSortTemplate(), 'afterend');

// Добавим <ul> для будущего списка пунктов
render(tripeventsSection, createpointsListTemplate(), 'beforeend');

// Найдем только что добавленный <ul>
const pointsList = document.querySelector('.trip-events__list');

// Добавим форму редактора пункта
render(pointsList, createEditPointTemplate(), 'afterbegin');

// Добавим форму добавления нового пункта
render(pointsList, addNewPointTemplate(), 'beforeend');

// Добавим список пунктов
for (let i = 0; i < pointsCount; i++) {
  render(pointsList, createPointTemplate(), 'beforeend');
}


