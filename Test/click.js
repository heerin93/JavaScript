let titre = document.querySelector("#mainTitle");
titre.addEventListener("click", uneFonction);
function uneFonction() {
    titre.innerText = "--🧐--";
}
/*titre.removeEventListener("click",uneFonction);*/

let box = document.querySelector("input");
box.addEventListener("focus", uneDeuxiemeFonction);
function uneDeuxiemeFonction() {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
}
box.addEventListener("blur", uneTroisiemeFonction);
function uneTroisiemeFonction() {
    box.style.backgroundColor = "white";
    box.style.color = "black";
}

/*document.addEventListener('keyup', function(eventClavier){
    console.log('Yes Moi ECRIRE');
    console.log(eventClavier);
    console.log(eventClavier.key);
});*/

const input = document.querySelector("input");
const place = document.getElementById("place");
input.value = localStorage.getItem("monSuperTexte");
input.addEventListener("input", updateValue);

function updateValue(e) {
    localStorage.setItem("monSuperTexte", place.textContent = e.target.value);
}

maVariable = localStorage.getItem("monSuperTexte");
place.innerHTML = maVariable;
input.textContent = maVariable;