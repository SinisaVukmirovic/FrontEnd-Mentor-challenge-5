// const countriesELems = document.querySelectorAll('main a');
// console.log(countriesELems);
// console.log('sdf')

// function onDetailsPage() {
//     console.log('sdf')
// }
// import './themeSwitch.js';
// import { switchElemsForLight } from './DOMElems.js';
import countryDetail from './countryDetail.js';

// import { darkTheme } from './main.js';

// let darkTheme = sessionStorage.getItem('dark-theme');

// if (darkTheme ? document.documentElement.setAttribute('data-theme', 'light') :
// document.documentElement.removeAttribute('data-theme', 'light'));

// if (sessionStorage.getItem('dark-theme') == 'true') {
    // console.log(true)
    // document.documentElement.setAttribute('data-theme', 'light');
    // themeSwitchIcon.innerHTML = lightThemeIcon;
    // themeSwitchText.textContent = 'Light Mode';
// } else {
    // console.log(false)

    // document.documentElement.removeAttribute('data-theme', 'light');
    // themeSwitchIcon.innerHTML = darkThemeIcon;
    // themeSwitchText.textContent = 'Dark Mode';
// }






let lightMode = sessionStorage.getItem('lightMode');


const enableLightMode = () => {
    // switchElemsForLight();
    document.documentElement.setAttribute('data-theme', 'light');
 
    sessionStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    // switchElementsForDark();
    document.documentElement.removeAttribute('data-theme', 'light');

    sessionStorage.setItem('lightMode', null);
}

if (lightMode === 'enabled') {
    enableLightMode();
}

// themeSwitchBtn.addEventListener('click', () => {
//     lightMode = sessionStorage.getItem('lightMode');

//     if (lightMode !== 'enabled') {
//         enableLightMode();
//     }
//     else {
//         disableLightMode();
//     }
// });









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
    // countryInfo(data);

    // const linksForCountries = document.querySelectorAll('main a');
    
    // console.log(...linksForCountries)
    // linksForCountries.forEach(link => {
    //     link.addEventListener('click', () => {
    //         console.log(link)
    //     });
    // });
}

window.addEventListener('DOMContentLoaded', fetchCountries(apiUrl));