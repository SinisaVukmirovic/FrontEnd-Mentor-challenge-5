import displayCountries from './displayCountries.js';

const searchElem = document.querySelector('.search input');

searchElem.addEventListener('input', () => {
    const searchedCountry = searchElem.value;
    // console.log(searchElem.value)
    // const searchApi = `https://restcountries.com/v3.1/name/italy`;
    const searchApi = `https://restcountries.com/v3.1/name/${searchedCountry}`;
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
        
        // console.log(data)
        // countryDetail(data);
        // countryInfo(data);
    
        // const linksForCountries = document.querySelectorAll('main a');
        
        // console.log(...linksForCountries)
        // linksForCountries.forEach(link => {
        //     link.addEventListener('click', () => {
        //         console.log(link)
        //     });
        // });
    }
    fetchRegion(searchApi);
});



