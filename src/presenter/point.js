import {renderElement, RenderPosition, replaceElement} from '../utils/render.js';
import {ESCAPE_KEY_NAME, ESC_KEY_NAME} from '../utils/common.js';

import EditTripPointView from '../view/edit-trip-point.js';
import TripPointView from '../view/trip-point.js';

// Функция отрисовки точки маршрута
export default class Point {
  constructor(container) {
    this._container = container;
  }

  init(tripPoint, tripPointTypes, locations, offers) {
    this._tripPointComponent = new TripPointView(tripPoint);
    this._editTripPointComponent = new EditTripPointView(tripPoint, tripPointTypes, locations, offers);
    this._editTripPointComponent.setEditClickHandler(this._onEditFormClose);
    this._editTripPointComponent.setFormSubmitHandler(this._onEditFormClose);
    this._tripPointComponent.setTripPointClickHandler(this._replacePointToFormEdit);
    renderElement(this._container, this._tripPointComponent, RenderPosition.BEFOREEND);
  }

  _replacePointToFormEdit() {
    replaceElement(this._editTripPointComponent, this._tripPointComponent);
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  _replaceFormEditToPoint() {
    replaceElement(this._tripPointComponent, this._editTripPointComponent);
  }

  _onEditFormClose() {
    this._replaceFormEditToPoint();
    document.removeEventListener(`keydown`, this._onEscKeyDown);
  }

  _onEscKeyDown(evt) {
    if (evt.key === ESCAPE_KEY_NAME || evt.key === ESC_KEY_NAME) {
      evt.preventDefault();
      this._onEditFormClose();
    }
  }
}
