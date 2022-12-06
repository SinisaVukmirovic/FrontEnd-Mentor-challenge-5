import numberWithDots from './numberWithDots.js';
import getArticles from './getArticles.js';

export default function displayCountries(data) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    data.forEach(country => {
        if (country.name.common == 'Kosovo') return;

        const name = country.name.common;
        const population = country.population;
        const region = country.region;
        const capital = country.capital;
        const flag = country.flags.svg;
        
        main.innerHTML += `
            <article>
                <div class="flag">
                    <img src="${flag}" alt="County's flag">
                </div>
                <div class="info">
                    <h2>${name}</h2>
                    <h3>Population: <span>${numberWithDots(population)}</span></h3>
                    <h3>Region: <span>${region}</span></h3>
                    <h3>Capital: <span>${capital}</span></h3>
                </div>
            </article>
        `;
    });

    getArticles();    
}