// 1: Get the node with the  main title

console.log(document.querySelector('h1'))

// => <h1>Fruits and veggies</h1>


// 2: Get the main title text

console.log(document.querySelector('h1').innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

console.log(document.getElementsByClassName('fruit-item'))

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

const veggies = Array.from(document.getElementsByClassName('veggie-item'))

const veg = veggies.map(e=>(e.innerText))

console.log(veg.toString())

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

const subVeg = document.querySelectorAll('h2')[1].innerText;
console.log(subVeg)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

const subFru = document.querySelectorAll('h2')[0]

subFru.setAttribute('id', 'fruit-title')

console.log(document.querySelector('h2'))

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

const bestFru = document.getElementsByClassName('fruit-item');

bestFru[0].classList.add('best-fruit')
bestFru[2].classList.add('best-fruit')

console.log(bestFru[2])
console.log(bestFru[0])


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

const vegCl = document.querySelector("div.list-veggies ul")


vegCl.removeAttribute('class');

console.log(vegCl)

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

const vg = Array.from(document.getElementsByClassName('veggie-item'))

vg.forEach(element=>element.classList.add('veggie-love'))

console.log(vg[0])

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

const spi = document.getElementsByClassName('veggie-item')[3]

spi.classList.remove('veggie-item')

console.log(spi)

// => ... <li class="veggie-love">Spinach</li>