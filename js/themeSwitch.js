// let darkTheme = true;
// let darkTheme = sessionStorage.getItem('dark-theme') || true;
// let darkTheme = sessionStorage.getItem('dark-theme') || true;
// console.log(darkTheme)
// console.log('sdf')
// console.log(darkTheme);
// if (darkTheme ? document.documentElement.setAttribute('data-theme', 'light') :
//                 document.documentElement.removeAttribute('data-theme', 'light'));

// darkTheme = true;
// sessionStorage.setItem('darkTheme', darkTheme);
// sessionStorage.getItem('darkTheme');
// let currentTheme = 'dark';
// sessionStorage.setItem = ('data-theme', currentTheme);
// import { darkTheme } from "./main.js";
import { themeSwitchBtn, switchElemsForLight, switchElemsForDark } from './DOMElems.js';

// const lightThemeIcon = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>`;
// const darkThemeIcon = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;



// sessionStorage.getItem('data-theme');


// const themeSwitchBtn = document.querySelector('#switch');

// let themeSwitchIcon = themeSwitchBtn.querySelector('span.icon');
// let themeSwitchText = themeSwitchBtn.querySelector('span:last-child');


// const setLightTheme = () => {
//     document.documentElement.setAttribute('data-theme', 'light');
//     themeSwitchIcon.innerHTML = darkThemeIcon;
//     themeSwitchText.textContent = 'Dark Mode';
// }


// const setDarkTheme = () => {
//     document.documentElement.removeAttribute('data-theme', 'light');
//     themeSwitchIcon.innerHTML = lightThemeIcon;
//     themeSwitchText.textContent = 'Light Mode';
// }



// let darkTheme = sessionStorage.getItem('dark-theme') || true;
// sessionStorage.getItem('dark-theme') || true;
// let darkTheme;

// console.log(darkTheme)
// if (darkTheme == 'true') {
//     console.log(darkTheme)
//     setDarkTheme();
// }


// themeSwitchBtn.addEventListener('click', () => {
//     if (darkTheme)  {
//         setLightTheme();
//         darkTheme = !darkTheme;
// console.log(darkTheme)


    // } else {
    //     setDarkTheme();
    //     darkTheme = !darkTheme;
// console.log(darkTheme)

    // }
    // darkTheme = !darkTheme;
//     sessionStorage.setItem('dark-theme', darkTheme);
    
// });




// themeSwitchBtn.addEventListener('click', () => {

    
//     if (themeSwitchText.textContent == 'Light Mode' ? 
//         themeSwitchText.textContent = 'Dark Mode' : 
//         themeSwitchText.textContent = 'Light Mode');

//     if (themeSwitchIcon.innerHTML == darkThemeIcon ? 
//         themeSwitchIcon.innerHTML = lightThemeIcon : 
//         themeSwitchIcon.innerHTML = darkThemeIcon);

//     if (darkTheme ? document.documentElement.setAttribute('data-theme', 'light') :
//                     document.documentElement.removeAttribute('data-theme', 'light'));

//     darkTheme = !darkTheme;
//     sessionStorage.setItem('dark-theme', darkTheme);
//     console.log(darkTheme);

// });




let lightMode = sessionStorage.getItem('lightMode');

const enableLightMode = () => {
    switchElemsForLight();
    // document.documentElement.setAttribute('data-theme', 'light');
    // themeSwitchIcon.innerHTML = darkThemeIcon;
    // themeSwitchText.textContent = 'Dark Mode';

    // updating the local storage
    sessionStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    switchElemsForDark();
    // document.documentElement.removeAttribute('data-theme', 'light');
    // themeSwitchIcon.innerHTML = lightThemeIcon;
    // themeSwitchText.textContent = 'Light Mode';

    // updating the local storage
    sessionStorage.setItem('lightMode', null);
}

if (lightMode === 'enabled') {
    enableLightMode();
}

themeSwitchBtn.addEventListener('click', () => {
    lightMode = sessionStorage.getItem('lightMode');

    if (lightMode !== 'enabled') {
        enableLightMode();
    }
    else {
        disableLightMode();
    }
});
