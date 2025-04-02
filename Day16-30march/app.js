const templete = document.getElementById('article-templete');
const categoryFilter = document.getElementById('Category-filter');
const newsArticles = document.getElementById('news-articles');
const search = document.getElementById('search')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const newArt = templete.content.cloneNode(true);
console.log(newArt);

const categories = ["general", "business", "entertainment", "health", "science", "sports", "technology"];




categories.forEach((cat) => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.append(option);
})

function pushData(data) {
    newsArticles.innerHTML = "";
    console.log("Data Received : ", data);
    data.forEach((articleData) => {
        const article = templete.content.cloneNode(true);
        article.querySelector(".title").innerText = articleData.title;
        article.querySelector(".author").innerText = articleData.author;
        article.querySelector(".source").innerText = articleData.source.name;
        article.querySelector(".image").src = articleData.urlToImage;
        article.querySelector(".image").alt = articleData.title;
        article.querySelector(".date").innerText = new Date(
            articleData.publishedAt
        ).toLocaleString();
        article.querySelector(".description").innerText = articleData.description;
        article.querySelector(".description").onmouseover = `()=>(${article.querySelector(".description").setAttribute("title",articleData.description)})`
        article.querySelector(".title").onmouseover = `()=>(${article.querySelector(".title").setAttribute("title",articleData.title)})`
        newsArticles.append(article);
    });

}

function getNewsFromSearch(data) {
    pushData(data);
}

const category = 'general'
const countryCode = 'in';
const BASE_URL = "https://saurav.tech/NewsAPI/"
// const top_headlines_api = `${BASE_URL}/top-headlines/category/${category}/${countryCode}.json`;


const everything_api = `${BASE_URL}/everything/cnn.json`
async function getNews(category) {
    try {

        const top_headlines_api = `${BASE_URL}/top-headlines/category/${category}/${countryCode}.json`;
        const response = await fetch(top_headlines_api);
        const data = (await response.json()).articles
        const response2 = await fetch(everything_api);
        const data2 = (await response2.json()).articles.slice(0,50);
        console.log(data2)

        if(category=='general'){
            pushData(data2);

        }else{
            pushData(data);
        }
        categoryFilter.addEventListener("change", (e) => {
            const selectfilter = e.target.value;
            // console.log(selectfilter);
            getNews(selectfilter);
        })
        searchBtn.addEventListener('click', (e) => {

            const inputVal = searchInput.value;
            if(category=='general'){
                const newData = data2.filter((val) => {
                    return val.title.toUpperCase().includes(inputVal.toUpperCase())  || val.description.toUpperCase().includes(inputVal.toUpperCase())|| val.publishedAt.toUpperCase().includes(inputVal.toUpperCase())||val.source.name.toUpperCase().includes(inputVal.toUpperCase())
                })
                getNewsFromSearch(newData);
            }else{
                const newData = data.filter((val) => {
                    return val.title.toUpperCase().includes(inputVal.toUpperCase())  || val.description.toUpperCase().includes(inputVal.toUpperCase())|| val.publishedAt.toUpperCase().includes(inputVal.toUpperCase())||val.source.name.toUpperCase().includes(inputVal.toUpperCase())
                })
                getNewsFromSearch(newData);
            }



        })

    }
    catch (err) {
        console.log(err);
    } finally {
        console.log("Fetch completed.");
    }
}
getNews(categories[0]);