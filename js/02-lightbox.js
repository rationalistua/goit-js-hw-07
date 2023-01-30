import { galleryItems } from './gallery-items.js';
// Change code below this line
const picturesContainer = document.querySelector('.gallery');
const picturesMarkup = createPictures(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', picturesMarkup);


function createPictures(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            `
    }).join('');
}
    
// console.log(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
