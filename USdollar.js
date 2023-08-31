let XMLHttpRequest = require('xhr2');


let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    
    let usDollarCountries = countries.filter(country => {
        return country.currencies && country.currencies.USD;
    });

    
    let usDollarCountryNames = usDollarCountries.map(country => country.name.common);

    console.log('Countries that use US Dollars:');
    usDollarCountryNames.forEach(name => {
        console.log(name);
    });
};


xhr.send();