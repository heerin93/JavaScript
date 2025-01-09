/*prenom;
alert('Ce message ne s\'affichera pas');*/

try{
    prenom
    alert('Bonjour');  
}catch(err){
  console.log(err);
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}
        -----------
        Le Message de l'erreur  :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
}
alert(`Ce message s'affiche correctement`);