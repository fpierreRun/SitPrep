

var plan = [];
// var newPlan = [];
var formEl = document.querySelector("#locationForm");
var formIdCounter = 0;

function evacPage(){
  document.getElementById("evacBtns").style.display = "block";
  document.getElementById("step1").style.display = "none";
  document.getElementById("secondLocation").style.display = "none";
  document.getElementById("evacForm").style.display = "block";
  document.getElementById("next").style.display = "none";
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("contactBtns").style.display = "none";
};

//begin
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

};
//End

//begin
function contactPage(){
  document.getElementById("contactForm").style.display = "block";
  document.getElementById("contactBtns").style.display = "block";
  document.getElementById("step1").style.display = "none";
  document.getElementById("evacForm").style.display = "none";
  document.getElementById("evacBtns").style.display = "none";

};
//end


//Saving the form

function saveForm (event){
  event.preventDefault();

    //got to View Plan
    window.location.href="./plan.html";

   
          //Primary Gathering Location Info
          var primeLoc = document.querySelector("input[name='primeLoc']").value;
          var primaryNum = document.querySelector("input[name='primeNum']".value);
          var primaryAddInfo = document.querySelector("textarea[name='primeInfo']").value;
          console.log(primaryNum);
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
      // console.log(saveForm)
};



function expandSecondary() {
    

    if(addSecond.checked==true) {
        document.getElementById("secondLocation").style.display = "block"
    ;}

    else{
        document.getElementById("secondLocation").style.display = "none";
   ;}
;}


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
  localStorage.setItem("plan", JSON.stringify(plan))

  console.log(plan)
};

  

formEl.addEventListener("submit", saveForm);

