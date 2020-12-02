const appendOffers = (array) => {
  let offers = ``;

  offers += array.map((obj) => {
    return `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${obj.id}-1" type="checkbox" name="event-offer-luggage" checked>
              <label class="event__offer-label" for="event-offer-${obj.id}-1">
                <span class="event__offer-title">${obj.offerLabel}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${obj.offerPrice}</span>
              </label>
            </div>`;
  });

  return offers;
};

export const createEventOfferTemplate = ({offers}) => {
  return `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">

    ${appendOffers(offers)}

    </div>
  </section>`;
};
