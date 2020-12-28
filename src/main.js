
import FiltersView from './view/filters.js';
import TripPresenter from './presenter/trip.js';
import MenuView from './view/menu.js';
import {renderElement, RenderPosition, replaceElement} from './utils/render.js';

// Mocks
import {generateTripPoint, tripPointTypes, locations, offers, generateMocksCollection, RANDOM_TOTAL_PRICE} from './mock/mocks.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsElement = document.querySelector('.trip-controls');
const tripControlsMenuElement = tripControlsElement.querySelector('h2:first-of-type');
const tripEventsSectionElement = document.querySelector('.trip-events');
const tripEventsTitleElement = tripEventsSectionElement.querySelector('h2');

// Сгенерируем масив обьектов-моков
const tripPoints = generateMocksCollection(generateTripPoint);

// Добавим меню
//
renderElement(tripControlsMenuElement, new MenuView(), RenderPosition.AFTEREND);

// Добавим фильтры
//
renderElement(tripControlsElement, new FiltersView(), RenderPosition.BEFOREEND);



const tripPresenter = new TripPresenter(tripMainElement, tripControlsElement, tripControlsMenuElement, tripEventsSectionElement, tripEventsTitleElement);
tripPresenter.init(tripPoints, tripPointTypes, locations, offers);
