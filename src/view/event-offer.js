const appendOffers = (offers) => {
  return offers.map((offer) => {
    return `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="event-offer-${offer.id}-1">
                <span class="event__offer-title">${offer.offerLabel}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.offerPrice}</span>
              </label>
            </div>`;
  }).join(``);
};

export const createEventOfferTemplate = (offers) => {
  return `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">

    ${appendOffers(offers)}

    </div>
  </section>`;
};
