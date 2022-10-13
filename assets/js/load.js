var newPlan = [];


function loadPlan(){
  
  
    //   Gets task items from localStorage.
    
  
    updatedPlan = JSON.parse(localStorage.getItem("plan"));
  
 
    newPlan.push(updatedPlan);
    
    for (let i = 0; i < newPlan.length; i++) {
      var element = newPlan[i];

      function appendPlan () {


        document.getElementById("primeLoca").innerHTML= element[i].primeLoc;
        document.getElementById("primaryNum").innerHTML= element[i].primaryNum;
        document.getElementById("primaryAddInfo").innerHTML= element[i].primaryAddInfo;

 
       //  Secondary Gathering Location Info
      document.getElementById("secondaryLoc").innerHTML= element[i].secondaryLoc;
        document.getElementById("secondaryNum").innerHTML= element[i].secondaryNum;
        document.getElementById("secondaryAddInfo").innerHTML= element[i].secondaryAddInfo;
      
      
 
       //Evacuation Location Info
      document.getElementById("evacuationLoc").innerHTML= element[i].evacuationLoc;
        document.getElementById("evacuationNum").innerHTML= element[i].evacuationNum;
        document.getElementById("secondaryEvacLoc").innerHTML= element[i].secondaryEvacLoc;
    
 
      //  //  Emergecny contact Info
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
    }
  
    
    
    // Converts tasks from the string format back into an array of objects.
    
    // Iterates through a tasks array and creates task elements on the page from it.
    
    };

    function editPlan() {

      window.location.href="./home.html";
    
    
    };

    //download PDF code

    $(document).ready(function($) 
	{ 

		$(document).on('click', '.btn_print', function(event) 
		{
			event.preventDefault();

			//credit : https://ekoopmans.github.io/html2pdf.js
			
			var element = document.getElementById('downloadPlan'); 

			//easy
			html2pdf().from(element).save();

			//custom file name
			html2pdf().set({filename: 'My_Plan_'+js.AutoCode()+'.pdf'}).from(element).save();


			//more custom settings
			var opt = 
			{
			  margin:       1,
			  filename:     'pageContent_'+js.AutoCode()+'.pdf',
			  image:        { type: 'jpeg', quality: 0.98 },
			  html2canvas:  { scale: 2 },
			  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
			};

			// New Promise-based usage:
			html2pdf().set(opt).from(element).save();

			 
		});

 
 
	});

      loadPlan();
       
