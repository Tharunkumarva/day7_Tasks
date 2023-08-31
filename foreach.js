let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();


xhr.open('GET', 'https://restcountries.com/v3.1/all');


xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    countries.forEach(country => {
        let name = country.name.common;
        let capital = country.capital[0] || "N/A"; 
        let flag = country.flags.png;

        console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
};

// Send the HTTP request
xhr.send();
