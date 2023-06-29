



import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector('.gallery');
console.log(list);

function createMarkup(arr) {
    return arr.map(({preview, original, description}) =>`
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}"
    alt="${description}">
    </a>
    </li>`).join('')
}
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });