const cartItemsEl = document.querySelector("section.cart_items.center");

const cartItemsItemsEl = cartItemsEl.querySelector(
  "section.cart_items.center div.cart_items__items"
);

const buttonAddToCartElems = document.querySelectorAll(
  "section.featured_items.center div.catalog article.catalog__card div.catalog__card__img_wrapper button.button_add_to_cart"
);

const templateCartEl = cartItemsEl.querySelector("#cartTemplate");

buttonAddToCartElems.forEach((button) => {
  button.addEventListener("click", (e) => {
    const unit = button.parentElement.parentElement;
    const unitSrc = unit.firstElementChild.firstElementChild.src;
    for (let i = 0; i < data.length; i++) {
      if (unitSrc.includes(data[i].imgURL.slice(1))) {
        const unitToBuy = data[i];
        const cloneCart = templateCartEl.content.cloneNode(true);
        cloneCart.querySelector("div.cart_items__item img").src =
          unitToBuy.imgURL;
        cloneCart.querySelector("div.cart_items__item img").alt =
          unitToBuy.imgAlt;
        cloneCart.querySelector(
          "div.cart_items__item div.cart_items__item__card h3"
        ).innerHTML = unitToBuy.manufacturer;
        cloneCart.querySelector(
          "div.cart_items__item div.cart_items__item__card div.cart_items__item__card__info p span.price_value"
        ).innerHTML = unitToBuy.price;
        cloneCart.querySelector(
          "div.cart_items__item div.cart_items__item__card div.cart_items__item__card__info p span.color_size_quantity_value"
        ).innerHTML = unitToBuy.color;
        const purchase = [...cartItemsItemsEl.children];
        if (purchase.length === 0) {
          cartItemsItemsEl.appendChild(cloneCart);
          cartItemsEl.style.display = "block";
        } else {
          cartItemsItemsEl.appendChild(cloneCart);
          for (let j = 0; j < purchase.length; j++) {
            if (purchase[j].firstElementChild.src === unitSrc) {
              cartItemsItemsEl.lastElementChild.remove();
              break;
            }
          }
        }
      }
    }
    const crossEls = document.querySelectorAll(
      "section.cart_items div.cart_items__item div.cart_items__item__card svg"
    );
    crossEls.forEach((crossEl) => {
      crossEl.addEventListener("click", (e) => {
        crossEl.parentElement.parentElement.remove();
        const purchase = [...cartItemsItemsEl.children];
        if (purchase.length === 0) cartItemsEl.style.display = "none";
      });
    });
  });
});
