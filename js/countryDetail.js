import numberWithDots from './numberWithDots.js';

const main = document.querySelector('main');
main.innerHTML = ''; 

export default function countryDetail(data) {
    // console.log(data[0])

        const flag = data[0].flags.svg;
        const name = data[0].name.common;
        const nativeName = data[0].name.nativeName;
        const population = data[0].population;
        const region = data[0].region;
        const subregion = data[0].subregion;
        const capital = data[0].capital;
        const topLevelDomain = data[0].tld[0];
        const currencies = data[0].currencies;
        const languages = data[0].languages;

        // console.log(name, 
        //             nativeName, 
        //             population, 
        //             region, 
        //             subregion, 
        //             capital, 
        //             topLevelDomain, 
        //             currencies, 
        //             languages);

        main.innerHTML += `
        <article>
            <div class="flag">
                <img src="${flag}" alt="County's flag">
            </div>

            <div class="details">
                <h2>${name}</h2>

                <div class="country-details">
                    <div>
                        <h3>Native Name: <span>${nativeName}</span></h3>
                        <h3>Population: <span>${numberWithDots(population)}</span></h3>
                        <h3>Region: <span>${region}</span></h3>
                        <h3>Sub Region: <span>${subregion}</span></h3>
                        <h3>Capital: <span>${capital}</span></h3>
                    </div>
                    <div>
                        <h3>Top Level Domain: <span>${topLevelDomain}</span></h3>
                        <h3>Curencies: <span>${currencies}</span></h3>
                        <h3>Languages: <span>${languages}</span></h3>
                    </div>
                </div>

                <div class="borders">
                    <h3 class="inline-block">Border Countries:</h3>
                    <span>France</span><span>Germany</span><span>Netherland</span>
                </div>
            </div>
        </article>
    `;    
}