class AutocompleteDirectionsHandler {
  constructor(map, originInput, destinationInput, travelModeInput, directionsPanel, mapNumber) {
    this.map = map;
    this.originInput = originInput;
    this.destinationInput = destinationInput;
    this.travelModeInput = travelModeInput;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map: map,
      panel: directionsPanel,
    });

    this.originPlaceId = null;
    this.destinationPlaceId = null;
    this.mapNumber = mapNumber;

    this.setupDirectionsChangedListener();
  }

  setup() {
    this.setupPlaceChangedListener(this.originInput, "ORIG");
    this.setupPlaceChangedListener(this.destinationInput, "DEST");
    this.setupTravelModeListener();
  }

  setupPlaceChangedListener(input, mode) {
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", this.map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.place_id) {
        window.alert("Please select an option from the dropdown list.");
        return;
      }

      if (mode === "ORIG") {
        this.originPlaceId = place.place_id;
      } else {
        this.destinationPlaceId = place.place_id;
      }

      this.route();
      this.storeData();
    });
  }

  setupTravelModeListener() {
    this.travelModeInput.addEventListener("change", () => {
      this.route();
      this.storeData();
    });
  }

  setupDirectionsChangedListener() {
    const me = this;

    this.directionsRenderer.addListener("directions_changed", () => {
      const directions = me.directionsRenderer.getDirections();
      const route = directions.routes[0];
      const legs = route.legs;

      const originAddress = legs[0].start_address;
      const destinationAddress = legs[legs.length - 1].end_address;

      me.originInput.value = originAddress;
      me.destinationInput.value = destinationAddress;
    });
  }

  route() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }

    const travelMode = this.travelModeInput.value;
    const request = {
      origin: { placeId: this.originPlaceId },
      destination: { placeId: this.destinationPlaceId },
      travelMode: travelMode,
      provideRouteAlternatives: true,
    };

    this.directionsService.route(request, (response, status) => {
      if (status === "OK") {
        this.directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    });
  }

  storeData() {
    const data = {
      origin: this.originInput.value,
      destination: this.destinationInput.value,
      travelMode: this.travelModeInput.value,
    };

    localStorage.setItem(`mapData${this.mapNumber}`, JSON.stringify(data));
  }
}

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const map4 = new google.maps.Map(document.getElementById("map4"), {
          disableDefaultUI: false,
          zoom: 12,
          center: currentLocation,
        });
        const map5 = new google.maps.Map(document.getElementById("map5"), {
          disableDefaultUI: false,
          zoom: 12,
          center: currentLocation,
        });

        const panel4 = document.getElementById("panel4");
        const panel5 = document.getElementById("panel5");
        const handler4 = new AutocompleteDirectionsHandler(
          map4,
          document.getElementById("origin-input-4"),
          document.getElementById("destination-input-4"),
          document.getElementById("changemode-driving-4"),
          panel4,
          4
        );
        const handler5 = new AutocompleteDirectionsHandler(
          map5,
          document.getElementById("origin-input-5"),
          document.getElementById("destination-input-5"),
          document.getElementById("changemode-driving-5"),
          panel5,
          5
        );

        handler4.setup();
        handler5.setup();

        handler4.route();
        handler5.route();

        handler4.storeData();
        handler5.storeData();
      },
      function (error) {
        console.error("Error getting current location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

document.addEventListener("DOMContentLoaded", initMap);

document.addEventListener("DOMContentLoaded", function () {
  const map5Section = document.getElementById("map5Section");
  const addMap5Button = document.getElementById("addMap5Button");
  const removeMap5Button = document.getElementById("removeMap5Button");

  addMap5Button.addEventListener("click", function () {
    map5Section.removeAttribute("hidden");
    addMap5Button.setAttribute("hidden", "true");
    removeMap5Button.removeAttribute("hidden");
  });

  removeMap5Button.addEventListener("click", function () {
    map5Section.setAttribute("hidden", "true");
    addMap5Button.removeAttribute("hidden");
    removeMap5Button.setAttribute("hidden", "true");
    localStorage.removeItem("mapData5");
  });
});

window.addEventListener("unload", function () {
  localStorage.setItem("mapData4", JSON.stringify({
    origin: document.getElementById("origin-input-4").value,
    destination: document.getElementById("destination-input-4").value,
    travelMode: document.getElementById("changemode-driving-4").value,
  }));

  localStorage.setItem("mapData5", JSON.stringify({
    origin: document.getElementById("origin-input-5").value,
    destination: document.getElementById("destination-input-5").value,
    travelMode: document.getElementById("changemode-driving-5").value,
  }));
});
