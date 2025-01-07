/*const paragraphs = document.querySelectorAll("p");

const array = Array.from(paragraphs);

const map = array.map(paragraphs => paragraphs.innerText="lol je suis Ackerman");

console.log(map);*/

/*let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    


    function functionBugEnfant() {
        console.log(lesNews);
        let lesNews = `il est 99h67`;
    }
};
functionBugParent();
console.log(something);*/

//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };


  let image = document.createElement("img");
  image.src = "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg";
  document.querySelector("div").appendChild(image);
  image.style.width = "300px";
  image.style.height = "400px";

  let nom = document.createElement("h1");
  nom.innerText = "John Delavega";
  nom.style.color = "white";
  nom.style.fontSize = "22px";
  document.querySelector("div").appendChild(nom);

  let mail = document.createElement("p");
  mail.innerText = "john.doe@example.com";
  mail.style.color = "white";
  mail.style.fontSize = "18px";
  document.querySelector("div").appendChild(mail);

  let age = document.createElement("p");
  age.innerText = "25";
  age.style.color = "white";
  age.style.fontSize = "18px";
  document.querySelector("div").appendChild(age);

  let dob = document.createElement("p");
  dob.innerText = "08/02/1989";
  dob.style.color = "white";
  dob.style.fontSize = "18px";
  document.querySelector("div").appendChild(dob);

  let background = document.querySelector("div");
  background.style.backgroundColor = "background-color: #4158D0";
  background.style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
  background.style.width = "400px";
  background.style.height = "600px";
  background.style.padding = "20px";
  background.style.alignItems = center;
  document.querySelector("div").appendChild(background);
