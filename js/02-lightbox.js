import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

const galleryMarkup = createGalleryItems(galleryItems);

galleryContainerEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" 
      title="${description}" /></a>
      </li>`;
    })
    .join(" ");
}

const gallery = new SimpleLightbox(".gallery a", { captionDelay: 250 });

console.log(galleryItems);
