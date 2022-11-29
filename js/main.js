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
    console.log(data[29])
}




const countryInfo = (data) => {
    data.forEach(country => {
        const name = country.name.common;
        const population = country.population;
        const region = country.region;
        // const capital = country.capital[0];
        const flag = country.flags.svg;

        // console.log(name, population, region, flag);
        // console.log(country.population)
    });
}

window.addEventListener('onload', fetchCountries(apiUrl));