const usersHuman = [{
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25
},
{
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5
},
{
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500
}
];

const usersPet = [{
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe"
},
{
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable"
}
];

const usersXeno = [{
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45
},
{
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35
},
{
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25
}
];

const tabData = [ ];
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);


function afficherHummain(tab){
    for (let i=0; i<tab.length ; i++){
        console.log (`---------------------`);
        console.log (`nom : ${tab[i].name}`);
        console.log (`email : ${tab[i].email}`);
        console.log (`age : ${tab[i].age}  ans`);
        console.log (`---------------------`);
    }
}

afficherHummain(usersHuman);


function afficherAnimal(tab){
    for (let i=0; i<tab.length ; i++){
        console.log (`---------------------`);
        console.log (`nom : ${tab[i].name}`);
        console.log (`espece : ${tab[i].espece}`);
        console.log (`age : ${tab[i].age}  ans`);
        console.log (`propiétaire : ${tab[i].propriétaire}`);
        console.log (`---------------------`);
    }
}

afficherAnimal(usersPet);


function afficherXeno(tab){
    for (let i=0; i<tab.length ; i++){
        console.log (`---------------------`);
        console.log (`nom : ${tab[i].name}`);
        console.log (`espece : ${tab[i].espece}`);
        console.log (`age : ${tab[i].age}  ans`);
        console.log (`niveau de menace : ${tab[i].menace}`);
        console.log (`---------------------`);
    }
}

afficherXeno(usersXeno);


function profil(tab1) {
    for (let i=0 ; i<tab1.length ; i++) {

        //console.log(tab1[i]);

        if (tab1[i].type == "humain") {
            return afficherHummain(tab1) ;
        }
        else if (tab1[i].type == "animal de compagnie") {
             return afficherAnimal(tab1) ;
        }
        else if (tab1[i].type == "Xeno") {
            return afficherXeno(tab1) ;
         }
        else {
            return "Type de Profil non Existant";
        }
    }
}

profil(usersHuman);
profil(usersPet);
profil(usersXeno);



function profilAll(grandTableau) {
    for (let j=0; j<grandTableau.length ; j++) {
        return profil(grandTableau[j]);
    }
}
profilAll(tabData);