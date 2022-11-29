const apiUrl = 'https://restcountries.com/v3.1/all';

const fetchCountries = async (api) => {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
console.log(response)
    const data = await response.json();
    console.log(data)
}

window.addEventListener('onload', fetchCountries(apiUrl));