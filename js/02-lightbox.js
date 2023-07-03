import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createGalleryItemsMarkup = ({ preview, original, description }) => {
    return `<li class="gallery__item" >
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}"/>
                </a>
            </li>`;
};
const galleryItemsMarkup = galleryItems.map(item => createGalleryItemsMarkup(item)).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryEl.addEventListener('click', handlerClickImg);

function handlerClickImg (evt) {
    evt.preventDefault();

    if (evt.target === galleryEl) {
        return;
    }

    var lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:250,});
}
