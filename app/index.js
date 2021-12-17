console.log('hallo')

// mijn locatie bepalen
var x = document.getElementById("resultaat");
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;

    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude)
  }