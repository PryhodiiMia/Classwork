// const listEl = document.querySelector("ul")
// console.log(listEl)
// const firstItemEl = listEl.firstElementChild
// console.log(firstItemEl)
// const listElOne = firstItemEl.parentNode
// console.log(listElOne)

const img = document.querySelector(".hero__image");
console.dir(img);
img.src = "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";

// img.alt = "cat";

// /*
//  * Атрибути
//  * - get(ім'я-атрибута)
//  * - set(ім'я-атрибута)
//  * - remove(ім'я-атрибута)
//  * - has(ім'я-атрибута)
//  */

// console.log(img.hasAttribute('alt'));
// img.removeAttribute('src')


// console.log(mainTitle.textContent)

// const linkEl = document.querySelector('.site-nav__link')

// linkEl.style.color = 'green';
// linkEl.style.backgroundColor = 'aqua';

/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

const mainTitle = document.querySelector('.hero__title')
// mainTitle.classList.add('main_title')
// mainTitle.classList.remove('hero__title')
console.log(mainTitle.classList)

mainTitle.addEventListener('click', () => {
    mainTitle.classList.toggle('toggle')
    mainTitle.classList.replace('hero__title', 'replace')
    // mainTitle.classList.contains('hero__title')
    console.log(mainTitle.classList.contains('toggle'))
})