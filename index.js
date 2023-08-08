const searchBtn = document.getElementById("search-btn");
const inputEl = document.getElementById("inp-country");
const result = document.getElementById("result");
const form = document.querySelector("form");



form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let countryName = inputEl.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
            
                <h4>Capital: <span>${data[0].capital[0]}</span></h4><br>
                <h4>Continent: <span>${data[0].continents[0]}</span></h4><br>
                <h4>Population: <span>${data[0].population}</span></h4><br>
               
            </div>
            <div class="data-wrapper">

                <h4>Currency: <span class="cur">${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)}</span></h4><br>
                <h4>Common Language: <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span></h4><br>

            </div>   
        </div>`

    }).catch(() =>{
        if(countryName == 0){
            result.innerHTML = `<h3>The input field cannot be empty</h3>`
        } else {
            result.innerHTML =  `<h3>Please enter a valid country name</h3>`
        }

    })
})