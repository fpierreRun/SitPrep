
var addTo72 = [];
var plan = [];
// var newPlan = [];
var formEl = document.querySelector("#locationForm");
var formIdCounter = 0;

document.getElementById('addSecLocButton').addEventListener('click', function() {
  document.getElementById('secondaryLoc').removeAttribute('hidden');
  document.getElementById('removeSecLoc').removeAttribute('hidden');
  document.getElementById('addSecLocButton').setAttribute('hidden', true);

});

document.getElementById('removeSecLoc').addEventListener('click', function() {
  document.getElementById('secondaryLoc').setAttribute('hidden', true);
  document.getElementById('addSecLocButton').removeAttribute('hidden');
});





function evacPage(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  document.getElementById("next").style.display = "none";
  document.getElementById("step1").style.display = "none";

  document.getElementById("evacForm").style.display = "block";
  
  // document.getElementById("contactForm").style.display = "none";
  
  document.getElementById("previous1").style.display = "block";
  document.getElementById("completeDld").style.display = "block";
  // document.getElementById("previous2").style.display = "none";
  // document.getElementById("next2").style.display = "none"; 
 

};


//begin
function locPage(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


  document.getElementById("step1").style.display = "block";
  document.getElementById("evacForm").style.display = "none";
  document.getElementById("next").style.display = "block";
  document.getElementById("previous1").style.display = "none";
  document.getElementById("next1").style.display = "none";

};


//End

//begin
function contactPage(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  
  // document.getElementById("contactForm").style.display = "block";
  document.getElementById("step1").style.display = "none";
  document.getElementById("evacForm").style.display = "none";
  document.getElementById("previous1").style.display = "none";
  document.getElementById("next1").style.display = "none";
  // document.getElementById("previous2").style.display = "block";
  // document.getElementById("next2").style.display = "block"; 

};
//end


//Saving the form

function saveForm (event){
  // const element = event.target;

  // event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


  // document.getElementById("step1").style.display = "block";
  // document.getElementById("evacForm").style.display = "block";
  // document.getElementById("contactForm").style.display = "block";


          // //Primary Gathering Location Info
          // var primeLoc = document.querySelector("input[name='primeLoc']").value;
          // var primaryNum = document.querySelector("input[name='primeNum']").value;
          // var primaryAddInfo = document.querySelector("textarea[name='primeInfo']").value;
          
          // //Secondary Gathering Location Info
          // var secondaryLoc = document.querySelector("input[name='secLoc']").value;
          // var secondaryNum = document.querySelector("input[name='secNum']").value;
          // var secondaryAddInfo = document.querySelector("textarea[name='secInfo']").value;

          // //Evacuation Location Info
          // var evacuationLoc = document.querySelector("input[name='evacLoc1']").value;
          // var evacuationNum = document.querySelector("input[name='evacNum']").value;
          // var secondaryEvacLoc = document.querySelector("textarea[name='sec-Evac-Loc']").value;

          //   //Evacuation Location Info 2
          //   var evacuationLoc2 = document.querySelector("input[name='evacLoc2']").value;
          //   var evacuationNum2 = document.querySelector("input[name='evacNum2']").value;
          //   var secondaryEvacLoc2 = document.querySelector("textarea[name='sec-Evac-Loc2']").value;

          //     //Evacuation Location Info 3
          // var evacuationLoc3 = document.querySelector("input[name='evacLoc3']").value;
          // var evacuationNum3 = document.querySelector("input[name='evacNum3']").value;
          // var secondaryEvacLoc3 = document.querySelector("textarea[name='sec-Evac-Loc3']").value;
          

          // //  //Emergecny contact Info
          // var contactName = document.querySelector("input[name='contactName']").value;
          // var contactNum = document.querySelector("input[name='contactNum']").value;
          // var contactEml = document.querySelector("input[name='contactEml']").value;
        

      //     //Object for form data
      //     var formDataObj = {

      //       //Primary Gathering Location Info
      //       primeLoc: primeLoc,
      //       primaryNum: primaryNum, 
      //       primaryAddInfo: primaryAddInfo,

      //     //  Secondary Gathering Location Info
      //       secondaryLoc: secondaryLoc,
      //       secondaryNum: secondaryNum,
      //       secondaryAddInfo: secondaryAddInfo,

      //     //Evacuation Location Info
      //     evacuationLoc: evacuationLoc,
      //     evacuationNum: evacuationNum,
      //     secondaryEvacLoc: secondaryEvacLoc,

      //      //Evacuation Location Info 2
      //      evacuationLoc2: evacuationLoc2,
      //      evacuationNum2: evacuationNum2,
      //      secondaryEvacLoc2: secondaryEvacLoc2,

      //       //Evacuation Location Info 3
      //     evacuationLoc3: evacuationLoc3,
      //     evacuationNum3: evacuationNum3,
      //     secondaryEvacLoc3: secondaryEvacLoc3,

      //     // //  Emergecny contact Info
      //     // contactName: contactName,
      //     // contactNum: contactNum,  
      //     // contactEml: contactEml,
      
      // };
     

      // plan.push(formDataObj);
      

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

};



// //function for address field

// "use strict";

// function initMap() {
//   const CONFIGURATION = {
//     "ctaTitle": "Checkout",
//     "mapOptions": {"center":{"lat":37.4221,"lng":-122.0841},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":true,"zoom":11,"zoomControl":false,"maxZoom":22,"mapId":""},
//     "mapsApiKey": "AIzaSyDZ94vMQMhdMLFDd3LbpcSrjPK6rPT-3WA",
//     "capabilities": {"addressAutocompleteControl":true,"mapDisplayControl":false,"ctaControl":false}
//   };
//   const componentForm = [
//     'location',
//     'locality',
//     'administrative_area_level_1',
//     'country',
//     'postal_code',
//   ];


//   const getFormInputElement = (component) => document.getElementById(component + '-input2');
//   const autocompleteInput = getFormInputElement('location');
//   const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
//     fields: ["address_components", "geometry", "name"],
//     types: ["address"],
//   });

//   autocomplete.addListener('place_changed', function () {
//     const place = autocomplete.getPlace();
//     if (!place.geometry) {
//       // User entered the name of a Place that was not suggested and
//       // pressed the Enter key, or the Place Details request failed.
//       window.alert('No details available for input: \'' + place.name + '\'');
//       return;
//     }
//     fillInAddress(place);
    
//   });

//   function fillInAddress(place) {  // optional parameter
//     const addressNameFormat = {
//       'street_number': 'long_name',
//       'route': 'long_name',
//       'locality': 'long_name',
//       'administrative_area_level_1': 'long_name',
//       'country': 'long_name',
//       'postal_code': 'long_name',
//     };


//     const getAddressComp = function (type) {
//       for (const component of place.address_components) {
//         if (component.types[0] === type) {
//           return component[addressNameFormat[type]];
//         }
//       }
//       return '';
//     };

//     getFormInputElement('location').value = getAddressComp('street_number') + ' '
//               + getAddressComp('route');
//         for (const component of componentForm) {
//           // Location field is handled separately above as it has different logic.
//           if (component !== 'location') {
//             getFormInputElement(component).value = getAddressComp(component);
//       }
//     }
//   }
// };
//end of cuntion for address field


//beggining of save data in local storage

var saveData = function () {

  localStorage.removeItem("editedPlan");
  localStorage.removeItem("plan");

  localStorage.setItem("plan", JSON.stringify(plan))

 //got to Dashboard
 showPlan()
 
};

formEl.addEventListener("submit", saveForm);

// Function to download the page as PDF
function downloadAsPDF() {


  // Select the target element to convert to PDF
  const element = document.querySelector('#downloadPlan');

  const elementsToHide = element.querySelectorAll('.element-to-hide');
  elementsToHide.forEach((el) => {
    el.setAttribute('hidden', true);
  });

  // Provide options for PDF generation
  const options = {
    margin: [5, 5, 5, 5], // Adjust the margins as per your requirement
    filename: 'My_Evacuation_plan.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, scrollY: 0   },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Use html2pdf library to generate and download the PDF
  html2pdf().set(options).from(element).save();

   // Avoid page-breaks on all elements, and add one before #page2el.
   html2pdf().set({
    pagebreak: { mode: 'avoid-all', after: '#page2el' }
  });

 
 
}

// Call the downloadAsPDF function when the button is clicked
document.querySelector('.btn_print').addEventListener('click', downloadAsPDF);

 


function showPlan(element) {

  // Modify the querySelectorAll call to select the element by its id
  document.getElementById("editVone").hidden = true;
  document.getElementById("editVtwo").hidden = true;
 

  // document.getElementById("editVthree").hidden = true;
  // document.getElementById("editVthree").hidden = true;
  // document.getElementById("editVthree").hidden = true;

  document.getElementById("pdfVone").removeAttribute("hidden");
  document.getElementById("pdfVtwo").removeAttribute("hidden");
 
  // document.getElementById("downloadPlan2").removeAttribute("hidden");
  document.getElementById("titleSig").removeAttribute("hidden");

  // document.getElementById("removeMap5Button").hidden = true;
  document.getElementById("removeMap2Button").hidden = true;
  document.getElementById("removeMap3Button").hidden = true;
  // document.getElementById("addMap5Button").hidden = true;
  document.getElementById("addMap2Button").hidden = true;
  document.getElementById("addMap3Button").hidden = true;
  // document.getElementById("save").hidden = true;
  // document.getElementById("previous2").hidden = true; 



  document.getElementById("step1").style.display = "block";
  document.getElementById("evacForm").style.display = "block";
  // document.getElementById("contactForm").style.display = "block";
  document.getElementById("downloadpdf1").style.display = "block";

  document.getElementById("editPdf").style.display = "block";



  

}

// function showPlan(element) {
//   const editVersions = document.querySelectorAll('[id^="editVersion"]');
//   editVersions.forEach((editVersion) => {
//     editVersion.style.display = "none";
//   });

//   document.getElementById("step1").style.display = "block";
//   document.getElementById("evacForm").style.display = "block";
//   document.getElementById("contactForm").style.display = "block";
//   document.getElementById("downloadpdf1").style.display = "block";
//   document.getElementById("editPdf").style.display = "block";

//   const elementsToHide = element.querySelectorAll('.element-to-hide');
//   elementsToHide.forEach((el) => {
//     el.setAttribute('hidden', true);
//   });
// }


function editPlan(element) {
 // Modify the querySelectorAll call to select the element by its id
document.getElementById("editVone").removeAttribute("hidden");
document.getElementById("editVtwo").removeAttribute("hidden");
// document.getElementById("editVthree").removeAttribute("hidden");

// document.getElementById("editVthree").hidden = true;
// document.getElementById("editVthree").hidden = true;
// document.getElementById("editVthree").hidden = true;

document.getElementById("pdfVone").hidden = true;
document.getElementById("pdfVtwo").hidden = true;
// document.getElementById("pdfVthree").hidden = true;
// document.getElementById("downloadPlan2").hidden = true;
document.getElementById("titleSig").hidden = true;

// document.getElementById("removeMap5Button").removeAttribute("hidden");
document.getElementById("removeMap2Button").removeAttribute("hidden");
document.getElementById("removeMap3Button").removeAttribute("hidden");
// document.getElementById("addMap5Button").removeAttribute("hidden");
document.getElementById("addMap2Button").removeAttribute("hidden");
document.getElementById("addMap3Button").removeAttribute("hidden");
// document.getElementById("save").removeAttribute("hidden");
// document.getElementById("previous2").hidden = true;



document.getElementById("step1").style.display = "block";
document.getElementById("evacForm").style.display = "block";
// document.getElementById("contactForm").style.display = "block";
document.getElementById("downloadpdf1").hidden = true;

document.getElementById("editPdf").hidden = true;

}

