import numberWithDots from './numberWithDots.js';
// import clickedCountry from './detail.js';

const main = document.querySelector('main');

export default function countryInfo(data) {
    data.forEach(country => {
        if (country.name.common == 'Kosovo') return;

        const name = country.name.common;
        const population = country.population;
        const region = country.region;
        const capital = country.capital;
        const flag = country.flags.svg;
        
        main.innerHTML += `
            <a href="./pages/detail.html">
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
            </a>
        `;
    });


    // }

    // const countryElements = document.querySelectorAll('main article');
    // // console.log(...countryElements)
    // countryElements.forEach(elem => {
    //     elem.addEventListener('click', () => {
    //         const name = elem.querySelector('.info h2');
    //         console.log(name.textContent)
    //         return name;
    //     });
    // });
    
}

    // clickedCountry();
    //  clickedCountry() 
    // const linksForCountries = document.querySelectorAll('main a');
    
    // console.log(linksForCountries)


