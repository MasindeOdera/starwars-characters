//the results will be displayed in the div#results.
const results = document.querySelector('#results');


//get the search value from the user.
document.querySelector('#button').addEventListener('click', e => {
    let query = document.getElementById('input').value;
    asyncFetch(query.trim().toLowerCase());
});

//fetch the data
async function asyncFetch(query) {
    const res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
    const data = await res.json();
    displayResults(data);
}

//display the data
function displayResults(data) {
    let output;
    let url = [];
    for(let i = 0; i < data.results.length; i++){
        output += `<div class='card' id='myCheck'><a href='#' id='${data.results[i].url}'>${data.results[i].name}</a></div>`;
        url.push(data.results[i].url);
    }
    results.innerHTML = output;
}

//get the search value from the user.
document.querySelector('#myCheck').addEventListener('click', e => {
    let detail = e.target.textContent.trim().toLowerCase();
    console.log(detail);
    console.log("A character was clicked!");
});

// function findCharacter(value) {
//     for(let i = 0; i < people.length; i++) {
//         let target = people[i];
//         if (Object.values(target).includes(value)) {
//             alert('exists');
//           }
//         // if (people[i]) {
//         //     console.log(people[i].name);
//         // }
//     }
// }

//event listner for buttons
// document.querySelector('#button').addEventListener('click', e => {
//     asyncFetch(e.target.textContent.trim().toLowerCase());
// })


