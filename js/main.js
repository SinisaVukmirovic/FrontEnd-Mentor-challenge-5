import displayCountries from './displayCountries.js';
import './selectedRegion.js';
import './searchCountry.js';
import './themeSwitch.js';

const apiUrl = 'https://restcountries.com/v3.1/all';

const fetchCountries = async (api) => {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    
    const data = await response.json();
    
    displayCountries(data);

    // const linksForCountries = document.querySelectorAll('main a');
    
    // console.log(...linksForCountries)
    // linksForCountries.forEach(link => {
    //     link.addEventListener('click', () => {
    //         console.log(link)
    //     });
    // });
}



// const linksForCountries = document.querySelectorAll('main a');
// export let darkTheme = true;

window.addEventListener('DOMContentLoaded', fetchCountries(apiUrl));




// const lightThemeIcon = `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" color="#000"><path d="M3.74 14.44c0-1.53.3-3 .89-4.39s1.4-2.59 2.4-3.6 2.2-1.81 3.6-2.4 2.85-.89 4.37-.89c1.53 0 3 .3 4.39.89s2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.6.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.39.89c-1.52 0-2.98-.3-4.37-.89s-2.59-1.4-3.6-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37zm1.2 0c0 1.36.27 2.66.8 3.9s1.25 2.32 2.15 3.22 1.97 1.61 3.22 2.15 2.55.8 3.9.8c1.37 0 2.67-.27 3.91-.8s2.31-1.25 3.22-2.15 1.62-1.97 2.15-3.22.8-2.55.8-3.9c0-1.82-.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68-3.23-1.35-5.05-1.35c-1.36 0-2.66.27-3.9.8S8.79 6.41 7.89 7.32 6.28 9.3 5.74 10.54s-.8 2.54-.8 3.9z"></path></svg>`;
// const darkThemeIcon = `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="currentColor" color="#eee"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;

// export const themeSwitchElem = document.querySelector('#switch');

// let themeSwitchIcon = themeSwitchElem.querySelector('span.icon');
// let themeSwitchText = themeSwitchElem.querySelector('span:last-child');
// console.log(themeSwitchIcon, themeSwitchText)

// themeSwitchElem.addEventListener('click', () => {
//     console.log(themeSwitchIcon, lightThemeIcon)

//     if (themeSwitchText.textContent == 'Light Mode' ? 
//         themeSwitchText.textContent = 'Dark Mode' : 
//         themeSwitchText.textContent = 'Light Mode');

//     if (themeSwitchIcon.innerHTML == darkThemeIcon ? 
//         themeSwitchIcon.innerHTML = lightThemeIcon : 
//         themeSwitchIcon.innerHTML = darkThemeIcon);
//     // themeSwitchText.textContent = 'Dark Mode';
//     console.log(themeSwitchIcon)
// });