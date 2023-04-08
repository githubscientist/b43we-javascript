

let form = document.getElementById('dictform');
let wordInfo = document.getElementById('meaningforword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let word= document.getElementById('wordinput').value;
    getmeaning(word);
});

async function getmeaning(word) {
    // make a request to the api
    // get the details
    // parse the details to the html

    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let data = await response.json();
        let paragraph=document.createElement('p');
        paragraph.textContent='Meaning';
        wordInfo.appendChild(paragraph);
        let list=document.createElement('ul');
        let meanings=data[0].meanings;

        list.style.listStyleType='none';
        for(let partofspeech of meanings)
        {
            let listitem=document.createElement('li');
            listitem.innerHTML = `partofspeech: <i>${partofspeech.partOfSpeech}</i>`;
            let definitions = partofspeech.definitions;
            let subList = document.createElement('ul');
            subList.style.listStyleType = 'none';
            for (let definition of definitions) {
                let subListItem = document.createElement('li');
                subListItem.innerHTML = `"<strong>${definition.definition}</strong>"`;
                subList.appendChild(subListItem);
            }
            listitem.appendChild(subList);
            list.appendChild(listitem);
        }
        wordInfo.innerHTML = '';
        wordInfo.appendChild(list);
      
    } catch (error) {
        console.error('error fetching meaning for word data');
    }
}