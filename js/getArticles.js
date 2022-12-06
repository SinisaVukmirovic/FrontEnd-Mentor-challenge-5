export default function getArticles() {

    const articles = document.querySelectorAll('article');
    
    articles.forEach(article => {
        article.addEventListener('click', () => {
            const clickedCountry = article.querySelector('.info h2').textContent;
            // console.log('county: ', clickedCountry);
            sessionStorage.setItem('ClickedCountry', clickedCountry);

            window.open('pages/detail.html', '_self');
        });
    })
}