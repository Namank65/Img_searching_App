// alldata = https://api.unsplash.com/search/photos?page=1&query=office&client_id=TXCIS2W2EX2U1uLLGoQrgfOL53sPxvlWDohLir-jW0g

const accessKey = "TXCIS2W2EX2U1uLLGoQrgfOL53sPxvlWDohLir-jW0g";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImg() {
    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const responce = await fetch(url);
    const data = await responce.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showBtn.style.display ="block";

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImg();
})

showBtn.addEventListener("click",()=>{
    page++;
    searchImg();
})