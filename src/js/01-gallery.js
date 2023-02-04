import { galleryItems } from './gallery-items.js';
// Change code below this line


const picturesContainer = document.querySelector('.gallery');
const picturesMarkup = createPictures(galleryItems);

picturesContainer.insertAdjacentHTML('beforeend', picturesMarkup);

picturesContainer.addEventListener('click', onPicturesContainerClick);


function createPictures(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"/>
                </a>
            </div>
            `
    }).join('');
}


function onPicturesContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
    `)

    instance.show();

    window.addEventListener('keydown', onCloseModal);

    function onCloseModal(event) {
        if (event.code === "Escape") {
            instance.close();
            window.removeEventListener('keydown', onCloseModal);
        }
    }
}




