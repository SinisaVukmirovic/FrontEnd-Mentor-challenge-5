export default function getArticles() {

    const articles = document.querySelectorAll('article');
    
    articles.forEach(article => {
        article.addEventListener('click', () => {
            const clickedCountry = article.querySelector('.info h2').textContent;
            // console.log('county: ', clickedCountry);
            sessionStorage.setItem('ClickedCountry', clickedCountry);

            window.open('./pages/detail.html', '_self');
            // window.open('../pages/detail.html', '_self');
            // didn't work on github when '../pages' ???
            // worked with just ('/pages') then it stoped the next day? WTF?!
        });
    })
}