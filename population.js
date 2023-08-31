
let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    
    let smallPopulationCountries = countries.filter(country => {
        return country.population < 200000;
    });

    
    let smallPopulationCountryNames = smallPopulationCountries.map(country => country.name.common);

    console.log(smallPopulationCountryNames);
};


xhr.send();






