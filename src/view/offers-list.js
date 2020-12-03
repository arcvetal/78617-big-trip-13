export const createOffers = (array) => {

  let offersList = ``;

  offersList += array.map((item) => {
    return `<li class="event__offer">
              <span class="event__offer-title">` + item.offerLabel + `</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">` + item.offerPrice + `</span>
            </li>`;
  }).join(``);

  return offersList;
};
