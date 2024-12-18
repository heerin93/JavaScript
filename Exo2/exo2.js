/*const titre = document.body.getElementsByTagName("h1");

console.log(titre);

const paragraphe = document.getElementsByClassName('test');
console.log(paragraphe);

const paragraphe2 = document.getElementById("test_2");
console.log(paragraphe2);



const paragraphe_3 = document.createTextNode("Nouveau Texte");
document.body.appendChild(paragraphe_3);
console.log(paragraphe_3);

document.body.appendChild(titre[0]);

document.body.replaceChild(paragraphe2, paragraphe[0]);*/


/*const titre = document.getElementById("titre");
const txt = document.body.getElementsByTagName("p");

function ajoutTexte(pseudo, duTexte) {
    const newTxt = document.createElement("p");

    newTxt.innerText = `<strong>${pseudo}</strong> : ${duTexte}` ;
    document.body.appendChild(newTxt);
}

ajoutTexte("JOsé", "AZERTYUIOP");
ajoutTexte("sarah", "wxcvbn");
ajoutTexte("Michel", "Super");
ajoutTexte("Lala", "POIUYTREZA");
ajoutTexte("Tom", "mlkjhgfdsq");*/

/*const titre = document.getElementById("titre");
const txt = document.body.getElementsByTagName("p");

const lien = document.body.getElementsByTagName("a")[0];

lien.setAttribute("href", "http://google.fr");
console.log(lien.getAttribute("href"));
console.log(titre.getAttribute("id"));

const petit = document.getElementById("petit");
petit.setAttribute("petit" , "Ho");
console.log(petit.getAttribute("petit"));*/

/*const txt = document.body.getElementsByTagName("p");

const texteTab = Array.from(txt);
texteTab.map(txt => txt.innerText = "LoL");

console.log(texteTab);*/

/*const titre = document.getElementById("titre");

console.log(titre.offsetHeight);
console.log(titre.offsetWidth);
console.log(titre.clientHeight);
console.log(titre.clientWidth);

const bordure = {
    "hauteur" : titre.offsetHeight,
    "largeur" : titre.offsetWidth,
    "hauteur ss" : titre.clientHeight,
    "largeur ss" : titre.clientWidth,
};

console.log(bordure);

titre.style.color ="blue";*/

const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");

liens[0].addEventListener("click", function() {
    titre.classList.add("maCouleur");
});

liens[1].addEventListener("click", function() {
    titre.classList.remove("maCouleur");
});

liens[2].addEventListener("click", function() {
    titre.classList.toggle("maCouleur");
});
