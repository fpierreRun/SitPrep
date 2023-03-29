
var addTo72 = [];
var prog72 = [];
var prfName =[];





function applyName(){

  updatedName = JSON.parse(localStorage.getItem("prfName"));
  
  for (let i = 0; i < updatedName.length; i++) {
 
    var element = updatedName[updatedName[i].length-1];
   
    if(!element.myName){

      $("#getName").modal()  
     };

  
  };
}
applyName()




function saveName(){
  localStorage.removeItem("prfName");
  var myName = document.getElementById("inputName").value;
   
    //Object for form data
    var nameDataObj = {
  
      //preferred name
      myName: myName,
    
    };
    prfName.push(nameDataObj);
    localStorage.removeItem("prfName");
    updateName()
  
  };
 
  function updateName() {
 
    localStorage.removeItem("prfName");
  
    localStorage.setItem("prfName", JSON.stringify(prfName))
    loadName();
  };

  function loadName(){

    updatedName = JSON.parse(localStorage.getItem("prfName"));

    for (let i = 0; i < updatedName.length; i++) {
 
    var element = updatedName[updatedName.length-1];
    

        document.getElementById("displayname").innerHTML= element.myName;
        

    };
   
};
loadName()



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

    
    const evacForm = document.getElementsByClassName("evacForm");
    for (let i = 0; i < evacForm.length; i++) {
      evacForm[i].classList.add("d-block");}

      const evacPlan = document.getElementsByClassName("evacPlan");
      for (let i = 0; i < evacPlan.length; i++) {
        evacPlan[i].classList.add("d-block");}


    // var evacForm = document.getElementById("evacForm");
    // evacForm.classList.add("d-block");

    
    // var evacPlan = document.getElementById("evacPlan");
    // evacPlan.classList.add("d-none");

    
  };


  updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));

  if(!updatedPlan){
  updatedPlan = JSON.parse(localStorage.getItem("plan"));

}

if(updatedPlan){

  
  localStorage.removeItem('addTo72');

  const evacForm = document.getElementsByClassName("evacForm");
    for (let i = 0; i < evacForm.length; i++) {
      evacForm[i].classList.add("d-none");}

      const remEvacPlan = document.getElementsByClassName("evacPlan");
    for (let i = 0; i < remEvacPlan.length; i++) {
      remEvacPlan[i].classList.remove("d-none");}

      const evacPlan = document.getElementsByClassName("evacPlan");
      for (let i = 0; i < evacPlan.length; i++) {
        evacPlan[i].classList.add("d-block");}

        // Evac Checklist begin
        const step1M = document.getElementsByClassName("step1M");
    for (let i = 0; i < step1M.length; i++) {
      step1M[i].classList.add("d-none");}

      const step1C = document.getElementsByClassName("step1C");
    for (let i = 0; i < step1C.length; i++) {
      step1C[i].classList.remove("d-none");}

      // const evacPlan = document.getElementsByClassName("evacPlan");
      // for (let i = 0; i < evacForm.length; i++) {
      //   evacPlan[i].classList.add("d-block");}

  
  document.getElementById("continue1").style.display = "none";
  document.getElementById("view1").style.display = "block";
  document.getElementById("add1").style.display = "none";
  
  document.getElementById("not1").style.display = "none";
    document.getElementById("prog1").style.display = "none";
    document.getElementById("comp1").style.display = "block";

    // document.getElementById("step1M").style.display = "none";
    document.getElementById("step1C").style.display = "block";

  
    

    // var evacForm = document.getElementById("evacForm");
    // evacForm.classList.add("d-none");

    // var remEvacPlan = document.getElementById("evacPlan");
    // remEvacPlan.classList.remove("d-none");

    // var evacPlan = document.getElementById("evacPlan");
    // evacPlan.classList.add("d-block");

    var prog72 = 33.333;

};

function progTotal() {

  var sumProgress = prog72 

  document.getElementById("planProgress").style.width= sumProgress += "%";


};
progTotal();


};
cardUpdates();


function editName(){
 
  $("#getName").modal() 
  
};


