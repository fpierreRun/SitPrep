class AutocompleteDirectionsHandler {
    constructor(map, service, renderer, originAutocomplete, destinationAutocomplete) {
      this.map = map;
      this.service = service;
      this.renderer = renderer;
      this.originAutocomplete = originAutocomplete;
      this.destinationAutocomplete = destinationAutocomplete;
    }
  
    route(originPlaceId, destinationPlaceId, travelMode) {
      if (!originPlaceId || !destinationPlaceId) {
        return;
      }
  
      const request = {
        origin: { placeId: originPlaceId },
        destination: { placeId: destinationPlaceId },
        travelMode: travelMode,
      };
  
      this.service.route(request, (response, status) => {
        if (status === "OK") {
          this.renderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      });
    }
  
    setupListener() {
      const modeInputs = document.querySelectorAll('input[name="travelMode"]');
      const self = this;
  
      modeInputs.forEach(function (modeInput) {
        modeInput.addEventListener("change", function () {
          const selectedMode = this.value;
          self.route(
            self.originAutocomplete.getPlace().place_id,
            self.destinationAutocomplete.getPlace().place_id,
            selectedMode
          );
        });
      });
    }
  
    setupAutocomplete() {
      const originInput = document.getElementById("origin-input");
      const destinationInput = document.getElementById("destination-input");
      const self = this;
  
      this.originAutocomplete = new google.maps.places.Autocomplete(originInput);
      this.destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
  
      this.originAutocomplete.addListener("place_changed", function () {
        const selectedPlace = self.originAutocomplete.getPlace();
        if (!selectedPlace.geometry) {
          window.alert("No details available for input: '" + selectedPlace.name + "'");
          return;
        }
      });
  
      this.destinationAutocomplete.addListener("place_changed", function () {
        const selectedPlace = self.destinationAutocomplete.getPlace();
        if (!selectedPlace.geometry) {
          window.alert("No details available for input: '" + selectedPlace.name + "'");
          return;
        }
      });
    }
  }
  
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 37.0902, lng: -95.7129 }, // USA.
    });
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map,
      panel: document.getElementById("sidebar"), // Set the panel element to display text directions
    });
  
    directionsRenderer.addListener("directions_changed", () => {
      const directions = directionsRenderer.getDirections();
  
      if (directions) {
        // computeTotalDistance(directions);
        updateInputFields(directions);
      }
    });
  
    const originInput = document.getElementById("origin-input");
    const destinationInput = document.getElementById("destination-input");
    const modeSelector = document.getElementById("mode-selector");
  
    const originAutocomplete = new google.maps.places.Autocomplete(originInput);
    originAutocomplete.bindTo("bounds", map);
  
    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput
    );
    destinationAutocomplete.bindTo("bounds", map);
  
    const autocompleteDirectionsHandler = new AutocompleteDirectionsHandler(
      map,
      directionsService,
      directionsRenderer,
      originAutocomplete,
      destinationAutocomplete
    );
    autocompleteDirectionsHandler.setupListener();
    autocompleteDirectionsHandler.setupAutocomplete();
  
    // function computeTotalDistance(directions) {
    //   let total = 0;
    //   const route = directions.routes[0];
    //   for (let i = 0; i < route.legs.length; i++) {
    //     total += route.legs[i].distance.value;
    //   }
    //   document.getElementById("total").textContent = `Total Distance: ${total / 1000} km`;
    // }
  
    function updateInputFields(directions) {
      const route = directions.routes[0];
      const originAddress = route.legs[0].start_address;
      const destinationAddress = route.legs[route.legs.length - 1].end_address;
  
      originInput.value = originAddress;
      destinationInput.value = destinationAddress;
    }
  
    const addSectionBtn = document.getElementById("add-section-btn");
    addSectionBtn.addEventListener("click", addSection);
  
    let sectionCount = 0;
    const maxSections = 2;
  
    function addSection() {
      if (sectionCount >= maxSections) {
        return;
      }
  
      const sectionContainer = document.getElementById("section-container");
      const newSection = document.createElement("div");
      newSection.innerHTML = `
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="input-group mb-3">
              <input
                id="origin-input-${sectionCount}"
                class="form-control"
                type="text"
                placeholder="Enter an origin location"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="input-group mb-3">
              <input
                id="destination-input-${sectionCount}"
                class="form-control"
                type="text"
                placeholder="Enter a destination location"
              />
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <div id="mode-selector-${sectionCount}" class="btn-group">
              <input type="radio" name="travelMode-${sectionCount}" id="changemode-driving-${sectionCount}" class="btn-check" value="DRIVING" />
              <label class="btn btn-outline-primary" for="changemode-driving-${sectionCount}">Driving</label>
              
              <input type="radio" name="travelMode-${sectionCount}" id="changemode-walking-${sectionCount}" class="btn-check" value="WALKING" />
              <label class="btn btn-outline-primary" for="changemode-walking-${sectionCount}">Walking</label>
  
              <input type="radio" name="travelMode-${sectionCount}" id="changemode-transit-${sectionCount}" class="btn-check" value="TRANSIT"/>
              <label class="btn btn-outline-primary" for="changemode-transit-${sectionCount}">Transit</label>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <div id="map-${sectionCount}"></div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <div id="sidebar-${sectionCount}">
              <div id="instructions-${sectionCount}"></div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-12">
            <div id="total-${sectionCount}"></div>
          </div>
        </div>
      `;
  
      sectionContainer.appendChild(newSection);
  
      const sectionMap = new google.maps.Map(document.getElementById(`map-${sectionCount}`), {
        zoom: 4,
        center: { lat: 37.0902, lng: -95.7129 }, // USA.
      });
      const sectionDirectionsService = new google.maps.DirectionsService();
      const sectionDirectionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map: sectionMap,
        panel: document.getElementById(`instructions-${sectionCount}`),
      });
  
      const sectionOriginInput = document.getElementById(`origin-input-${sectionCount}`);
      const sectionDestinationInput = document.getElementById(`destination-input-${sectionCount}`);
      const sectionModeSelector = document.getElementById(`mode-selector-${sectionCount}`);
  
      const sectionOriginAutocomplete = new google.maps.places.Autocomplete(sectionOriginInput);
      sectionOriginAutocomplete.bindTo("bounds", sectionMap);
  
      const sectionDestinationAutocomplete = new google.maps.places.Autocomplete(sectionDestinationInput);
      sectionDestinationAutocomplete.bindTo("bounds", sectionMap);
  
      const sectionAutocompleteDirectionsHandler = new AutocompleteDirectionsHandler(
        sectionMap,
        sectionDirectionsService,
        sectionDirectionsRenderer,
        sectionOriginAutocomplete,
        sectionDestinationAutocomplete
      );
      sectionAutocompleteDirectionsHandler.setupListener();
      sectionAutocompleteDirectionsHandler.setupAutocomplete();
  
      sectionCount++;
    }
  }
  
  // Google Maps API script
  