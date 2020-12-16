// import AddTripPointView from './view/add-trip-point.js';
import EditTripPointView from './view/edit-trip-point.js';
import FiltersView from './view/filters.js';
import ListSortView from './view/list-sort.js';
import MenuView from './view/menu.js';
import TripPointsListView from './view/trip-points-list.js';
import TripPointView from './view/trip-point.js';
import TripInfoView from './view/trip-info.js';
import TripPriceView from './view/trip-price.js';
import {renderElement, RenderPosition, replace} from './utils/render.js';

// Mocks
import {generateTripPoint, tripPointTypes, locations, offers, generateMocksCollection, RANDOM_TOTAL_PRICE, ESCAPE_KEY_NAME, ESC_KEY_NAME} from './mock/mocks.js';

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

  const tripPointItemElement = tripPointComponent.getElement();
  const edittripPointItemElement = editTripPointComponent.getElement();

  const replacePointToFormEdit = () => {
    replace(edittripPointItemElement, tripPointItemElement);
  };

  const replaceFormEditToPoint = () => {
    replace(tripPointItemElement, edittripPointItemElement);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === ESCAPE_KEY_NAME || evt.key === ESC_KEY_NAME) {
      evt.preventDefault();
      replaceFormEditToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  }

  editTripPointComponent.setEditClickHandler(() => {
    replaceFormEditToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  tripPointComponent.setTripPointClickHandler(() => {
    replacePointToFormEdit();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editTripPointComponent.setFormSubmitHandler(() => {
    replaceFormEditToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  renderElement(container, tripPointComponent, RenderPosition.BEFOREEND);
}

// Добавмим информацию о маршруте
renderElement(tripMainElement, new TripInfoView(locations), RenderPosition.AFTERBEGIN);

// Добавим стоимость поездки
renderElement(tripMainElement, new TripPriceView(RANDOM_TOTAL_PRICE), RenderPosition.BEFOREEND);

// Добавим меню
renderElement(tripControlsMenuElement, new MenuView(), RenderPosition.AFTEREND);

// Добавим фильтры
renderElement(tripControlsElement, new FiltersView(), RenderPosition.BEFOREEND);

// Если tripPoints.length === 0, то в tripPointsListElement отобразится сообщение о добавлении первой точки
const tripPointsListElement = new TripPointsListView(tripPoints.length).getElement();

// Добавим сортировку
renderElement(tripEventsTitleElement, new ListSortView(), RenderPosition.AFTEREND);

renderElement(tripEventsSectionElement, tripPointsListElement, RenderPosition.BEFOREEND);

if (tripPointsListElement.classList.contains('trip-events__list')) {
  for (const item of tripPoints) {
    renderTripPoint(tripPointsListElement, item, tripPointTypes, locations, offers);
  };
}
