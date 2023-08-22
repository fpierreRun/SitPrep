
var addTo72 = [];
var plan = [];
// var newPlan = [];
var formEl = document.querySelector("#locationForm");
var formIdCounter = 0;

document.getElementById('addSecLocButton').addEventListener('click', function() {
  document.getElementById('split3').removeAttribute('hidden');
  document.getElementById('removeSecLoc').removeAttribute('hidden');
  document.getElementById('addSecLocButton').setAttribute('hidden', true);

});

document.getElementById('removeSecLoc').addEventListener('click', function() {
  document.getElementById('split3').setAttribute('hidden', true);
  document.getElementById('addSecLocButton').removeAttribute('hidden');
});
document.getElementById('completeDld').addEventListener('click', function() {
  document.getElementById('addSecLocButton').setAttribute('hidden', true);
});




function evacPage(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
 
  document.getElementById('next').setAttribute('hidden', true);
  document.getElementById('step1').setAttribute('hidden', true);
 
  
  // document.getElementById("contactForm").style.display = "none";
  document.getElementById('previous1').removeAttribute('hidden');
  document.getElementById('completeDld').removeAttribute('hidden');
  document.getElementById('evacForm').removeAttribute('hidden');
 

};


//begin
function locPage(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // document.getElementById('next1').setAttribute('hidden', true);
  document.getElementById('previous1').setAttribute('hidden', true);
  document.getElementById('evacForm').setAttribute('hidden', true);
  document.getElementById('step1').removeAttribute('hidden');
  document.getElementById('next').removeAttribute('hidden');


};


//End

//begin

//end


//Saving the form

function saveForm (event){
 

  // event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });



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





//beggining of save data in local storage

var saveData = function () {

  localStorage.removeItem("editedPlan");
  localStorage.removeItem("plan");

  localStorage.setItem("plan", JSON.stringify(plan))

 //got to Dashboard
 showPlan()
 
};

formEl.addEventListener("submit", saveForm);

async function downloadAsPDF() {
 
  const element = document.querySelector('#downloadPlan');

  // Hide elements you don't want in the PDF
  const elementsToHide = element.querySelectorAll('.element-to-hide');
  elementsToHide.forEach((el) => {
      el.setAttribute('hidden', true);
  });

  const pdf = new jsPDF('p', 'mm', 'a4');
  const options = {
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
  };

  // Let's assume these are your split sections
  const sectionSelectors = [
      '#split2', '#split3', '#split4', '#split5',
      '#split6', '#split7', '#split8', '#split9'    
     
  ];

  // Filter sections that exist and are not hidden
  const validSections = sectionSelectors
      .map(selector => document.querySelector(selector))
      .filter(section => section && !section.hasAttribute('hidden'));

  for (let section of validSections) {
      const canvasImage = await html2pdf().set(options).from(section).outputImg();
      pdf.addImage(canvasImage, 'JPEG', 10, 10, 190, 277);  // Adjust the x, y, width, and height values as needed.
      if (section !== validSections[validSections.length - 1]) {
          pdf.addPage();
      }
  }

  pdf.save('My_Evacuation_plan.pdf');

  // Restore hidden elements
  elementsToHide.forEach((el) => {
      el.removeAttribute('hidden');
  });
}



// Call the downloadAsPDF function when the button is clicked
document.querySelector('.btn_print').addEventListener('click', downloadAsPDF);

 


function showPlan(element) {

  // Modify the querySelectorAll call to select the element by its id
  document.getElementById("editVone").hidden = true;
  document.getElementById("editVtwo").hidden = true;
  document.getElementById("close1").hidden = true;
  document.getElementById("previous1").hidden = true;
  document.getElementById("completeDld").hidden = true; 
  document.getElementById("saiCollapse").hidden = true; 
  document.getElementById("gathName").hidden = true; 
document.getElementById("gathName2").hidden = true; 
 


  document.getElementById("pdfVone").removeAttribute("hidden");
  document.getElementById("pdfVtwo").removeAttribute("hidden");
  document.getElementById("split4").removeAttribute("hidden");
  document.getElementById("split5").removeAttribute("hidden");
 

  document.getElementById("titleSig").removeAttribute("hidden");

  document.getElementById("autocomplete1").hidden = true;
  document.getElementById("autocomplete2").hidden = true;
  document.getElementById("removeMap2Button").hidden = true;
  document.getElementById("removeMap3Button").hidden = true;
  document.getElementById("addSecLocButton").hidden = true;
  document.getElementById("addMap2Button").hidden = true;
  document.getElementById("addMap3Button").hidden = true;
 

  document.getElementById('step1').removeAttribute('hidden');
  

  document.getElementById('downloadpdf1').removeAttribute('hidden');
  document.getElementById('editPdf').removeAttribute('hidden');
  document.getElementById('evacForm').removeAttribute('hidden');
 
  


  

}



function editPlan(element) {
 // Modify the querySelectorAll call to select the element by its id
document.getElementById("editVone").removeAttribute("hidden");
document.getElementById("editVtwo").removeAttribute("hidden");
document.getElementById("completeDld").removeAttribute("hidden");
document.getElementById("saiCollapse").removeAttribute("hidden");
document.getElementById("gathName").removeAttribute("hidden");
document.getElementById("gathName2").removeAttribute("hidden");




document.getElementById("pdfVone").hidden = true;
document.getElementById("split4").hidden = true;
document.getElementById("split5").hidden = true;
document.getElementById("previous1").hidden = true;

document.getElementById("titleSig").hidden = true;


document.getElementById("removeMap2Button").removeAttribute("hidden");
document.getElementById("removeMap3Button").removeAttribute("hidden");
document.getElementById("addSecLocButton").removeAttribute("hidden");
document.getElementById("addMap2Button").removeAttribute("hidden");
document.getElementById("addMap3Button").removeAttribute("hidden");




document.getElementById("step1").style.display = "block";
document.getElementById("evacForm").style.display = "block";
// document.getElementById("contactForm").style.display = "block";
document.getElementById("downloadpdf1").hidden = true;

document.getElementById("editPdf").hidden = true;

}

