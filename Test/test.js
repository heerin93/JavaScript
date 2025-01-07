const paragraphs = document.querySelectorAll("p");

const array = Array.from(paragraphs);

const map = array.map(paragraphs => paragraphs.innerText="lol je suis Ackerman");

console.log(map);