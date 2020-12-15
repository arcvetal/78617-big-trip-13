import {createElement} from "../utils/utils";

const renderImages = (images = []) => {
  return `<div class="event__photos-container">
            <div class="event__photos-tape">
              ${images
                .map((imageUrl) => {
                  return `<img class="event__photo" src="${imageUrl}" alt="Event photo">`;
                })
                .join(``)}
            </div>
          </div>`;
};

const createEventDestinationTemplate = (photoGallery) => {
  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
    ${photoGallery ? renderImages(photoGallery) : ``}
  </section>`;
};

export default class EventDestination {
  constructor({photoGallery} = {}) {
    this._photoGallery = photoGallery;
    this._element = null;
  }

  getTemplate() {
    return createEventDestinationTemplate(this._photoGallery);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
