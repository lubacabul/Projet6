const portfolio = document.querySelector("portfolio")
const galleryElement = document.querySelector('.gallery');


// Récupération des projets de l'architecte//
let dataApi = fetch("http://localhost:5678/api/works");

dataApi.then (async(responseData)=> {
const response = await responseData.json();
console.log(response[1]);

// Test récupération de l'élèment 1 de la gallerie
try{
    const id = response[1].id;
    const title = response[1].title;
    const imageURL = response[1].imageURL;

    console.log(id);
    console.log(title);
    console.log(imageURL)  
}

catch(err){
        console.log(err);
    }
});

    // Récupère les données de l'API
    fetch('http://localhost:5678/api/works')
        .then(response => response.json())
        .then(data => {
            
            // Pour chaque projet dans les données, crée une figure avec une image et un titre
            data.forEach(project => {
                const figureElement = document.createElement('figure');
                figureElement.classList.add('project');

                const imgElement = document.createElement('img');

                // Crée les 2 élements dans figure (l'image et le titre)
                imgElement.src = project.imageUrl;
                imgElement.alt = project.title;

                const figcaptionElement = document.createElement('figcaption');
                figcaptionElement.textContent = project.title;

                // Ajoute l'image et le titre à la figure
                figureElement.appendChild(imgElement);
                figureElement.appendChild(figcaptionElement);

                // Ajoute la figure à la galerie
                galleryElement.appendChild(figureElement);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données de l\'API :', error));

