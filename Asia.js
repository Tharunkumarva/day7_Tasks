let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    
    let asiaCountries = countries.filter( country.region === 'Asia');

    
    let asiaCountryNames = asiaCountries.map( country.name.common);

    console.log(asiaCountryNames);
};


xhr.send();














































