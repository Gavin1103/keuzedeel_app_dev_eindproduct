console.log("fuctions.js");

// afstand berekenen

let jouwLocatie = document.getElementById("jouw_locatie");
let gekozenLocatie = document.getElementById("gekozen_locatie");
const factor = 0.621371;
let resultaat = document.getElementById("resultaat");



let container = document.getElementById("container");
let resultaat_container = document.getElementById("resultaat-container");
let nav_container = document.getElementById("nav-container");


function showSettings() {
    container.style = "display:none";
    container_settings.style = "display: flex";

}

function hideSettings() {
    container.style = "display:flex";
    container_settings.style = "display: none";
}

function berekenAfstandQRY() {
    if (jouwLocatie.value && gekozenLocatie.value != "") {
        alert("gay");
    } else {
        alert(" beide vakken in")
    }
    nav_container.style = "display:none";
    resultaat_container.style = "display:block";


}

function terug() {
    nav_container.style = "display:block";
    resultaat_container.style = "display:none";
}


function berekenAfstand() {



    if (jouwLocatie.value && gekozenLocatie.value != "") {
        alert("hello");
    } else {
        alert("Vul beide vakken in")
    }
}

function convertKmToMiles() {


    let kilometer = 100;
    let factor = 0.621371
    let miles = kilometer * factor;

    let roundMiles = Math.round(miles);
    resultaat.innerHTML = `${roundMiles} miles`
}

function convertKmToMeter() {

    let kilometer = 100;
    let factor = 1000
    let meter = kilometer * factor;

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
                locationStatus.textContent = data.locality
                jouwLocatie.style = "display:none"
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



// const turnOffLocation = () => {


// }



window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 900px)").matches) {
        console.log("Screen width is at least 900px");
        resultaat_container.style = "display:block";
        nav_container.style = "display:block";
    } else {
        console.log("Screen less than 900px");
        resultaat_container.style = "display:none";
    }
})