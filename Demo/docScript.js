// console.log('javascript works');

// document.write works!

// document.write('Hello World!');

// let docObj = document.getElementById("para");

// docObj.innerHTML = "This is a paragraph about Computers!";

// docObj.innerHTML = "<p>This is a list about Computers!</p><ol><li>personal computers</li><li>laptops</li><li>tablets</li></ol>";

// docObj.style = "color: brown; font-size: large; font-family: Verdana, Geneva, Tahoma, sans-serif;";

let docElement = document.createElement('p');

docElement.innerHTML = 'This is the third paragraph!';

document.body.appendChild(docElement);

