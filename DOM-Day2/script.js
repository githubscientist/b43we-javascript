// console.log(window);

// Properties of Window Object

// 1. window.innerHeight and window.innerWidth
// output the browser's viewport height and width excluding toolbars and scrollbars
// represent only the height and width of the actual content area where 
// our webpage can be displayed.
// console.log(`Inner Height: ${window.innerHeight}`);
// console.log(`Inner Width: ${window.innerWidth}`);


// output the height and width of the entire browser window including toolbars and scrollbars, addressbar
// full dimensions of the browser window including the content area
// console.log(`Outer Height: ${window.outerHeight}`);
// console.log(`Outer Width: ${window.outerWidth}`);

// window.location
// console.log(window.location);
// console.log(`window location href: ${window.location.href}`);
// console.log(`window location protocol: ${window.location.protocol}`);
// console.log(`window location host: ${window.location.host}`);
// console.log(`window location pathname: ${window.location.pathname}`);

// console.log(window.location.href);

// setting up a new location to a new url
// window.location.assign('https://www.google.com');

// let button = document.createElement('button');

// button.textContent = 'Next Page';

// button.addEventListener('click', () => {
//     window.location.assign('http://127.0.0.1:3000/DOM-Day2/next.html')
// });

// document.querySelector('body').appendChild(button);

// window.location.reload();

// window.location.search

// let queryString = window.location.search;

// let params = new URLSearchParams(queryString);

// // console.log(params);

// let paramsValue = params.get('name');

// document.getElementById('query-param').textContent = paramsValue;

// setTimeout method

// let printMessage = (name) => {
//     console.log(`Hi ${name}`);
// }

// window.setTimeout(printMessage, 3000, 'sathish');

// let count = 5;
// let timer = setTimeout(() => {
//     console.log('Time Up');
// }, (count+1) * 1000);

// let interval = setInterval(() => {
//     console.log(count--);
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
//     clearTimeout(timer);
//     console.log('Countdown cancelled');
// }, (count+1) * 1000);

// setTimeout(() => {
//     console.log('hello');
// }, 5000);

// let interval = setInterval(() => {
//     console.log('hello');
// }, 1000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);

// setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 1000);

let notification = document.getElementById('notification');

notification.style.display = 'block';

setTimeout(function () {
    notification.style.display = 'none';
}, 5000);


