let countryData;
function redirection(x){
    fetch(`https://restcountries.com/v3.1/name/${x}`)
    .then(async resp => resp.json())
    .then(resp => {
        console.log(resp);
        countryData=resp;
        document.querySelector(".countrieSpan").textContent = resp[0].name.common;
        document.querySelector(".regionSpan").textContent = resp[0].region;
        document.querySelector(".capital").textContent = resp[0].capital[0];
        document.querySelector(".carSide").textContent = resp[0].car.side;
        document.querySelector(".currencies").textContent = Object.entries(countryData[0].currencies)[0][1].name;
        document.querySelector(".language").textContent = Object.entries(countryData[0].languages)[0][1];
        document.querySelector(".population").textContent = resp[0].population;
        document.querySelector(".subRegion").textContent = resp[0].subregion;
        document.querySelector(".zonaHoraria").textContent = resp[0].timezones[0];
        document.querySelector(".coatOfArms").src = countryData[0].coatOfArms.png;
        document.querySelector(".flag").src = countryData[0].flags.png;
    });
}
function backBtn(e){
    document.querySelector(".first").classList.remove("hide");
    document.querySelector(".second").classList.add("hide");
}
document.querySelector(".second").insertAdjacentHTML("beforeend", `<div class="countryContainer">
<div class="tittlesContainer"> 
    <h2 class="countrieName"><span class="countrieSpan"></span></h2>
    <button class="backBtn" onclick="backBtn()">Back</button>
</div>
<div class="countrieInfo">
    <h2 class="regionName h2Css">Region: <span class="regionSpan spanCss"></span></h2>
    <h2 class="h2Css">Capital: <span class="capital spanCss"></span></h1>
    <h2 class="h2Css">Car side: <span class="carSide spanCss"></span></h1>
    <h2 class="h2Css">Currencies: <span class="currencies spanCss"></span></h1>
    <h2 class="h2Css">Languages: <span class="language spanCss"></span></h2>
    <h2 class="h2Css">Population: <span class="population spanCss"></span></h2>
    <h2 class="h2Css">Sub Region: <span class="subRegion spanCss"></span></h2>
    <h2 class="h2Css">Zona horaria: <span class="zonaHoraria spanCss"></span></h2>
</div>
<div class="imgsFather">
    <div class="imgs">
        <h2><img src="" class="flag imgs"></img></h1> 
        <h2><img src="" class="coatOfArms imgs"></img></h1>
        <div class="mapResponsive"> 
            <h2 class="h2Css">Map: <iframe src="https://www.openstreetmap.org/relation/1311341" class="map"></iframe></h2>
        </div> 
    </div>
</div>
</div>`)