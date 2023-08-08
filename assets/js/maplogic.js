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
    this.setupPlaceChangedListener(this.originInput, "ORIG", this.mapNumber);
    this.setupPlaceChangedListener(this.destinationInput, "DEST", this.mapNumber);
    this.setupTravelModeListener();
  }

  setupPlaceChangedListener(input, mode, suffix) {
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
        
        // If this is a destination input, fill in the name and phone number fields
        if (place.name) {
          document.getElementById('shelter' + suffix).value = place.name;
        }
        if (place.formatted_phone_number) {
          document.getElementById('contact_number' + suffix).value = place.formatted_phone_number;
        }
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
  const centerOfUnitedStates = {
    lat: 39.8283,
    lng: -98.5795,
  };

  const map1 = new google.maps.Map(document.getElementById("map1"), {
    disableDefaultUI: true,
    zoom: 4,
    center: centerOfUnitedStates,
    zoomControl: true,
    fullscreenControl: true,
  });
  const map2 = new google.maps.Map(document.getElementById("map2"), {
    disableDefaultUI: true,
    zoom: 4,
    center: centerOfUnitedStates,
    zoomControl: true,
    fullscreenControl: true,
  });
  const map3 = new google.maps.Map(document.getElementById("map3"), {
    disableDefaultUI: true,
    zoom: 4,
    center: centerOfUnitedStates,
    zoomControl: true,
    fullscreenControl: true,
  });

  const panel1 = document.getElementById("panel1");
  const panel2 = document.getElementById("panel2");
  const panel3 = document.getElementById("panel3");

  const handler1 = new AutocompleteDirectionsHandler(
    map1,
    document.getElementById("originInput1"),
    document.getElementById("address3"),
    document.getElementById("travelMode1"),
    panel1,
    3  // For suffix '3'
  );
  const handler2 = new AutocompleteDirectionsHandler(
    map2,
    document.getElementById("originInput2"),
    document.getElementById("address4"),
    document.getElementById("travelMode2"),
    panel2,
    4  // For suffix '4'
  );
  const handler3 = new AutocompleteDirectionsHandler(
    map3,
    document.getElementById("originInput3"),
    document.getElementById("address5"),
    document.getElementById("travelMode3"),
    panel3,
    5  // For suffix '5'
  );

  handler1.setup();
  handler2.setup();
  handler3.setup();

  handler1.route();
  handler2.route();
  handler3.route();

  handler1.storeData();
  handler2.storeData();
  handler3.storeData();
}

document.addEventListener("DOMContentLoaded", initMap);

document.addEventListener("DOMContentLoaded", initMap);

document.addEventListener("DOMContentLoaded", function () {
  const map2Section = document.getElementById("map2Section");
  const map3Section = document.getElementById("map3Section");
  const addMap2Button = document.getElementById("addMap2Button");
  const addMap3Button = document.getElementById("addMap3Button");
  const removeMap2Button = document.getElementById("removeMap2Button");
  const removeMap3Button = document.getElementById("removeMap3Button");

  addMap2Button.addEventListener("click", function () {
    map2Section.removeAttribute("hidden");
    addMap2Button.setAttribute("hidden", "true");
    removeMap2Button.removeAttribute("hidden");
    addMap3Button.removeAttribute("hidden");
  });

  addMap3Button.addEventListener("click", function () {
    map3Section.removeAttribute("hidden");
    addMap3Button.setAttribute("hidden", "true");
    removeMap3Button.removeAttribute("hidden");
  });

  removeMap2Button.addEventListener("click", function () {
    map2Section.setAttribute("hidden", "true");
    addMap3Button.setAttribute("hidden", "true");
    addMap2Button.removeAttribute("hidden");
    removeMap2Button.setAttribute("hidden", "true");
    localStorage.removeItem("mapData2");
  });

  removeMap3Button.addEventListener("click", function () {
    map3Section.setAttribute("hidden", "true");
    addMap3Button.removeAttribute("hidden");
    removeMap3Button.setAttribute("hidden", "true");
    localStorage.removeItem("mapData3");
  });
});

window.addEventListener("unload", function () {
  localStorage.setItem("mapData1", JSON.stringify({
    origin: document.getElementById("originInput1").value,
    destination: document.getElementById("address3").value,
    travelMode: document.getElementById("travelMode1").value,
  }));

  if (!document.getElementById("map2Section").hasAttribute("hidden")) {
    localStorage.setItem("mapData2", JSON.stringify({
      origin: document.getElementById("originInput2").value,
      destination: document.getElementById("destinationInput2").value,
      travelMode: document.getElementById("travelMode2").value,
    }));
  }

  if (!document.getElementById("map3Section").hasAttribute("hidden")) {
    localStorage.setItem("mapData3", JSON.stringify({
      origin: document.getElementById("originInput3").value,
      destination: document.getElementById("destinationInput3").value,
      travelMode: document.getElementById("travelMode3").value,
    }));
  }
});

function initAutocomplete() {
  const autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete3'), {});
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  const place = autocomplete.getPlace();

  // Assuming you have an input field with id 'name3' for the place name,
  // and 'address3' for the place address.
  document.getElementById('name3').value = place.name;
  document.getElementById('address3').value = place.formatted_address;

  // More fields can be autofilled here using information from the place object.
  // See https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult for more details.
}

document.addEventListener("DOMContentLoaded", function() {
initAutocomplete();
});
