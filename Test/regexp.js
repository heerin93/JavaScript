let regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
let mail = document.querySelector("#mail");

mail.addEventListener("keyup", function(){
    valide()
})

function valide(){
    let resultat = regexMail.test(mail.value);
    if (resultat ==true) {
        mail.style.backgroundColor = "green"; 
    } else {
        mail.style.backgroundColor = "red" ;
    }
}
