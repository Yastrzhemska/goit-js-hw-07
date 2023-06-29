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

list.addEventListener('click', handlerClickList);

function handlerClickList(evt) {
    evt.preventDefault()
    if (evt.target.classList.contains('gallery__item')) {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" 
    width="800" height ="600">`,
        {
            onShow: () => { document.addEventListener("keydown", handlerKeyDownEscape) },
            onClose: () => { document.removeEventListener("keydown", handlerKeyDownEscape) },
        });
    


    function handlerKeyDownEscape(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }

    // document.addEventListener("keydown", handlerKeyDownEscape);
    // document.removeEventListener("keydown", handlerKeyDownEscape);

    instance.show();
}