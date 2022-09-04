const init = () => {


    let searchBtn = document.querySelector("#search-btn");
    let country = document.querySelector("#country");

    searchBtn.addEventListener("click",()=>{
        let countryName = country.value;
        let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        console.log(url);
        fetch(url).then((response)=>response.json()).then((data)=>{
            //console.log(data[0]);
            //console.log(Object.values(data[0].borders).toString().split(",").join(", "));
            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2>  
            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>  

            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div> 


            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Borders:</h4>
                    <span>${Object.values(data[0].borders).toString().split(",").join(", ")}</span>
                </div>
            </div>

            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div> 

            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Language:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                </div>
            </div> 

            <div class = "wrapper">
                <div class ="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div> 
            `;

        }).catch(() => {
            if (countryName.length == 0){
                result.innerHTML =`<h3>The input field can not be empty</h3>`
            }
            else{
                result.innerHTML =  `<h3>Please Enter a Valid country name.</h3>`
            }
        })
    });
}

document.addEventListener("DOMContentLoaded", init);


