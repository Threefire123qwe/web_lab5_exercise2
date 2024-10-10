// Get the paragraph element where we will display the geolocation information
let x = document.getElementById("geolocation");

function getGeolocation() {
    // Check if the Geolocation API is supported by the browser
    if (navigator.geolocation) {
        // Use the Geolocation API to get the current position
        navigator.geolocation.getCurrentPosition(showGeolocation);
    } else {
        // If Geolocation API is not supported, display a message
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    // Update the paragraph element with the latitude and longitude
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}