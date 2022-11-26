

var plan = [];
var newPlan = [];
var editedPlan = [];


 


function loadPlan(){
  
  
    //   Gets task items from localStorage.

    updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));

    if(!updatedPlan){
    updatedPlan = JSON.parse(localStorage.getItem("plan"));

  }
 


    newPlan.push(updatedPlan);

      
    for (let i = 0; i < newPlan.length; i++) {
     
      
      var element = newPlan[newPlan.length-1];

      //If fields are blank put n/a as place holder
      function notApplicaple (){
   
  if(!element[i].primeLoc) {

  element[i].primeLoc ="n/a"
 };

 if(!element[i].primaryNum) {

  element[i].primaryNum = "n/a";

 };

 if(!element[i].primaryAddInfo) {

  element[i].primaryAddInfo = "n/a";

 };


 if(!element[i].secondaryLoc) {

  element[i].secondaryLoc ="n/a"
 };

 if(!element[i].secondaryNum) {

  element[i].secondaryNum = "n/a";

 };

 if(!element[i].secondaryAddInfo) {

  element[i].secondaryAddInfo = "n/a";

 };


 if(!element[i].evacuationLoc) {

  element[i].evacuationLoc ="n/a"
 };

 if(!element[i].evacuationNum) {

  element[i].evacuationNum = "n/a";

 };

 if(!element[i].secondaryEvacLoc) {

  element[i].secondaryEvacLoc = "n/a";

 };



 if(!element[i].contactName) {

  element[i].contactName ="n/a"
 };

 if(!element[i].contactNum) {

  element[i].contactNum = "n/a";

 };

 if(!element[i].contactEml) {

  element[i].contactEml = "n/a";
  
  
 };
 

};
notApplicaple()

 

      

      function appendPlan () {


        document.getElementById("primeLoc").value= element[i].primeLoc;
        document.getElementById("primaryNum").value= element[i].primaryNum;
        document.getElementById("primaryAddInfo").value= element[i].primaryAddInfo;

        
 
        // Secondary Gathering Location Info
      document.getElementById("secondaryLoc").value= element[i].secondaryLoc;
        document.getElementById("secondaryNum").value= element[i].secondaryNum;
        document.getElementById("secondaryAddInfo").value= element[i].secondaryAddInfo;
      
        
 
       //Evacuation Location Info
      document.getElementById("evacuationLoc").value= element[i].evacuationLoc;
        document.getElementById("evacuationNum").value= element[i].evacuationNum;
        document.getElementById("secondaryEvacLoc").value= element[i].secondaryEvacLoc;
    
 
       //  Emergecny contact Info
      document.getElementById("contactName").value= element[i].contactName;
        document.getElementById("contactNum").value= element[i].contactNum;
        document.getElementById("contactEml").value= element[i].contactEml;
     
  
          };
    
          appendPlan();
    };
  
    
    
    // Converts tasks from the string format back into an array of objects.
    
    // Iterates through a tasks array and creates task elements on the page from it.
    
    };

    loadPlan();
   

//     // Edit Plan Data
//     $(".plan").on("click", "p", function() {
//        var text = $(this)
//     .text()
//     .trim();



//     var textInput = $("<textarea>")
//     .attr('id', this.id)
//     .attr('class', this.className)
//   .val(text);

//   $(this).replaceWith(textInput);
 
//   textInput.trigger("focus");
//     });


//     // Saving edited data
//     $(".plan").on("blur", "textarea", function() {

//       var text = $(this)
      
//   .val()
//   .trim();
 
 
//   // recreate p element
// var updatedData = $("<p>")
//   .attr('id', this.id)
//     .attr('class', this.className)
// .text(text);



// // replace textarea with p element
// $(this).replaceWith(updatedData);



// localStorage.removeItem("plan");
// localStorage.removeItem("editedPlan");

// updateEdited();

//     });

    
          








var pushEdited = function () {

// Primary Gathering Location Info
          var primeLoc = document.getElementById("primeLoc").value;
          var primaryNum = document.getElementById("primaryNum").value;
          var primaryAddInfo = document.getElementById("primaryAddInfo").value;
          

          // //Secondary Gathering Location Info
          var secondaryLoc = document.getElementById("secondaryLoc").value;
          var secondaryNum = document.getElementById("secondaryNum").value;
          var secondaryAddInfo = document.getElementById("secondaryAddInfo").value;

          // //Evacuation Location Info
          var evacuationLoc = document.getElementById("evacuationLoc").value;
          var evacuationNum = document.getElementById("evacuationNum").value;
          var secondaryEvacLoc = document.getElementById("secondaryEvacLoc").value;

         
          // //  //Emergecny contact Info
          var contactName = document.getElementById("contactName").value;
          var contactNum = document.getElementById("contactNum").value;
          var contactEml = document.getElementById("contactEml").value;

  
  
          //Object for form data
  var formDataObj = {

  // Primary Gathering Location Info
      primeLoc: primeLoc,
      primaryNum: primaryNum, 
      primaryAddInfo: primaryAddInfo,

  // Secondary Gathering Location Info
    secondaryLoc: secondaryLoc,
    secondaryNum: secondaryNum,
    secondaryAddInfo: secondaryAddInfo,

  // Evacuation Location Info
    evacuationLoc: evacuationLoc,
    evacuationNum: evacuationNum,
    secondaryEvacLoc: secondaryEvacLoc,

  // Emergecny contact Info
      contactName: contactName,
      contactNum: contactNum,  
      contactEml: contactEml,
      
  };

  editedPlan.push(formDataObj);
  
   localStorage.removeItem("editedPlan");
    
  
  saveData()
  
};

var updateEdited = function () {
  localStorage.removeItem('editedPlan');

  pushEdited ();
};


     //download PDF code

     $(document).ready(function($) 
     { 
   
       $(document).on('click', '.btn_print', function(event) 
       {
         event.preventDefault();
   
         //credit : https://ekoopmans.github.io/html2pdf.js
         
         var element = document.getElementById('downloadPlan'); 
   
         console.log(element)
         
   
         //more custom settings
         var opt = 
         {
           margin:     0.25,
           filename:     'My_Plan_.pdf',
           image:        { type: 'pdf', quality: 0.98 },
           html2canvas:  { scale: 2, scrollY: 0 },
           jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
         };
   
         // New Promise-based usage:
         html2pdf().set(opt).from(element).save();
   
         // Avoid page-breaks on all elements, and add one before #page2el.
           // Enable all 'modes', with no explicit elements.
          html2pdf().set({
            pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
          });
   
       });
   
     });
  //download PDF code ends


  var saveData = function () {
    localStorage.removeItem("editedPlan");
    localStorage.removeItem("plan");
    

    localStorage.setItem("editedPlan", JSON.stringify(editedPlan))

    loadPlan();
  };
  
  function giveFeedback (){

    window.location.href="./feedback.html";
console.log()
  };