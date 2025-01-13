export {api2} ;

const api2 =  async () => {
    const rawData = await fetch('https://api.chucknorris.io/jokes/random');
    const transformedData = await rawData.json();
    console.log(transformedData);

    const div1 = document.querySelector("h1");
    div1.innerText = transformedData.value; 
}

