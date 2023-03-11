// create a new paragraph element
let newParagraph = document.createElement("p");

// console.log(newParagraph);
newParagraph.textContent = 'This is a new Paragraph!';
console.log(newParagraph);

// add some attributes to the newParagraph
newParagraph.setAttribute('class', 'primary');
// newParagraph.setAttribute('class', 'box');
newParagraph.classList.add('box');
// newParagraph.classList.add('boxBackground');

// if (newParagraph.classList.contains('boxBackground')) {
//     newParagraph.classList.remove('boxBackground');
// }

let colors = ['#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FF00FF', '#0F0F0F'];
let currentColor = 0;

// append the newParagraph element into the existing div with id pdiv
document.getElementById('pdiv').appendChild(newParagraph);

let toggleBackgroundButton = document.getElementById('toggleBackground');
toggleBackgroundButton.addEventListener('click', function () {
    // newParagraph.classList.toggle('boxBackground'); 
    newParagraph.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;

});

let image = document.createElement('img');
image.setAttribute('src', 'logo.png');
image.style.width = "30%";
document.getElementById('pdiv').appendChild(image);

let link = document.createElement('a');
link.innerText = 'Visit Google.com';
link.setAttribute('href', 'https://www.google.com');

document.getElementById('pdiv').appendChild(link);

let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

// create an unordered list
let list = document.createElement('ul');

// let listItem1 = document.createElement('li');
// listItem1.textContent = 'Item 1';

// let listItem2 = document.createElement('li');
// listItem2.textContent = 'Item 2';

// list.appendChild(listItem1);
// list.appendChild(listItem2);

items.forEach((item) => {
    // create a list element
    let listItem = document.createElement('li');
    listItem.textContent = item;

    list.appendChild(listItem);
});

document.getElementById('pdiv').appendChild(list);


// let listItems = document.getElementsByClassName('item');

// Array.from(listItems).forEach(listItem => {
//     console.log(listItem.textContent);
// });

// console.log(listItems);

// let firstItem = document.querySelector('.item');

// console.log(firstItem.textContent);

// let allItems = document.querySelectorAll('.item');

// allItems.forEach(item => console.log(item.textContent));

// console.log(allItems);

// let selectedItem = document.querySelector('.coffee.item');

// console.log(selectedItem.textContent);

let exampleDiv = document.getElementById('exampleDiv');

// exampleDiv.innerHTML = '<p>A New Paragraph!</p>';

let paragraph1 = document.createElement('p');
paragraph1.textContent = 'paragraph 1';

let paragraph2 = document.createElement('p');
paragraph2.textContent = 'paragraph 2';

exampleDiv.append(paragraph1, paragraph2);