
var addTo72 = [];
var prog72 = [];


function updateCards (){

    var updatedView = {

      // Primary Gathering Location Info
          viewPlan72: "start"};
  
          addTo72.push(updatedView);  


   
  localStorage.setItem("addTo72", JSON.stringify(addTo72));


   //got to View Plan
 window.location.href="./home.html";
 
};



function cardUpdates() {
 

  viewPlan = JSON.parse(localStorage.getItem("addTo72"));
  updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));

    if(!updatedPlan){
    updatedPlan = JSON.parse(localStorage.getItem("plan"));

  }


  if(viewPlan){
  
    document.getElementById("continue1").style.display = "block";
    document.getElementById("add1").style.display = "none";
    
    document.getElementById("not1").style.display = "none";
    document.getElementById("prog1").style.display = "block";

    
  };


  updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));

  if(!updatedPlan){
  updatedPlan = JSON.parse(localStorage.getItem("plan"));

}

if(updatedPlan){

  
  localStorage.removeItem('addTo72');
  
  document.getElementById("continue1").style.display = "none";
  document.getElementById("view1").style.display = "block";
  document.getElementById("add1").style.display = "none";
  
  document.getElementById("not1").style.display = "none";
    document.getElementById("prog1").style.display = "none";
    document.getElementById("comp1").style.display = "block";

    document.getElementById("step1M").style.display = "none";
    document.getElementById("step1C").style.display = "block";



    var prog72 = 33.333;
  
};

function progTotal() {

  var sumProgress = prog72 

  document.getElementById("planProgress").style.width= sumProgress += "%";

console.log(document.getElementById("planProgress").style.width);
};
progTotal();


};
cardUpdates();


