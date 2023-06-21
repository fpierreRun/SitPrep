var demoData = [];
var newFood = [];
var foodList = [];

var selectElements = document.querySelectorAll("select");
selectElements.forEach(function(selectElement) {
  selectElement.addEventListener("change", function() {
    selectElement.classList.add("orgOppate");
    selectElement.classList.add("text-success");
  });
});




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
  

  var cmfOptions = document.getElementsByClassName("cmf");
  var cmnOptions = document.getElementsByClassName("cmn");
  var cmgOptions = document.getElementsByClassName("cmg");
  var tunaOptions = document.getElementsByClassName("tuna");
  var chilliOptions = document.getElementsByClassName("chilli");
  var beefOptions = document.getElementsByClassName("beef");
  var ravioliOptions = document.getElementsByClassName("ravioli");
  var tofuOptions = document.getElementsByClassName("tofu");

  updatedFood = JSON.parse(localStorage.getItem("demoData"));

  for (let i = 0; i < updatedFood.length; i++) {

    var element = updatedFood[updatedFood.length-1];
  }

  var adultsCount = element.adults;
  var kidsCount = element.kids * .5;
  

  // Reset the ingredient values
  var granolaValue = 0;
  var milkValue = 0;
  var fruitValue = 0;
  var nutsValue = 0;
  var barsValue = 0;
  var tunaValue = 0;
  var juiceValue = 0;
  var crackersValue = 0;
  var vegValue = 0;
  var chilliValue = 0;
  var beefValue = 0;
  var ravioliValue = 0;
  var tofuValue = 0;


// Check if any "select" option is selected
var isSelectSelected = false;

// Iterate through each selected option
for (var i = 0; i < cmfOptions.length; i++) {
  var option = cmfOptions[i];
  if (option.value === "Cereal with Milk and Fruit" && option.selected) {
    isSelectSelected = true;
    granolaValue += 1;
    milkValue += 1;
    fruitValue += 0.5;
  }
}

for (var i = 0; i < cmnOptions.length; i++) {
  var option = cmnOptions[i];
  if (option.value === "Cereal with Milk, Fruit, and Nuts" && option.selected) {
    isSelectSelected = true;
    granolaValue += 1;
    milkValue += 1;
    fruitValue += 0.5;
    nutsValue += 0.25;
  }
}

for (var i = 0; i < cmgOptions.length; i++) {
  var option = cmgOptions[i];
  if (option.value === "Cereal with Milk, Fruit, and Granola Bar" && option.selected) {
    isSelectSelected = true;
    granolaValue += 1;
    milkValue += 1;
    fruitValue += 0.5;
    barsValue += 1;
  }
 
}

for (var i = 0; i < tunaOptions.length; i++) {
  var option = tunaOptions[i];
  if (option.value === "Tuna and Crackers Combo" && option.selected) {
    isSelectSelected = true;
    tunaValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
 
}

for (var i = 0; i < chilliOptions.length; i++) {
  var option = chilliOptions[i];
  if (option.value === "Chilli and Crackers Delight" && option.selected) {
    isSelectSelected = true;
    chilliValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}

for (var i = 0; i < beefOptions.length; i++) {
  var option = beefOptions[i];
  if (option.value === "Beef Stew and Crackers Combo" && option.selected) {
    isSelectSelected = true;
    beefValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}

for (var i = 0; i < ravioliOptions.length; i++) {
  var option = ravioliOptions[i];
  if (option.value === "Beef Stew and Crackers Combo" && option.selected) {
    isSelectSelected = true;
    ravioliValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}

for (var i = 0; i < tofuOptions.length; i++) {
  var option = tofuOptions[i];
  if (option.value === "Tofu with Veggies and Crackers" && option.selected) {
    isSelectSelected = true;
    tofuValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}







// Update the ingredient values or display nothing
document.getElementById("granola").textContent = isSelectSelected ? (granolaValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("milk").textContent = isSelectSelected ? (milkValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("fruit").textContent = isSelectSelected ? (fruitValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("nuts").textContent = isSelectSelected ? (nutsValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("bars").textContent = isSelectSelected ? (barsValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("tuna").textContent = isSelectSelected ? (tunaValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("crackers").textContent = isSelectSelected ? (crackersValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("juice").textContent = isSelectSelected ? (juiceValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("veg").textContent = isSelectSelected ? (vegValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("chilli").textContent = isSelectSelected ? (chilliValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("beef").textContent = isSelectSelected ? (beefValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("ravioli").textContent = isSelectSelected ? (ravioliValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("tofu").textContent = isSelectSelected ? (tofuValue) * ((adultsCount)+(kidsCount)) : "";
loadDemo()
}



function updateIngredients(){
  
  
  var cmfOptions = document.getElementsByClassName("cmf");
  var cmnOptions = document.getElementsByClassName("cmn");
  var cmgOptions = document.getElementsByClassName("cmg");
  var tunaOptions = document.getElementsByClassName("tuna");
  var chilliOptions = document.getElementsByClassName("chilli");
  var beefOptions = document.getElementsByClassName("beef");
  var ravioliOptions = document.getElementsByClassName("ravioli")
  var tofuOptions = document.getElementsByClassName("tofu")

  updatedFood = JSON.parse(localStorage.getItem("demoData"));

  for (let i = 0; i < updatedFood.length; i++) {

    var element = updatedFood[updatedFood.length-1];
    
    // newFood.push(element);
  
  
    
   
        document.getElementById("infants").value= element.infants;
        document.getElementById("kids").value= element.kids;
        document.getElementById("adults").value= element.adults;
  }


  var adultsCount = parseFloat(document.getElementById("adults").value);
  var kidsCount = parseFloat(document.getElementById("kids").value) * .5;
 
 

  var gowValue = parseFloat(document.getElementById("gow").innerHTML);
  var milkValue = parseFloat(document.getElementById("milk").innerHTML);
  var fruitValue = parseFloat(document.getElementById("fruit").innerHTML);
  var granolaValue = parseFloat(document.getElementById("granola").innerHTML);
  var nutsValue = parseFloat(document.getElementById("nuts").innerHTML);
  var barsValue = parseFloat(document.getElementById("bars").innerHTML);
  var tunaValue = parseFloat(document.getElementById("tuna").innerHTML);
  var crackersValue = parseFloat(document.getElementById("crackers").innerHTML);
  var juiceValue = parseFloat(document.getElementById("juice").innerHTML);
  var vegValue = parseFloat(document.getElementById("veg").innerHTML);
  var chilliValue = parseFloat(document.getElementById("chilli").innerHTML);
  var beefValue = parseFloat(document.getElementById("beef").innerHTML);
  var ravioliValue = parseFloat(document.getElementById("ravioli").innerHTML);
  var beefValue = parseFloat(document.getElementById("beef").innerHTML);
  var tofuValue = parseFloat(document.getElementById("tofu").innerHTML);





   // Reset the ingredient values
   var gowValue = 0;
  var granolaValue = 0;
  var milkValue = 0;
  var fruitValue = 0;
  var nutsValue = 0;
  var barsValue = 0;
   var tunaValue = 0;
   var crackersValue = 0;
   var juiceValue = 0;
   var vegValue = 0;
   var chilliValue = 0;
   var beefValue = 0;
   var ravioliValue = 0;
   var tofuValue = 0;

  // Check if any "select" option is selected
var isSelectSelected = false;

// Iterate through each selected option
for (var i = 0; i < cmfOptions.length; i++) {
  var option = cmfOptions[i];
  if (option.value === "Cereal with Milk and Fruit" && option.selected) {
    isSelectSelected = true;
    granolaValue += 1;
    milkValue += 1;
    fruitValue += 0.5;
  }
 
}

for (var i = 0; i < cmnOptions.length; i++) {
  var option = cmnOptions[i];
  if (option.value === "Cereal with Milk, Fruit, and Nuts" && option.selected) {
    isSelectSelected = true;
    granolaValue += 1;
    milkValue += 1;
    fruitValue += 0.5;
    nutsValue += 0.25;
  }
 
}

for (var i = 0; i < cmgOptions.length; i++) {
  var option = cmgOptions[i];
  if (option.value === "Cereal with Milk, Fruit, and Granola Bar" && option.selected) {
    isSelectSelected = true;
    granolaValue += 1;
    milkValue += 1;
    fruitValue += 0.5;
    barsValue += 1;
  }
 
}

for (var i = 0; i < tunaOptions.length; i++) {
  var option = tunaOptions[i];
  if (option.value === "Tuna and Crackers Combo" && option.selected) {
    isSelectSelected = true;
    tunaValue +=  1;
    crackersValue += 0.5;
    vegValue += 0.5;
    juiceValue += 1;
  }
 
}

for (var i = 0; i < chilliOptions.length; i++) {
  var option = chilliOptions[i];
  if (option.value === "Chilli and Crackers Delight" && option.selected) {
    isSelectSelected = true;
    chilliValue +=  1;
    crackersValue += 0.5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
 
}

for (var i = 0; i < beefOptions.length; i++) {
  var option = beefOptions[i];
  if (option.value === "Beef Stew and Crackers Combo" && option.selected) {
    isSelectSelected = true;
    beefValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}


for (var i = 0; i < ravioliOptions.length; i++) {
  var option = ravioliOptions[i];
  if (option.value === "Ravioli with Fruits and Crackers" && option.selected) {
    isSelectSelected = true;
    ravioliValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}

for (var i = 0; i < tofuOptions.length; i++) {
  var option = tofuOptions[i];
  if (option.value === "Ravioli with Fruits and Crackers" && option.selected) {
    isSelectSelected = true;
    tofuValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}

for (var i = 0; i < tofuOptions.length; i++) {
  var option = tofuOptions[i];
  if (option.value === "Tofu with Veggies and Crackers" && option.selected) {
    isSelectSelected = true;
    tofuValue +=  1;
    crackersValue += .5;
    fruitValue += 0.5;
    juiceValue += 1;
  }
}







// Update the ingredient values or display nothing


document.getElementById("granola").textContent = isSelectSelected ? (granolaValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("milk").textContent = isSelectSelected ? (milkValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("fruit").textContent = isSelectSelected ? (fruitValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("nuts").textContent = isSelectSelected ? (nutsValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("bars").textContent = isSelectSelected ? (barsValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("tuna").textContent = isSelectSelected ? (tunaValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("crackers").textContent = isSelectSelected ? (crackersValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("juice").textContent = isSelectSelected ? (juiceValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("veg").textContent = isSelectSelected ? (vegValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("chilli").textContent = isSelectSelected ? (chilliValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("beef").textContent = isSelectSelected ? (beefValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("ravioli").textContent = isSelectSelected ? (ravioliValue) * ((adultsCount)+(kidsCount)) : "";
document.getElementById("tofu").textContent = isSelectSelected ? (tofuValue) * ((adultsCount)+(kidsCount)) : "";
// loadDemo()
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

  function saveData() {
 
    localStorage.setItem("demoData", JSON.stringify(demoData))
    
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

   function giveFeedback(){

    window.location.href="./feedback.html";

  };

  function displayrows(){
   // Get all the table rows
const tableRows = document.querySelectorAll("table tbody tr");

// Loop through each row
tableRows.forEach((row) => {
  // Get the quantity cell in the current row
  const quantityCell = row.querySelector("td.h5");
  
  // Get the quantity value
  const quantityValue = parseFloat(quantityCell.textContent);
  
  // Check if the quantity value is higher than 0
  if (quantityValue > 0) {
    // Display the row
    row.style.display = "";
  } else {
    // Hide the row
    row.style.display = "none";
  }
});
}

