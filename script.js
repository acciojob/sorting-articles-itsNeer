//your JS code here. If required.
const ul = document.querySelector('ul');


const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


function sortArticles(articles) {
    return articles.sort((a, b) => {
        const removeArticles = (str) => str.replace(/^(a|an|the)\s/i, "");

        const aWithoutArticles = removeArticles(a);
        const bWithoutArticles = removeArticles(b);

        return aWithoutArticles.localeCompare(bWithoutArticles);
    });
}

sortArticles(bands);

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});