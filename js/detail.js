import countryDetail from './countryDetail.js';

let lightMode = sessionStorage.getItem('lightMode');

const enableLightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');
 
    sessionStorage.setItem('lightMode', 'enabled');
}

if (lightMode === 'enabled') {
    enableLightMode();
}

const country = sessionStorage.getItem('ClickedCountry');

const apiUrl = `https://restcountries.com/v3.1/name/${country}`;

const fetchCountries = async (api) => {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    
    const data = await response.json();
    
    countryDetail(data);
}

window.addEventListener('DOMContentLoaded', fetchCountries(apiUrl));