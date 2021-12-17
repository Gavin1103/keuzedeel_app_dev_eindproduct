console.log("fuctions.js");

// afstand berekenen

let jouwLocatie = document.getElementById("jouw_locatie");
let gekozenLocatie = document.getElementById("gekozen_locatie");
const factor = 0.621371;
let resultaat = document.getElementById("resultaat");


function berekenAfstand() {

    if (jouwLocatie.value && gekozenLocatie.value != "") {
        alert("hello");
    }else{
        alert("Vul beide vakken in")
    }
}

function convertKmToMiles(){

  
    let kilometer = 100;
    let factor = 0.621371
    let miles = kilometer * factor;

    let roundMiles = Math.round(miles);
    resultaat.innerHTML = `${roundMiles} miles`
}

function convertKmToMeter(){

    let kilometer = 100;
    let factor = 1000
    let meter = kilometer * factor;

    let roundMeter = Math.round(meter);
    resultaat.innerHTML = `${roundMeter} meter`

}

function convertToKilometer(){

    // resultaat.innerHTML = "waarde die je krijgt"
}