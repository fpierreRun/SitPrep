

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

 //second evac

 if(!element[i].evacuationLoc2) {

  element[i].evacuationLoc2 ="n/a"
 };

 if(!element[i].evacuationNum2) {

  element[i].evacuationNum2 = "n/a";

 };

 if(!element[i].secondaryEvacLoc2) {

  element[i].secondaryEvacLoc2 = "n/a";

 };

  //third evac

  if(!element[i].evacuationLoc3) {

    element[i].evacuationLoc3 ="n/a"
   };
  
   if(!element[i].evacuationNum3) {
  
    element[i].evacuationNum3 = "n/a";
  
   };
  
   if(!element[i].secondaryEvacLoc3) {
  
    element[i].secondaryEvacLoc3 = "n/a";
  
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

          //Evacuation Location Info 2
      document.getElementById("evacuationLoc2").value= element[i].evacuationLoc2;
      document.getElementById("evacuationNum2").value= element[i].evacuationNum2;
      document.getElementById("secondaryEvacLoc2").value= element[i].secondaryEvacLoc2;

        //Evacuation Location Info 3
        document.getElementById("evacuationLoc3").value= element[i].evacuationLoc3;
        document.getElementById("evacuationNum3").value= element[i].evacuationNum3;
        document.getElementById("secondaryEvacLoc3").value= element[i].secondaryEvacLoc3;
    
 
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


     


  var saveData = function () {
    localStorage.removeItem("editedPlan");
    localStorage.removeItem("plan");
    

    localStorage.setItem("editedPlan", JSON.stringify(editedPlan))

    loadPlan();
  };
  
  function giveFeedback (){

    window.location.href="./feedback.html";

  };



  


  
  