export const createOrdersList = (array) => {

  let offersList = ``;

  for (let i = 0; i < array.length; i++) {
    offersList += `<li class="event__offer">
                    <span class="event__offer-title">${array[i].offerTitle}</span>
                    &plus;&euro;&nbsp;
                    <span class="event__offer-price">${array[i].offerPrice}</span>
                  </li>`;
  }

  return offersList;
}

