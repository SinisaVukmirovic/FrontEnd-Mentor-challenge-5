import displayCountries from './displayCountries.js';

const selectElem = document.querySelector('#regions');

selectElem.addEventListener('change', () => {
    const selectedRegion = selectElem.value;
    const regionApiUrl = `https://restcountries.com/v3.1/region/${selectedRegion}`;
    // console.log(selectedRegion);
    const fetchRegion = async (api) => {
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        
        const data = await response.json();
        // console.log(data);
        displayCountries(data);
    }
    
    fetchRegion(regionApiUrl);
});



