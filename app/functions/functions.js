console.log("fuctions.js");



let jouwLocatie = document.getElementById("jouw_locatie");
let gekozenLocatie = document.getElementById("gekozen_locatie");
const factor = 0.621371;

let container = document.getElementById("container");
let resultaat_container = document.getElementById("resultaat-container");
let nav_container = document.getElementById("nav-container");

window.addEventListener('load', () => {

    registerSW();

})

async function registerSW(){

    if("serviceWorker" in navigator){
        try{
            await navigator.serviceWorker.register("./sw.js");
        }
        catch(e){
            console.log("SW registration failed");
        }
    }
}






function showSettings() {
    container.style = "display:none";
    container_settings.style = "display: flex";

}

function hideSettings() {
    container.style = "display:flex";
    container_settings.style = "display: none";
}





function berekenAfstandQRY() {

    nav_container.style = "display:none";
    resultaat_container.style = "display:block";
}

function terug() {
    nav_container.style = "display:block";
    resultaat_container.style = "display:none";
}





function convertKmToMiles() {

    let resultaat = document.getElementById("in_kilo");
    // let kilometer = 100;
    let factor = 0.621371
    let miles = resultaat * factor;

    let roundMiles = Math.round(miles);
    resultaat.innerHTML = `${roundMiles} miles`
}

function convertKmToMeter() {
    let resultaat = document.getElementById("in_kilo");
    // let kilometer = 100;
    let factor = 1000
    let meter = resultaat * factor;

    let roundMeter = Math.round(meter);
    resultaat.innerHTML = `${roundMeter} meter`

}

function convertToKilometer() {

    // resultaat.innerHTML = "waarde die je krijgt"
}








const turnOnLocation = () => {

    var locationStatus = document.getElementById("locatie_text");
    // var gekozen_locatie = document.getElementById("jouw_locatie");
    const succes = (position) => {
        console.log(position)
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                locationStatus.textContent = "locatie staat aan"
                jouwLocatie.value = data.locality
                // + ", " + data.countryName
                // jouwLocatie.style = "display:none"
            })
    }
    const error = () => {
        locationStatus.textContent = "locatie uit";
        gekozen_locatie.style = "display:flex"
    }
    navigator.geolocation.getCurrentPosition(succes, error);
}
var locationOn = document.getElementById("locatie_aan_knop");
locationOn.addEventListener('click', turnOnLocation);



const turnOffLocation = (position) => {

    var locationStatus = document.getElementById("locatie_text");
    console.log(position)
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXX&longitude=XXXXXX&localityLanguage=en`
    fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
            locationStatus.textContent = "Locatie staat uit"
            jouwLocatie.value = ""
            // jouwLocatie.style = "display:block"
        })
}
var locationOn = document.getElementById("locatie_uit_knop");
locationOn.addEventListener('click', turnOffLocation);





// window.addEventListener("resize", function () {
//     if (window.matchMedia("(min-width: 900px)").matches) {
//         console.log("Screen width is at least 900px");
//         resultaat_container.style = "display:block";
//         nav_container.style = "display:block";
//     } else {
//         console.log("Screen less than 900px");
//         resultaat_container.style = "display:none";
//     }
// })