import countryInfo from './countryInfo.js';

const apiUrl = 'https://restcountries.com/v3.1/all';

const fetchCountries = async (api) => {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    
    const data = await response.json();
    
    countryInfo(data);
}

window.addEventListener('DOMContentLoaded', fetchCountries(apiUrl));