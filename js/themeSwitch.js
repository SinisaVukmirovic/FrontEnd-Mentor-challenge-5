import { themeSwitchBtn, switchElemsForLight, switchElemsForDark } from './DOMElems.js';

let lightMode = sessionStorage.getItem('lightMode');

const enableLightMode = () => {
    switchElemsForLight();

    sessionStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
    switchElemsForDark();
    
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
