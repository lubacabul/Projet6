const gallery = document.querySelector(".gallery");
const filters = document.querySelectorAll(".filter");
let works = [];
let categories = [];

function WorksImport() {
    fetch("http://localhost:5678/api/works")
        .then((res) => res.json())
        .then((data) => {
            works = data;
            generateWorks(works);
            displayModal(works);
        });
}
WorksImport();

function categoriesImport() {
    fetch("http://localhost:5678/api/categories")
        .then((res) => res.json())
        .then((data) => {
            categories = data;
        });
}
categoriesImport();

function generateWorks(worksArray) {
    gallery.innerHTML = "";

    worksArray.forEach((work) => {
        const figure = document.createElement("figure");
        gallery.appendChild(figure);
        figure.classList = work.category.name;
        figure.setAttribute("data-id", work.id);

        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.title;
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = work.title;
        figure.appendChild(figcaption);
    });
}

function worksFilter() {
    filters.forEach((filter) => {
        const filterValue = filter.textContent;

        filter.addEventListener("click", () => {
            let filteredWorks = [];
            if (filterValue === "Tous") {
                filteredWorks = works;
            } else {
                filteredWorks = works.filter(
                    (work) => work.category.name === filterValue
                );
            }
            generateWorks(filteredWorks);
        });
    });
}
worksFilter();

