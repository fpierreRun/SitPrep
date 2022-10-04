// var name = "";
    
//     while (name === "" || name === null) {
//         name = prompt("What is your robot's name?");
//       }

//     console.log(Math.max(0, 25, -5));
//     console.log(Math.floor(Math.random() * 60)+10);



// next1.addEventListener("submit", submitOne);
// locationForm.addEventListener("submit", submitOne);
// locationForm.addEventListener("click", stepTwo);

    
// function stepTwo() {
//     // Set items for page
//     alert("button clicked");
   
        
//         document.getElementById("foodForm").style.display = "block";
//         console.log()

// }
var plan = [];
var formEl = document.querySelector("#locationForm");

function saveForm (event){
  event.preventDefault();
  var location = document.querySelector("input[name='primeLoc']").value;
  var number = document.querySelector("input[name='primeNum']").value;
 
  // function appendPlan () {
var listEl = document.querySelector("#viewPlan");
var planListEl = document.createElement("li");
planListEl.textContent = location;
// //keeping the same style
planListEl.className ="h3 p-4 col";
listEl.appendChild(planListEl);

// };
console.dir(location);

    alert("button clicked");
    
    // event.preventDefault();
    // var location = document.querySelector("input[name='AddInfo']");
// console.log(event);

};


function expandSecondary() {
    

    if(addSecond.checked==true) {
        document.getElementById("secondLocation").style.display = "block"
    ;}

    else{
        document.getElementById("secondLocation").style.display = "none";
   ;}


   
    // Set items for page
    // alert("Form submitted");
    //  console.log(submitOne);
;}

function evacPage(){
    document.getElementById("evacBtns").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("secondLocation").style.display = "none";
    document.getElementById("evacForm").style.display = "block";
    document.getElementById("next").style.display = "none";
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactBtns").style.display = "none";

}

function locPage(){

    document.getElementById("step1").style.display = "block";
    document.getElementById("evacForm").style.display = "none";
    document.getElementById("back").style.display = "none";

    if(addSecond.checked==true) {
        document.getElementById("secondLocation").style.display = "block"
    ;}

    else{
        document.getElementById("secondLocation").style.display = "none";
   ;}

}

function contactPage(){
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("contactBtns").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("evacForm").style.display = "none";
    document.getElementById("evacBtns").style.display = "none";

}



// //function for addres fields

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

formEl.addEventListener("submit", saveForm);

// function initialize() {

//     var acInputs = document.getElementsByClassName("autocomplete");

//     for (var i = 0; i < acInputs.length; i++) {

//         var autocomplete = new google.maps.places.Autocomplete(acInputs[i]);
//         autocomplete.inputId = acInputs[i].id;

//         google.maps.event.addListener(autocomplete, 'place_changed', function () {
//             document.getElementById("log").innerHTML = 'You used input with id ' + this.inputId;
//         });
//     };
// };




