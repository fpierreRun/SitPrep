var demoData = [];
var newFood = [];
var foodList = [];




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




function inputIngredients(day, meal) {


  var selectedOptions = document.getElementsByClassName("cmf");
  updatedFood = JSON.parse(localStorage.getItem("demoData"));

  for (let i = 0; i < updatedFood.length; i++) {

  var element = updatedFood[updatedFood.length-1];
  }

  var adultsCount = element.adults;
  

  // Reset the ingredient values
  var gowValue = 0;
  var milkValue = 0;
  var fruitValue = 0;

// Check if any "select" option is selected
var isSelectSelected = false;

// Iterate through each selected option
for (var i = 0; i < selectedOptions.length; i++) {
  var option = selectedOptions[i];
  if (option.value === "Cereal with Milk and Fruit" && option.selected) {
    isSelectSelected = true;
    gowValue += 1;
    milkValue += 8;
    fruitValue += 0.5;
  }
}

// Update the ingredient values or display nothing
document.getElementById("gow").textContent = isSelectSelected ? (gowValue * adultsCount) : "";
document.getElementById("milk").textContent = isSelectSelected ? (milkValue * adultsCount) : "";
document.getElementById("fruit").textContent = isSelectSelected ? (fruitValue * adultsCount) : "";
}



function updateIngredients() {
  // alert("Hello\nHow are you?")

  var selectedOptions = document.getElementsByClassName("select");
  updatedFood = JSON.parse(localStorage.getItem("demoData"));

  for (let i = 0; i < updatedFood.length; i++) {

    var element = updatedFood[updatedFood.length-1];
    
    // newFood.push(element);
  
  
    
   
        document.getElementById("infants").value= element.infants;
        document.getElementById("kids").value= element.kids;
        document.getElementById("adults").value= element.adults;
  }
  
  var adultsCount = parseFloat(document.getElementById("adults").value);
 
 

  var gowValue = parseFloat(document.getElementById("gow").innerHTML);
  var milkValue = parseFloat(document.getElementById("milk").innerHTML);
  var fruitValue = parseFloat(document.getElementById("fruit").innerHTML);

   // Reset the ingredient values
  var gowValue = 0;
  var milkValue = 0;
  var fruitValue = 0;

  // Check if any "select" option is selected
var isSelectSelected = false;

// Iterate through each selected option
for (var i = 0; i < selectedOptions.length; i++) {
  var option = selectedOptions[i];
  if (option.value === "Cereal with Milk and Fruit" && option.selected) {
    isSelectSelected = true;
    gowValue += 1;
    milkValue += 8;
    fruitValue += 0.5;
  }
}

// Update the ingredient values or display nothing
document.getElementById("gow").textContent = isSelectSelected ? (gowValue * adultsCount) : "";
document.getElementById("milk").textContent = isSelectSelected ? (milkValue * adultsCount) : "";
document.getElementById("fruit").textContent = isSelectSelected ? (fruitValue * adultsCount) : "";
}




function saveDemo() {
  
  infants = document.getElementById("infants").value
  adults = document.getElementById("adults").value
  kids = document.getElementById("kids").value
  dogs = document.getElementById("dogs").value
  cats = document.getElementById("cats").value
  others = document.getElementById("others").value

  //Object for form data
  var demoDataObj = {

    //Household Demographic
    infants: infants,
    adults: adults, 
    kids: kids,

      //  Pets
      dogs: dogs,
      cats: cats,
      others: others,

  };
  console.log(demoDataObj);

  demoData.push(demoDataObj);

  localStorage.removeItem("demoData");
  saveData();
  
};


function checkLocal() {

  demoDataNew = JSON.parse(localStorage.getItem("demoData"));

  if(!demoDataNew){

      saveDemo()
     
      refreshpageFood()
       

  
 };
};
 checkLocal()


function refreshpageFood() {
  // location.reload()
  
      
    };
  
 



//Saving food supply info

// function saveDemo() {
  
    
//     showIngredients(day, meal)
//   };
 
 

 

  function displayDemographic(){
    document.getElementById("demograhpic").style.display = "block";
    document.getElementById("foodtable").style.display = "none";
    document.getElementById("foodBackBtn").style.display = "none";
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
    document.getElementById("demograhpic").style.display = "none";
    document.getElementById("foodtable").style.display = "block";
    document.getElementById("foodBackBtn").style.display = "block";
  };

  function saveData () {
 
    localStorage.setItem("demoData", JSON.stringify(demoData))
    loadDemo()
  };
  
 
    function loadDemo() {

        updatedFood = JSON.parse(localStorage.getItem("demoData"));
       
        for (let i = 0; i < updatedFood.length; i++) {
          
        var element = updatedFood[updatedFood.length-1];

      
        
        // newFood.push(element);
      
    
        
       
            document.getElementById("infants").value= element.infants;
            document.getElementById("kids").value= element.kids;
            document.getElementById("adults").value= element.adults;
    
            document.getElementById("dogs").value= element.dogs;
            document.getElementById("cats").value= element.cats;
            document.getElementById("others").value= element.others;

        };
        updateIngredients();
  };
  loadDemo()
  // location.reload();

  
  // Load data on refresh

refreshpageFood()

saveDemo()
  
    

//Infants Value Change buttons Function 
function increaseInfants() {
  var input = document.getElementById("infants");
  input.value = parseInt(input.value) + 1;
  saveDemo()
}

function decreaseInfants() {
  var input = document.getElementById("infants");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveDemo()
};

//Kids Value Change buttons Function 
function increaseKids() {
  var input = document.getElementById("kids");
  input.value = parseInt(input.value) + 1;
  saveDemo()
}


function decreaseKids() {
  var input = document.getElementById("kids");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveDemo()
};

//adults Value Change buttons Function 
function increaseAdults() {
  var input = document.getElementById("adults");
  input.value = parseInt(input.value) + 1;
  saveDemo()
}

function decreaseAdults() {
  var input = document.getElementById("adults");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveDemo()
};

//dogs Value Change buttons Function 
function increaseDogs() {
  var input = document.getElementById("dogs");
  input.value = parseInt(input.value) + 1;
  saveDemo()
}

function decreaseDogs() {
  var input = document.getElementById("dogs");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveDemo()
};


//cats Value Change buttons Function 
function increaseCats() {
  var input = document.getElementById("cats");
  input.value = parseInt(input.value) + 1;
  saveDemo()
}

function decreaseCats() {
  var input = document.getElementById("cats");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveDemo()
};

//other pets Value Change buttons Function 
function increaseOthers() {
  var input = document.getElementById("others");
  input.value = parseInt(input.value) + 1;
  saveDemo()
}

function decreaseOthers() {
  var input = document.getElementById("others");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
  saveDemo()
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
           filename:     'My_Food_Supply.pdf',
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

  



