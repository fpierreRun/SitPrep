alert("Hi")
let map, directionsService, directionsRenderer;

function initMap() {
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 41.85, lng: -87.65 },
    disableDefaultUI: true,
  });

  directionsRenderer.setMap(map);
  document.getElementById("mode").addEventListener("change", calculateAndDisplayRoute);
  directionsRenderer.setPanel(document.getElementById("sidebar"));

  const control = document.getElementById("floating-panel");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  document.getElementById("start").addEventListener("change", calculateAndDisplayRoute);
  document.getElementById("end").addEventListener("change", calculateAndDisplayRoute);
}

function calculateAndDisplayRoute() {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const selectedMode = document.getElementById("mode").value;

  directionsService.route(
    {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode[selectedMode],
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
