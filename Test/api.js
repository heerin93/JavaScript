/*const apiDiv = document.querySelector('.apiContacter');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
};
contactApi();*/

/*const contactApiSecure =  async () => {
    const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
    console.log(rawData);
    
    // Vérification du statut de la réponse
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }

    const transformedData = await rawData.json();
    console.log(transformedData);
    apiDiv2.innerHTML = transformedData.name.fr;
}

contactApiSecure();*/

/*const apiDiv = document.querySelector('.apiContacter');
const pokemon =  async () => {
    const rawData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(rawData);
    console.log(rawData.ok);
    console.log(rawData.status);
    const transformedData = await rawData.json();
    console.log(transformedData);
    apiDiv.innerHTML = transformedData.results[0].name;
    for (let i=0 ; i<transformedData.results.length ; i++) {
        console.log(transformedData.results[i].name);
        const div = document.createElement("div");
        div.innerText = transformedData.results[i].name;
        apiDiv.append(div); 
    }
}
pokemon();*/



const apiDiv = document.querySelector('.apiContacter');
apiDiv.style.display='flex';
apiDiv.style.flexWrap='wrap';
apiDiv.style.background='rgb(222, 248, 220)';
const pokemon =  async () => {
    const rawData = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
    console.log(rawData);
    console.log(rawData.ok);
    console.log(rawData.status);
    const transformedData = await rawData.json();
    console.log(transformedData);
    //apiDiv.innerHTML = transformedData[0].name.fr;
    for (let i=0 ; i<transformedData.length ; i++) {

        const div1 = document.createElement("h2");
        div1.innerText = transformedData[i].name.fr;
        apiDiv.append(div1); 

        const div2 = document.createElement("img");
        div2.src = transformedData[i].sprites.regular;
        div2.style.height = "300px";
        apiDiv.append(div2); 

        const div3 = document.createElement("h4");
        div3.innerText = transformedData[i].types[0].name;
        apiDiv.append(div3); 

        const div4 = document.createElement("h4");
        div4.innerText = transformedData[i].height;
        apiDiv.append(div4); 

        const div5 = document.createElement("h4");
        div5.innerText = transformedData[i].weight;
        apiDiv.append(div5); 

        apiDiv.style.gap = '16px';
        apiDiv.style.padding = '16px';
        apiDiv.style.backgroundColor = '#f9f9f9';
    }
    }
pokemon();

