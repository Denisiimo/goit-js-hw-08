import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
const itemCreate = cardCreate(galleryItems);
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', itemCreate);

const simple = new SimpleLightbox(".gallery a", { captionDelay: 250, CaptionsData: "alt" });

function cardCreate(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`
    }).join('');
}
console.log(galleryItems);
