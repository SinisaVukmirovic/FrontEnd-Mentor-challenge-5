import countryInfo from './countryInfo.js';
import './selectedRegion.js';

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

    // const linksForCountries = document.querySelectorAll('main a');
    
    // console.log(...linksForCountries)
    // linksForCountries.forEach(link => {
    //     link.addEventListener('click', () => {
    //         console.log(link)
    //     });
    // });
}



// const linksForCountries = document.querySelectorAll('main a');

window.addEventListener('DOMContentLoaded', fetchCountries(apiUrl));