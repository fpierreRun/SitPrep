var demoData = [];
var newFood = [];
var addList = [];



function refreshpageFood() {

  updatedFood = JSON.parse(localStorage.getItem("demoData"));

  for (let i = 0; i < updatedFood.length; i++) {

  var element = updatedFood[updatedFood.length-1];
  
  // newFood.push(element);


  
 
      document.getElementById("infants").value= element.infants;
      document.getElementById("kids").value= element.kids;
      document.getElementById("adults").value= element.adults;

      document.getElementById("dogs").value= element.dogs;
      document.getElementById("cats").value= element.cats;
      document.getElementById("pets").value= element.pets;
      
      var infants = document.getElementById("infants").value
      var kids = document.getElementById("kids").value
      var adults = document.getElementById("adults").value

      var dogs = document.getElementById("dogs").value
      var cats = document.getElementById("cats").value
      var pets = document.getElementById("pets").value
    
      // Food Supply
      var gallon2 = ((~~kids)+(~~adults))*6
      // var meat = ((~~kids*1)+(~~adults*2))*3
      // var fruit = ((~~kids*1)+(~~adults*2))*3
      // var juice = ((~~kids*8)+(~~adults*24))*3
      // var milk = ((~~kids*8)+(~~adults*24))*3
      // var snacks = ((~~kids*3)+(~~adults*9))*3
      // var aVitamins = (~~adults)*3
      // var kVitamins = (~~kids)*3
      // var babyFood = (~~infants)*3
      // var babyFormula = (~~infants)*3
      // var dogFood = (~~dogs)*3
      // var catFood = (~~cats)*3
      // var otherPet = (~~others)*3

      // Addotional Supplies
      var diapers = (~~infants)*3
      
      // Update Food Tables
      function updateTable() {
      
      // Update Food Tables
      document.getElementById("diapers").innerHTML= diapers;
      document.getElementById("water2").innerHTML= gallon2;
      };
      updateTable()
      
  };
  
  };



//Saving food supply info

function saveFood() {
  localStorage.removeItem("demoData");
    infants = document.getElementById("infants").value
    adults = document.getElementById("adults").value
    kids = document.getElementById("kids").value
    dogs = document.getElementById("dogs").value
    cats = document.getElementById("cats").value
    pets = document.getElementById("pets").value
  
    //Object for form data
    var demoDataObj = {
  
      //Household Demographic
      infants: infants,
      adults: adults, 
      kids: kids,
  
        //  Pets
        dogs: dogs,
        cats: cats,
        pets: pets,
  
    };
    demoData.push(demoDataObj);
    localStorage.removeItem("demoData");
    saveData()
   
  };
 
 

  function displayTable(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    document.getElementById("demograhpic").style.display = "none";
    document.getElementById("foodtable").style.display = "block";
    document.getElementById("foodBackBtn").style.display = "block";
    
  };

  function foodPrevious(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    document.getElementById("demograhpic").style.display = "block";
    document.getElementById("foodtable").style.display = "none";
    document.getElementById("foodBackBtn").style.display = "none";
    
  };


  function displayDemographic(){
    document.getElementById("demograhpic").style.display = "block";
    document.getElementById("foodtable").style.display = "none";
    document.getElementById("foodBackBtn").style.display = "none";
  };
  
function saveData () {
 
    localStorage.removeItem("demoData");
  
    localStorage.setItem("demoData", JSON.stringify(demoData))
    loadFood()
  };
  

    function loadFood() {

        updatedFood = JSON.parse(localStorage.getItem("demoData"));
    
        for (let i = 0; i < updatedFood.length; i++) {
     
        var element = updatedFood[updatedFood.length-1];
        
        // newFood.push(element);
      
    
        
       
            document.getElementById("infants").value= element.infants;
            document.getElementById("kids").value= element.kids;
            document.getElementById("adults").value= element.adults;
    
            document.getElementById("dogs").value= element.dogs;
            document.getElementById("cats").value= element.cats;
            document.getElementById("pets").value= element.pets;

        };
        refreshpageFood()
  };
  loadFood()
  // location.reload();

  
  
    

//Infants Value Change buttons Function 
function increaseInfants() {
  var input = document.getElementById("infants");
  input.value = parseInt(input.value) + 1;
  saveFood()
}

function decreaseInfants() {
  var input = document.getElementById("infants");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveFood()
};

//Kids Value Change buttons Function 
function increaseKids() {
  var input = document.getElementById("kids");
  input.value = parseInt(input.value) + 1;
  saveFood()
}


function decreaseKids() {
  var input = document.getElementById("kids");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveFood()
};

//adults Value Change buttons Function 
function increaseAdults() {
  var input = document.getElementById("adults");
  input.value = parseInt(input.value) + 1;
  saveFood()
}

function decreaseAdults() {
  var input = document.getElementById("adults");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveFood()
};

//dogs Value Change buttons Function 
function increaseDogs() {
  var input = document.getElementById("dogs");
  input.value = parseInt(input.value) + 1;
  saveFood()
}

function decreaseDogs() {
  var input = document.getElementById("dogs");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveFood()
};


//cats Value Change buttons Function 
function increaseCats() {
  var input = document.getElementById("cats");
  input.value = parseInt(input.value) + 1;
  saveFood()
}

function decreaseCats() {
  var input = document.getElementById("cats");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveFood()
};

//other pets Value Change buttons Function 
function increaseOthers() {
  var input = document.getElementById("pets");
  input.value = parseInt(input.value) + 1;
  saveFood()
}

function decreaseOthers() {
  var input = document.getElementById("pets");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveFood()
};

  
  function downloadCheckList() {
   
// Checkboxes for Checked off list
water2Check = document.getElementById("water2Check").checked
pMedCheck = document.getElementById("pMedCheck").checked
famDocCheck = document.getElementById("famDocCheck").checked
cashCheck = document.getElementById("cashCheck").checked
diapersCheck = document.getElementById("diapersCheck").checked
fireCheck = document.getElementById("fireCheck").checked
matchCheck = document.getElementById("matchCheck").checked
diapersCheck = document.getElementById("diapersCheck").checked
femCheck = document.getElementById("femCheck").checked
cupsCheck = document.getElementById("cupsCheck").checked
plasticCheck = document.getElementById("plasticCheck").checked
messKitCheck = document.getElementById("messKitCheck").checked
paperTowelsCheck = document.getElementById("paperTowelsCheck").checked
canOpenerCheck = document.getElementById("canOpenerCheck").checked
dustMaskCheck = document.getElementById("dustMaskCheck").checked
towelettesCheck = document.getElementById("towelettesCheck").checked
sanitationCheck = document.getElementById("sanitationCheck").checked
flashlightCheck = document.getElementById("flashlightCheck").checked
kidFunCheck = document.getElementById("kidFunCheck").checked
weatherRadioCheck = document.getElementById("weatherRadioCheck").checked
radioCheck = document.getElementById("radioCheck").checked
pliersCheck = document.getElementById("pliersCheck").checked
// catFoodCheck = document.getElementById("catFoodCheck").checked
// otherPetCheck = document.getElementById("otherPetCheck").checked

  //Object for food supply check list
  var addCheckDataObj = {
  
    //Lis of Checkboxes
    water2Check: water2Check,
    pMedCheck: pMedCheck, 
    famDocCheck: famDocCheck,
    cashCheck: cashCheck,
    fireCheck: fireCheck,
    matchCheck: matchCheck,
    diapersCheck: diapersCheck,
    femCheck: femCheck,
    cupsCheck: cupsCheck,
    plasticCheck: plasticCheck,
    messKitCheck: messKitCheck,
    paperTowelsCheck: paperTowelsCheck,
    canOpenerCheck: canOpenerCheck,
    dustMaskCheck: dustMaskCheck,
    towelettesCheck: towelettesCheck,
    sanitationCheck: sanitationCheck,
    flashlightCheck: flashlightCheck,
    kidFunCheck: kidFunCheck,
    weatherRadioCheck: weatherRadioCheck,
    radioCheck: radioCheck,
    pliersCheck: pliersCheck,
  
  
  };
  
    
  addList.push(addCheckDataObj)
  
  addCheckList()
  console.log(addlist)
}

function addCheckList(){

  localStorage.setItem("addList", JSON.stringify(addList))
}

// save data to local storage and update table
function loadSaveList (){
  

  addNew = JSON.parse(localStorage.getItem("addList"));
  
        for (let i = 0; i < addNew.length; i++) {
     
        var element = addNew[addNew.length-1];
        console.log(element)
        // newFood.push(element);
      
     
            document.getElementById("water2Check").checked = element.water2Check;
            document.getElementById("pMedCheck").checked = element.pMedCheck;
            document.getElementById("famDocCheck").checked = element.famDocCheck;
            document.getElementById("cashCheck").checked = element.cashCheck;
            document.getElementById("diapersCheck").checked = element.diapersCheck;
            document.getElementById("fireCheck").checked = element.fireCheck;
            document.getElementById("matchCheck").checked = element.matchCheck;
            document.getElementById("diapersCheck").checked = element.diapersCheck;
            document.getElementById("femCheck").checked = element.femCheck;
            document.getElementById("cupsCheck").checked = element.cupsCheck;
            document.getElementById("plasticCheck").checked = element.plasticCheck;
            document.getElementById("messKitCheck").checked = element.messKitCheck;
            document.getElementById("paperTowelsCheck").checked = element.paperTowelsCheck;
            document.getElementById("canOpenerCheck").checked = element.canOpenerCheck;
            document.getElementById("towelettesCheck").checked = element.towelettesCheck;
            document.getElementById("sanitationCheck").checked = element.sanitationCheck;
            document.getElementById("flashlightCheck").checked = element.flashlightCheck;
            document.getElementById("kidFunCheck").checked = element.kidFunCheck;
            document.getElementById("weatherRadioCheck").checked = element.weatherRadioCheck;
            document.getElementById("radioCheck").checked = element.radioCheck;
            document.getElementById("pliersCheck").checked = element.pliersCheck;
            document.getElementById("dustMaskCheck").checked = element.dustMaskCheck;
            // document.getElementById("crackCheck").checked = element.crackCheck;
            // document.getElementById("juiceCheck").checked = element.juiceCheck;
    
          }
    
}

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
       filename:     'My_Additonal_Supplies.pdf',
       image:        { type: 'pdf', quality: 0.98 },
       html2canvas:  { scale: 2, scrollY: 0 },
       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
     };

     // New Promise-based usage:
     html2pdf().set(opt).from(element).save();

     // Avoid page-breaks on all elements, and add one before #page2el.
      html2pdf().set({
        pagebreak: { mode: 'avoid-all', after: '#page2el' }
      });

    });

 });
//download PDF code ends

   function giveFeedback (){

    window.location.href="./feedback.html";

  };


// Load data on refresh
refreshpageFood()
loadSaveList () 
saveFood()


function updateCards(){

  //go to View Plan
 window.location.href="./dashboard Main.html";
 
 };