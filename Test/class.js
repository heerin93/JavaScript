/*//! Le nom de la classe commence tjrs par majuscule
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    this.contact = paramPhoneUser + paramMailUser;
    this.resume = this.getProfileInfo();
    this.count = 0
    // this._nom = nom;  
    }
    getPhone(){
        if(user==="connected")
        return this.phoneUser;
    }
    getProfileInfo() {
    console.log('this ',this);
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


console.log(exampleUser2.nameUser);
exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();*/

/*class Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
        this._nom = nom;
        this._poids = poids;
        this._taille = taille;
        this._imc = this.calculImc();
    }
    //* Le calcul
    calculImc() {
        return (this._poids / this._taille **2).toFixed(2);
        //const Imc = this.poids * (this.taille**2) ;
    }
    //* Affichage
    display() {
        console.log(`Bonjour, ${this._nom} (${this._poids}kg, ${this._taille} m) a un IMC de ${this._imc}`);
        /*return `informations :
        son nom : ${this._nom}
        sa taille : ${this._taille}
        son poids : ${this._poids}`;
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    new Imc ("Suga", 5, 0.60)
];
list.forEach((uneInstanceImc) => uneInstanceImc.display());*/

class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaireMensuel = salaireMensuel;
        this._cout = this.calculCout();
// TODO 
    }
    // me servira à passer le cout d 1 employé dans la classe PME quand on fera une boucle sur le tableau des Employee (l'équipe)
    getCout() {
        return  this._cout;
    }
    //calcul cout total d 1 salarié
    calculCout() {
        //TODO
        const NB_MOIS_SAL = 12;
        const LA_TAXE = 0.90;
        return this._salaireMensuel*NB_MOIS_SAL * (1 + LA_TAXE);
        //return (((this._salaireMensuel) + ((this._salaireMensuel)*.90))*12)
    }
}

class Pme {
    // 
    constructor(nom, equipe, ventes, coutsFixes, achats) {
     //TODO
        this._nom = nom;
        this._equipe = equipe;
        this._ventes = ventes;
        this._cout = coutsFixes + achats;
        this._achats = achats ;
        this._bilan = 0;
    }

    bilanCalculed() {
      //TODO
      console.log(this._equipe);
      let cumulEquipe = 0;
      console.log(`${this._nom} : Cout Initial : ${this._cout}`);
      //return this._calculCout + this._coutsFixes + this._achats; 
        //Boucle qui parcourt le tableau des salariés, Employee (equipe)
        //Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
        for (let unSalarie of this._equipe) {
            cumulEquipe += unSalarie.getCout();
        }

        console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
        //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
        this._cout += cumulEquipe;
        console.log(`${this._nom} : VENTES : ${this._ventes}`);
        //Dans les _cout on va avoir les frais fixe + frais achat et 
        //on vient de rajouter en + le cout total d'une equipe
        //donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
        this._bilan = this._ventes - this._cout;
        console.log(`${this._nom} : BILAN : ${this._bilan}`);
    }
}


const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();