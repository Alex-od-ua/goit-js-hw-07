import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector("div");

galleryContainerEl.addEventListener("click", onClickShowModal);

const galleryMarkup = createGalleryItems(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);

// const closeModalOnEscButton = window.addEventListener
// window.addEventListener("keydown", closeModalOnEscButton);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(" ");
}

function onClickShowModal(event) {
  event.preventDefault();
  // console.log(event.target.dataset.source);

  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img width="1400" height="900"
    src="${event.target.dataset.source}"
    />
  </div>
  `,
    {
      onShow: (instance) => {
        // window.addEventListener("keydown", closeModalOnEscButton);
        instance.element().querySelector("img").onclick = instance.close;

        // console.log(instance.close);
        document.onkeydown = function (evt) {
          evt = evt || window.event;
          var isEscape = false;
          if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
          } else {
            isEscape = evt.keyCode === 27;
          }
          if (isEscape) {
            instance.close();
          }
        };
      },
    }
  );

  // function closeModalOnEscButton(event) {
  //   console.log(event);
  //   if (event.code === "Escape") {
  //     instance.close();
  //   }
  // }
  // .show();

  instance.show();
}

//
//
//
// console.log(galleryMarkup);
// console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems и предоставленному
// шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй
//  CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы
// библиотеки.

// Открытие модального окна по клику на элементе галереи.Для этого ознакомься с
// документацией и примерами.

// Замена значения атрибута src элемента < img > в модальном окне перед открытием.
//  Используй готовую разметку модального окна с изображением из примеров библиотеки
// basicLightbox.
