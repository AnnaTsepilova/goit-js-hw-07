import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');

initGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });

function createItem(galleryItem) {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img 
            class="gallery__image"
            src="${galleryItem.preview}"
            alt="${galleryItem.description}" />
        </a>
    </li>`;
}

function initGallery(galleryItems) {
    const galleryItemsMarkup = galleryItems.map(galleryItem => {
       return createItem(galleryItem);
         
    })
    .join("");
    
    galleryItemsRef.innerHTML = galleryItemsMarkup;
    
}

console.log(galleryItems);
