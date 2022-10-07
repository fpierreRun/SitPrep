var newPlan = [];

function loadPlan(){
  
  
    //   Gets task items from localStorage.
    
  
    updatedPlan = JSON.parse(localStorage.getItem("plan"));
    newPlan.push(updatedPlan);
    
    
    console.log(appendPlan)
    
    
    // Converts tasks from the string format back into an array of objects.
    
    // Iterates through a tasks array and creates task elements on the page from it.
    
    };

function appendPlan () {

    alert("working");
    document.getElementById("results").innerHTML= newPlan
   
    // alert("working");
    // var listEl = document.querySelector("#viewPlan2");
    // var planListEl = document.createElement("li");
    // planListEl.textContent = newPlan;
    // // //keeping the same style
    // planListEl.className ="h3 p-4 col";
    // listEl.appendChild(planListEl);
      };

      loadPlan();
        appendPlan();
