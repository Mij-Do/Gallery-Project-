// section home
let inputSearch = document.getElementById("input-search");
let btnSearch = document.getElementById("btn-search");

let natureHome = document.getElementById("nature-home");
let natureTitle = document.getElementById("nature-title");
let techHome = document.getElementById("tech-home");
let techTitle = document.getElementById("tech-title");
let spaceHome = document.getElementById("space-home");
let spaceTitle = document.getElementById("space-title");

function searchHome () {
    window.sessionStorage.setItem("search-data", inputSearch.value);
    let searchData = window.sessionStorage.getItem("search-data");
    inputSearch.textContent = searchData;

    if (searchData.trim().toLowerCase() === natureTitle.textContent.toLowerCase()) {
        natureHome.style.opacity = '1';
        natureTitle.style.opacity = '1';
        techHome.style.opacity = '0.5';
        techTitle.style.opacity = '0.5';
        spaceHome.style.opacity = '0.5';
        spaceTitle.style.opacity = '0.5';
    } else if (searchData.trim().toLowerCase() === techTitle.textContent.toLowerCase()) {
        techHome.style.opacity = '1';
        techTitle.style.opacity = '1';
        natureHome.style.opacity = '0.5';
        natureTitle.style.opacity = '0.5';
        spaceHome.style.opacity = '0.5';
        spaceTitle.style.opacity = '0.5';
    } else if (searchData.trim().toLowerCase() === spaceTitle.textContent.toLowerCase()) {
        spaceHome.style.opacity = '1';
        spaceTitle.style.opacity = '1';
        natureHome.style.opacity = '0.5';
        natureTitle.style.opacity = '0.5';
        techHome.style.opacity = '0.5';
        techTitle.style.opacity = '0.5';
    } else if (searchData === "") {
        spaceHome.style.opacity = '1';
        spaceTitle.style.opacity = '1';
        natureHome.style.opacity = '1';
        natureTitle.style.opacity = '1';
        techHome.style.opacity = '1';
        techTitle.style.opacity = '1';
    }
}

btnSearch.addEventListener("click", searchHome);


// copyright

let copyRightYear = document.getElementById("year-now");

let date = new Date();

copyRightYear.innerHTML = date.getUTCFullYear();