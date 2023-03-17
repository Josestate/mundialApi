let nav = document.querySelector(".tableContent");
let countri;
let data;
document.querySelector(".first").insertAdjacentHTML("beforeend", `
<div class="header">
    <h1 class="h1css" >Welcome to my world</h1>
    <input type="text" placeholder="Region" data-region="region" data-all="all" class="regionInp inpCl" onkeyup="region()">
    <input type="text" placeholder="Countrie" data-value="country" class="countryInp inpCl" onkeyup="countryInp()">
    <input type="text" placeholder="Capital" data-value="capital" class="capitalInp inpCl" onkeyup="capitalInp()">
</div>
<table class="tableContent">
    <thead class="headerCont">
            <th>Countrie</th>
            <th>Language</th>
            <th>Capital</th>
            <th>Sub Region</th>
    </thead>
    <tbody class="tdInfo">
    </tbody>
</table>
`);


document.querySelectorAll(".inpCl").forEach(element => {
    element.dataset.value;
});
function region(){
    let url;
    let dataRegion = document.querySelector('.regionInp').dataset.region;
    let dataAll = document.querySelector('.regionInp').dataset.all;
    document.querySelector('.regionInp').value != '' ? url=dataRegion+ '/' +document.querySelector('.regionInp').value : url=dataAll;
    fetch(`https://restcountries.com/v3.1/${url}`)
    .then(resp => resp.json())
    .then(resp => {
        data=resp;
        console.log(resp);
        document.querySelectorAll(".countries").forEach(element => {
            element.remove();
        });
        resp.forEach(element => {
            countri = element.name.common;
            document.querySelector(".tdInfo").insertAdjacentHTML("beforeend", `
            <tr class="countries" data-value='${countri}' onclick="changeView(this)">
                <td class="longA">${countri}</td>
                ${(() => {
                    if(element.languages != undefined){
                        return `<td class="longA">${Object.entries(element.languages)[0][1]}</td>`;
                    }
                    else{
                        return '';
                    }
                })()}
                ${(() => {
                    if(element.capital != undefined){
                        return `<td class="longA">${element.capital[0]}</td>`;
                    }
                    else{
                        return '';
                    }
                })()}
                <td class="longA">${element.subregion}</td>
            </tr>
            `);
            
        });
    });
}
function countryInp(){
    document.querySelectorAll(".countries").forEach(element => {
        element.remove();
    });
    data.filter(ele=>{
        if(ele.name.common.toLowerCase().includes(document.querySelector(".countryInp").value)){
            console.log(ele.name.common);
            document.querySelector(".tdInfo").insertAdjacentHTML("beforeend", `
            <tr class="countries" data-value='${ele.name.common}' onclick="changeView(this)">
                <td class="longA">${ele.name.common}</td>
                ${(() => {
                    if(ele.languages != undefined){
                        return `<td class="longA">${Object.entries(ele.languages)[0][1]}</td>`;
                    }
                    else{
                        return '';
                    }
                })()}
                ${(() => {
                    if(ele.capital != undefined){
                        return `<td class="longA">${ele.capital[0]}</td>`;
                    }
                    else{
                        return '';
                    }
                })()}
                <td class="longA">${ele.subregion}</td>
            </tr>
            `);
        }
    });
}
function capitalInp(){
    document.querySelectorAll(".countries").forEach(element => {
        element.remove();
    });
    data.filter(ele=>{
        if(ele.capital != undefined && ele.capital[0].toLowerCase().includes(document.querySelector(".capitalInp").value)){
            document.querySelector(".tdInfo").insertAdjacentHTML("beforeend", `
            <tr class="countries" data-value='${ele.name.common}' onclick="changeView(this)">
                <td class="longA">${ele.name.common}</td>
                ${(() => {
                    if(ele.languages != undefined){
                        return `<td class="longA">${Object.entries(ele.languages)[0][1]}</td>`;
                    }
                    else{
                        return '';
                    }
                })()}
                ${(() => {
                    if(ele.capital != undefined){
                        return `<td class="longA">${ele.capital[0]}</td>`;
                    }
                    else{
                        return '';
                    }
                })()}
                <td class="longA">${ele.subregion}</td>
            </tr>
            `);
        }
    });
}
function changeView(ele){
    let changeEle = ele.dataset.value;
    document.querySelector(".first").classList.add("hide");
    document.querySelector(".second").classList.remove("hide");
    redirection(changeEle);
}
region();