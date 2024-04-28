const catalogEl = document.querySelector(
  "section.featured_items.center div.catalog"
);
const data = JSON.parse(dataJS);

data.forEach((element) => {
  const templateEl = document.querySelector("#catalogTemplate");
  const clone = templateEl.content.cloneNode(true);
  clone.querySelector(
    "article.catalog__card div.catalog__card__img_wrapper img"
  ).src = element.imgURL;
  clone.querySelector(
    "article.catalog__card div.catalog__card__img_wrapper img"
  ).alt = element.imgAlt;
  clone.querySelector(
    "article.catalog__card div.catalog__card__box h4.catalog__card__heading"
  ).innerHTML = element.manufacturer;
  clone.querySelector(
    "article.catalog__card div.catalog__card__box p.catalog__card__text"
  ).innerHTML = element.description;
  clone.querySelector(
    "article.catalog__card div.catalog__card__box p.catalog__card__price.pink_colored"
  ).innerHTML = element.price;

  catalogEl.appendChild(clone);
});
