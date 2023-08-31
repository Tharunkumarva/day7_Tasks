let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    
    let totalPopulation = countries.reduce((total, country) => {
        if (country.population) {
            return total + country.population;
        }
        return total;
    }, 0);

    console.log(`Total Population of All Countries: ${totalPopulation}`);
};


xhr.send();
