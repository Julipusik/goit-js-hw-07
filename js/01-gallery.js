import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const createGalleryItemsMarkup = ({ preview, original, description }) => {
    return `<li class="gallery__item" >
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"/>
                </a>
            </li>`;
};
const galleryItemsMarkup = galleryItems.map(item => createGalleryItemsMarkup(item)).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

galleryEl.addEventListener('click', handlerClickImg);

function handlerClickImg(evt) {
    evt.preventDefault();

    if (evt.target === galleryEl) {
        return;
    }

    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="1300" height="900">`,
        {
            onShow: (instance) => { window.addEventListener('keydown', keydownEscape) },
            onClose: (instance) => { window.removeEventListener('keydown', keydownEscape) },
        });
    instance.show();
}

function keydownEscape (evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }