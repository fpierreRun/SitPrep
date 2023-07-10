
var addTo72 = [];
var plan = [];
// var newPlan = [];
var formEl = document.querySelector("#locationForm");
var formIdCounter = 0;

function evacPage(){
  document.getElementById("step1").style.display = "none";
  document.getElementById("secondLocation").style.display = "none";
  document.getElementById("evacForm").style.display = "block";
  
  document.getElementById("contactForm").style.display = "none";
  
  document.getElementById("previous1").style.display = "block";
  document.getElementById("next1").style.display = "block";
  document.getElementById("previous2").style.display = "none";
  document.getElementById("next2").style.display = "none"; 
  document.getElementById("next").style.display = "none";
};


//begin
function locPage(){

  document.getElementById("step1").style.display = "block";
  document.getElementById("evacForm").style.display = "none";
  document.getElementById("next").style.display = "block";
  document.getElementById("previous1").style.display = "none";
  document.getElementById("next1").style.display = "none";

};

if(addSecond.checked==true) {
  document.getElementById("secondLocation").style.display = "block"
;}

else{
  document.getElementById("secondLocation").style.display = "none";
;}

//End

//begin
function contactPage(){
  document.getElementById("contactForm").style.display = "block";
  document.getElementById("step1").style.display = "none";
  document.getElementById("evacForm").style.display = "none";
  document.getElementById("previous1").style.display = "none";
  document.getElementById("next1").style.display = "none";
  document.getElementById("previous2").style.display = "block";
  document.getElementById("next2").style.display = "block"; 

};
//end


//Saving the form

function saveForm (event){
  event.preventDefault();
   
          //Primary Gathering Location Info
          var primeLoc = document.querySelector("input[name='primeLoc']").value;
          var primaryNum = document.querySelector("input[name='primeNum']").value;
          var primaryAddInfo = document.querySelector("textarea[name='primeInfo']").value;
          
          //Secondary Gathering Location Info
          var secondaryLoc = document.querySelector("input[name='secLoc']").value;
          var secondaryNum = document.querySelector("input[name='secNum']").value;
          var secondaryAddInfo = document.querySelector("textarea[name='secInfo']").value;

          //Evacuation Location Info
          var evacuationLoc = document.querySelector("input[name='evacLoc']").value;
          var evacuationNum = document.querySelector("input[name='evacNum']").value;
          var secondaryEvacLoc = document.querySelector("textarea[name='sec-Evac-Loc']").value;

          //  //Emergecny contact Info
          var contactName = document.querySelector("input[name='contactName']").value;
          var contactNum = document.querySelector("input[name='contactNum']").value;
          var contactEml = document.querySelector("input[name='contactEml']").value;
        

          //Object for form data
          var formDataObj = {

            //Primary Gathering Location Info
            primeLoc: primeLoc,
            primaryNum: primaryNum, 
            primaryAddInfo: primaryAddInfo,

          //  Secondary Gathering Location Info
            secondaryLoc: secondaryLoc,
            secondaryNum: secondaryNum,
            secondaryAddInfo: secondaryAddInfo,

          //Evacuation Location Info
          evacuationLoc: evacuationLoc,
          evacuationNum: evacuationNum,
          secondaryEvacLoc: secondaryEvacLoc,

          //  Emergecny contact Info
          contactName: contactName,
          contactNum: contactNum,  
          contactEml: contactEml,
      
      };
      
      plan.push(formDataObj);
      

      saveData()
      // };

          
          // event.preventDefault();
          // var location = document.querySelector("input[name='AddInfo']");
      // console.log(event);
      
};

function updateCards(){

  var updatedView = {

    // Primary Gathering Location Info
        viewPlan72: "start"};

        addTo72.push(updatedView);  


 
localStorage.setItem("addTo72", JSON.stringify(addTo72));


 //go to View Plan
window.location.href="./dashboard Main.html";
console.log()
};

function expandSecondary() {
    

    if(addSecond.checked==true) {
        document.getElementById("secondLocation").style.display = "block"
    ;}

    else{
        document.getElementById("secondLocation").style.display = "none";
   ;}
;}
expandSecondary();

// //function for address field

"use strict";

function initMap() {
  const CONFIGURATION = {
    "ctaTitle": "Checkout",
    "mapOptions": {"center":{"lat":37.4221,"lng":-122.0841},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":11,"zoomControl":false,"maxZoom":22,"mapId":""},
    "mapsApiKey": "AIzaSyDZ94vMQMhdMLFDd3LbpcSrjPK6rPT-3WA",
    "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":false,"ctaControl":false}
  };
  const componentForm = [
    'location',
    'locality',
    'administrative_area_level_1',
    'country',
    'postal_code',
  ];


  const getFormInputElement = (component) => document.getElementById(component + '-input2');
  const autocompleteInput = getFormInputElement('location');
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
    fields: ["address_components", "geometry", "name"],
    types: ["address"],
  });

  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert('No details available for input: \'' + place.name + '\'');
      return;
    }
    fillInAddress(place);
    
  });

  function fillInAddress(place) {  // optional parameter
    const addressNameFormat = {
      'street_number': 'short_name',
      'route': 'long_name',
      'locality': 'long_name',
      'administrative_area_level_1': 'short_name',
      'country': 'long_name',
      'postal_code': 'short_name',
    };


    const getAddressComp = function (type) {
      for (const component of place.address_components) {
        if (component.types[0] === type) {
          return component[addressNameFormat[type]];
        }
      }
      return '';
    };

    getFormInputElement('location').value = getAddressComp('street_number') + ' '
              + getAddressComp('route');
        for (const component of componentForm) {
          // Location field is handled separately above as it has different logic.
          if (component !== 'location') {
            getFormInputElement(component).value = getAddressComp(component);
      }
    }
  }
};
//end of cuntion for address field


//beggining of save data in local storage

var saveData = function () {

  localStorage.removeItem("editedPlan");
  localStorage.removeItem("plan");

  localStorage.setItem("plan", JSON.stringify(plan))

 //got to Dashboard
 window.location.href="./plan.html";
};

formEl.addEventListener("submit", saveForm);

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
          panel1,
          1
        );
        const handler2 = new AutocompleteDirectionsHandler(
          map2,
          document.getElementById("origin-input-1"),
          document.getElementById("destination-input-1"),
          document.getElementById("changemode-driving-2"),
          panel2,
          2
        );
        const handler3 = new AutocompleteDirectionsHandler(
          map3,
          document.getElementById("origin-input-2"),
          document.getElementById("destination-input-2"),
          document.getElementById("changemode-driving-3"),
          panel3,
          3
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
    origin: document.getElementById("origin-input-0").value,
    destination: document.getElementById("destination-input-0").value,
    travelMode: document.getElementById("changemode-driving-1").value,
  }));

  if (!document.getElementById("map2Section").hasAttribute("hidden")) {
    localStorage.setItem("mapData2", JSON.stringify({
      origin: document.getElementById("origin-input-1").value,
      destination: document.getElementById("destination-input-1").value,
      travelMode: document.getElementById("changemode-driving-2").value,
      }));
      }
      
      if (!document.getElementById("map3Section").hasAttribute("hidden")) {
      localStorage.setItem("mapData3", JSON.stringify({
      origin: document.getElementById("origin-input-2").value,
      destination: document.getElementById("destination-input-2").value,
      travelMode: document.getElementById("changemode-driving-3").value,
      }));
      }
      });


