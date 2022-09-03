let searchBtn = document.querySelector("#search-btn");
let country = document.querySelector("#country");

searchBtn.addEventListener("click",()=>{
    let countryName = "Kenya";
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data[0]); //we Acces object name data
        console.log(data[0].capital[0]); //helps to acces the Capital City
        console.log(data[0].flags.svg); //The flag is captured here
        console.log(data[0].name.common); // The country name is captured here
        console.log(data[0].continents[0]); //acccess the specific Continent the country belongs to
        console.log(Object.keys(data[0].currencies)[0]); //currency money for each country
    })
})