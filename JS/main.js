// section home
let inputSearch = document.getElementById("input-search");
let btnSearch = document.getElementById("btn-search");

let home = document.getElementById("home");
let backHome = document.getElementById("back-home");
let natureHome = document.getElementById("nature-home");
let natureTitle = document.getElementById("nature-title");
let techHome = document.getElementById("tech-home");
let techTitle = document.getElementById("tech-title");

function searchHome () {
    window.sessionStorage.setItem("search-data", inputSearch.value);
    let searchData = window.sessionStorage.getItem("search-data");
    inputSearch.textContent = searchData;

    if (searchData.trim().toLowerCase() === natureTitle.textContent.toLowerCase()) {
        natureHome.style.opacity = '1';
        natureTitle.style.opacity = '1';
        techHome.style.opacity = '0.5';
        techTitle.style.opacity = '0.5';
    } else if (searchData.trim().toLowerCase() === techTitle.textContent.toLowerCase()) {
        techHome.style.opacity = '1';
        techTitle.style.opacity = '1';
        natureHome.style.opacity = '0.5';
        natureTitle.style.opacity = '0.5';
    }
}
// this func to do event after blur the input search
(function () {
    inputSearch.addEventListener("blur", function () {
        if (inputSearch.value === "") {
            natureHome.style.opacity = '1';
            natureTitle.style.opacity = '1';
            techHome.style.opacity = '1';
            techTitle.style.opacity = '1';
        }
    })
})();


btnSearch.addEventListener("click", searchHome);

// ############################################################
// Section nature
let natureSection = document.getElementById("nature");
let natureBtn = document.getElementById("nature-btn");
natureSection.style.display = 'none';

// Section tech
let techSection = document.getElementById("tech");
let techBtn = document.getElementById("tech-btn");
techSection.style.display = 'none';



if (natureBtn) {
    natureBtn.addEventListener("click", function () {
        home.style.display = 'none';
        techSection.style.display = 'none';
        natureSection.style.display = 'block';
        fetch('JSON/nature.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Failed to load JSON file');
                }
                return response.json();
            })
            .then(photos => {
                const gallery = document.getElementById('gallery-nature');

                photos.forEach(photo => {
                const card = document.createElement('div');
                card.className = 'photo-card';

                const img = document.createElement('img');
                img.src = photo.download_url;
                img.alt = photo.id;

                const details = document.createElement('div');
                details.className = 'details';

                const title = document.createElement('h5');
                title.textContent = photo.author;

                const link = document.createElement('a');
                link.href = photo.download_url;
                link.target = '_blank';
                link.textContent = 'View Photo';


                details.appendChild(title);
                details.appendChild(link);

                card.appendChild(img);
                card.appendChild(details);

                gallery.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
    
};

if (techBtn) {
    techBtn.addEventListener("click", function () {
        home.style.display = 'none';
        natureSection.style.display = 'none';
        techSection.style.display = 'block';

        fetch('JSON/tech.json')
            .then(response => {
                if (!response.ok) {
                throw new Error('Failed to load JSON file');
                }
                return response.json();
            })
            .then(photos => {
                const gallery = document.getElementById('gallery-tech');

                photos.forEach(photo => {
                const card = document.createElement('div');
                card.className = 'photo-card';

                const img = document.createElement('img');
                img.src = photo.download_url;
                img.alt = photo.id;

                const details = document.createElement('div');
                details.className = 'details';

                const title = document.createElement('h5');
                title.textContent = photo.author;

                const link = document.createElement('a');
                link.href = photo.download_url;
                link.target = '_blank';
                link.textContent = 'View Photo';


                details.appendChild(title);
                details.appendChild(link);

                card.appendChild(img);
                card.appendChild(details);

                gallery.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}


// back to home page
(function () {
    backHome.addEventListener("click",function () {
        home.style.display = 'block';
        natureSection.style.display = 'none';
        techSection.style.display = 'none';
    });
})();


// copyright

let copyRightYear = document.getElementById("year-now");

let date = new Date();

copyRightYear.innerHTML = date.getUTCFullYear();