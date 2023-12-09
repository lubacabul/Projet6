
// Récupération des projets de l'architecte//
let response = fetch("http://localhost:5678/api/works");

response.then (res=>res.json())
    .then(d=>{console.log(d)
    })
