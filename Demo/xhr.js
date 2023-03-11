// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// xhr.onreadystatechange = function(){
//     // if(xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200){
//     //     let response = JSON.parse(xhr.responseText);
//     //     console.log(response[0].body, response[0].title);
//     // }
//     // console.log(xhr.responseText);
//     // 
    
//     let response = JSON.parse(xhr.responseText);
//     let docObj = document.getElementById("content");


//     docObj.innerHTML = response[0].title;
// };

// xhr.send(); // making the request

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data[0].title))
// .catch(error => console.error(error))