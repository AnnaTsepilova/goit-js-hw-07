import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');
let instance;

galleryItemsRef.addEventListener("click", onBigSizeImage);
document.addEventListener("keydown", event => {
    if (event.code !== "Escape") {
        return;
    }
    instance.close()
});

initGallery(galleryItems);

function createItem(galleryItem) {
    
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img
            class="gallery__image"
            src="${galleryItem.preview}"
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
            />
        </a>
    </div>`;
}

function initGallery(galleryItems) {
    const galleryItemsMarkup = galleryItems.map(galleryItem => {
       return createItem(galleryItem);
         
    })
    .join("");
    
    galleryItemsRef.innerHTML = galleryItemsMarkup;
    
}

function onBigSizeImage(event) {
    
    if (event.target.nodeName !== "IMG") {
        return;
    }

    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);

    instance.show();

    event.preventDefault();
}

console.log(galleryItems);
