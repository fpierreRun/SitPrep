

var plan = [];
var newPlan = [];


 


function loadPlan(){
  
  
    //   Gets task items from localStorage.
    
  
    updatedPlan = JSON.parse(localStorage.getItem("plan"));
  


    newPlan.push(updatedPlan);
    
    
    for (let i = 0; i < newPlan.length; i++) {
     
      
      var element = newPlan[newPlan.length-1];

      console.log(newPlan[newPlan.length-1]);

       
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


        document.getElementById("primeLoc").innerHTML= element[i].primeLoc;
        document.getElementById("primaryNum").innerHTML= element[i].primaryNum;
        document.getElementById("primaryAddInfo").innerHTML= element[i].primaryAddInfo;

        
 
        // Secondary Gathering Location Info
      document.getElementById("secondaryLoc").innerHTML= element[i].secondaryLoc;
        document.getElementById("secondaryNum").innerHTML= element[i].secondaryNum;
        document.getElementById("secondaryAddInfo").innerHTML= element[i].secondaryAddInfo;
      
        
 
       //Evacuation Location Info
      document.getElementById("evacuationLoc").innerHTML= element[i].evacuationLoc;
        document.getElementById("evacuationNum").innerHTML= element[i].evacuationNum;
        document.getElementById("secondaryEvacLoc").innerHTML= element[i].secondaryEvacLoc;
    
 
       //  Emergecny contact Info
      document.getElementById("contactName").innerHTML= element[i].contactName;
        document.getElementById("contactNum").innerHTML= element[i].contactNum;
        document.getElementById("contactEml").innerHTML= element[i].contactEml;
     
    
       
        // alert("working");
        // var listEl = document.querySelector("#viewPlan2");
        // var planListEl = document.createElement("li");
        // planListEl.textContent = newPlan;
        // // //keeping the same style
        // planListEl.className ="h3 p-4 col";
        // listEl.appendChild(planListEl);
          };
    
          appendPlan();
    };
  
    
    
    // Converts tasks from the string format back into an array of objects.
    
    // Iterates through a tasks array and creates task elements on the page from it.
    
    };

    loadPlan();
   

    // Edit Plan Data
    $(".plan").on("click", "span", function() {
       var text = $(this)
    .text()
    .trim();

    

    var textInput = $("<textarea>")
    .attr('id', this.id)
    .attr('class', this.className)
  .val(text);

  

  $(this).replaceWith(textInput);
 
  textInput.trigger("focus");
    });


    // Saving edited data
    $(".plan").on("blur", "textarea", function() {

      var text = $(this)
      
  .val()
  .trim();

 
  // recreate p element
var updatedData = $("<span>")
  .attr('id', this.id)
    .attr('class', this.className)
.text(text);




// replace textarea with p element
$(this).replaceWith(updatedData);



updateEdited();

    });

    
          


var updateEdited = function () {
// Primary Gathering Location Info
          var primeLoc = document.getElementById("primeLoc").innerHTML;
          var primaryNum = document.getElementById("primaryNum").innerHTML;
          var primaryAddInfo = document.getElementById("primaryAddInfo").innerHTML;
          
          // //Secondary Gathering Location Info
          var secondaryLoc = document.getElementById("secondaryLoc").innerHTML;
          var secondaryNum = document.getElementById("secondaryNum").innerHTML;
          var secondaryAddInfo = document.getElementById("secondaryAddInfo").innerHTML;

          // //Evacuation Location Info
          var evacuationLoc = document.getElementById("evacuationLoc").innerHTML;
          var evacuationNum = document.getElementById("evacuationNum").innerHTML;
          var evacuationLoc = document.getElementById("secondaryEvacLoc").innerHTML;

          // //  //Emergecny contact Info
          var contactName = document.getElementById("contactName").innerHTML;
          var contactNum = document.getElementById("contactNum").innerHTML;
          var secondaryEvacLoc = document.getElementById("contactEml").innerHTML;

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

 
  plan.push(formDataObj);
  
 
  

  saveData()
  
};


    //download PDF code

    $(document).ready(function($) 
	{ 

		$(document).on('click', '.btn_print', function(event) 
		{
			event.preventDefault();

			//credit : https://ekoopmans.github.io/html2pdf.js
			
			var element = document.getElementById('downloadPlan'); 

			

			//more custom settings
			var opt = 
			{
			  margin:     0.25,
			  filename:     'My_Plan_.pdf',
			  image:        { type: 'pdf', quality: 0.98 },
			  html2canvas:  { scale: 2 },
			  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
			};

			// New Promise-based usage:
			html2pdf().set(opt).from(element).save();

      // Avoid page-breaks on all elements, and add one before #page2el.
        html2pdf().set({
          pagebreak: { mode: 'avoid-all', before: '#page2el' }
        });

		});

 
 
	});

  var saveData = function () {
    localStorage.setItem("plan", JSON.stringify(plan))

    loadPlan();
  };
  
     
       
