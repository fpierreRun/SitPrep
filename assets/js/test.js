class AutocompleteDirectionsHandler {
  constructor(map, originInput, destinationInput, travelModeInput, directionsPanel) {
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
    });
  }

  setupTravelModeListener() {
    this.travelModeInput.addEventListener("change", () => {
      this.route();
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
      provideRouteAlternatives: true, // Enable alternative routes
    };

    this.directionsService.route(request, (response, status) => {
      if (status === "OK") {
        this.directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    });
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

        const map1 = new google.maps.Map(document.getElementById("map1"), {
          disableDefaultUI: false,
          zoom: 12,
          center: currentLocation,
        });
        const map2 = new google.maps.Map(document.getElementById("map2"), {
          disableDefaultUI: false,
          zoom: 12,
          center: currentLocation,
        });
        const map3 = new google.maps.Map(document.getElementById("map3"), {
          disableDefaultUI: false,
          zoom: 12,
          center: currentLocation,
        });

        const panel1 = document.getElementById("panel1");
        const panel2 = document.getElementById("panel2");
        const panel3 = document.getElementById("panel3");
        const handler1 = new AutocompleteDirectionsHandler(
          map1,
          document.getElementById("origin-input-0"),
          document.getElementById("destination-input-0"),
          document.getElementById("changemode-driving-1"),
          panel1
        );
        const handler2 = new AutocompleteDirectionsHandler(
          map2,
          document.getElementById("origin-input-1"),
          document.getElementById("destination-input-1"),
          document.getElementById("changemode-driving-2"),
          panel2
        );
        const handler3 = new AutocompleteDirectionsHandler(
          map3,
          document.getElementById("origin-input-2"),
          document.getElementById("destination-input-2"),
          document.getElementById("changemode-driving-3"),
          panel3
        );

        handler1.setup();
        handler2.setup();
        handler3.setup();

        handler1.route();
        handler2.route();
        handler3.route();
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
