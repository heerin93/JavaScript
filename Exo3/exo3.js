/*const titre1 = document.getElementById("titre_1");
console.log(titre1.offsetTop); // 21
const titre2 = document.getElementById("titre_2");
console.log(titre2.offsetTop); // 663 
const titre3 = document.getElementById("titre_3");
console.log(titre3.offsetTop); // 1287


/*const lesTitres = document.querySelectorAll("h1");

function goTitre(unTitre) {
    const distance = unTitre.offsetTop;
    window.scrollTo({
        top: distance,
        behavior: 'smooth'
    });
    if (unTitre >= lesTitres.length) {
        return alert ("Pas de titre");
    } else {
        goTitre (lesTitres[unTitre]);
    }
}
//goTitre(prompt("Choisir un titre"));*/

/*const lesTitres = document.querySelectorAll("h2");

function goTitre(unTitre) {
    const distance = unTitre.offsetTop;
    window.scrollTo({
        top: distance,
        behavior: 'smooth'
    });
}
//goTitre(lesTitres[2]);

let index = prompt("Entrez l'index du titre (0 à " + (lesTitres.length - 1) + "):");
if (index >= 0 && index < lesTitres.length) {
    goTitre(lesTitres[index]);
} else {
    console.log("Index invalide.");
}*/

/*const link = document.querySelector("h1");

link.addEventListener("click", function() {
    console.log("Bonjour")
})*/

/*const link = document.querySelector("h1");

function monClic() {
    console.log("Bonjour");
    link.removeEventListener("click", monClic)
}
link.addEventListener("click", monClic);

addEventListener("keypress", function(event){
    console.log(event.key);
})

let signe = prompt("Quel est le meilleur signe astro ?");

if (signe.toLowerCase() == "bélier") {
    console.log("Evidemment !");
} else if (signe.toLocaleLowerCase() == "lion") {
    console.log("Acceptable");
} else {
    console.log("Nope. Essaie encore");
}



// Ajouter un paragraphe qui affiche la réponse de l'utilisateur
const reponse_utilisateur = document.createElement("p");
reponse_utilisateur.innerText = `Tu as tapé : ${signe}`;
document.body.appendChild(reponse_utilisateur);

// Comparer la réponse de l'utilisateur et afficher un message en conséquence
const reponse_prompt = document.createElement("p");
if (signe.toLowerCase() == "bélier") {
    reponse_prompt.innerText = "Evidemment ! ";
} else if (signe.toLowerCase() == "lion") {
    reponse_prompt.innerText = "Acceptable"
} else {
    reponse_prompt.innerText = "Nope. Essaie encore";
}
document.body.appendChild(reponse_prompt);

// Ajouter un écouteur pour afficher les touches pressées dans la console
addEventListener("keypress", (event) => {
    console.log(event.key);
}); 

// corrigé du prof
/*const utilisateurInput = prompt("Veuillez entrer quelque chose :");
const titre = document.getElementById("titre");

function mettreAJourTitre() {
    const nouvelleEntrée = prompt("Veuillez entrer une nouvelle valeur :");
    if (nouvelleEntrée) {
        titre.innerText = nouvelleEntrée;
    }
}
document.addEventListener("keypress", mettreAJourTitre);*/

/*addEventListener("click", function(unEvent){
    const monImg = document.createElement("img");
    monImg.setAttribute("src", "https://loremflickr.com/58/58");
    // console.log(unEvent.x, unEvent.y);
    console.log(unEvent);

let y = unEvent.y-(monImg.height/2);
let x = unEvent.x-(monImg.width/2);

    monImg.style.position = "absolute";
    monImg.style.left = `${x}px`;
    monImg.style.top = `${y}px`;

    document.body.appendChild(monImg);
});*/


