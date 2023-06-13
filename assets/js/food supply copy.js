var demoData = [];
var newFood = [];
var foodList = [];

function showIngredients(day, mealType) {
  var selectElement = document.getElementById(day + '-' + mealType + '-select');
  var ingredientElement = document.getElementById(day + '-' + mealType + '-ingredients');
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;

  // Define the ingredients based on the selected option
  var ingredients = '';
  switch (selectedOption) {
    case 'Cereal with Milk and Fruit':
      ingredients = 'Ingredients: dry cereal or granola, non-perishable pasteurized milk, canned fruit';
      break;
    case 'Cereal with Milk, Fruit, and Nuts':
      ingredients = 'Ingredients: dry cereal or granola, non-perishable pasteurized milk, canned fruit, nuts or dried fruits';
      break;
    case 'Cereal with Milk, Fruit, and Granola Bar':
      ingredients = 'Ingredients: dry cereal or granola, non-perishable pasteurized milk, canned fruit, granola bar';
      break;
    case 'Tuna and Crackers Combo':
      ingredients = 'Ingredients: canned protein (e.g., tuna or chicken), crackers, canned fruit or vegetables';
      break;
    case 'Chilli and Crackers Delight':
      ingredients = 'Ingredients: canned protein (e.g., salmon or chili), crackers, canned fruit or vegetables';
      break;
    case 'Beef Stew and Crackers Combo':
      ingredients = 'Ingredients: canned protein (e.g., chicken or beef stew), crackers, canned fruit or vegetables';
      break;
    case 'Tofu with Veggies and Crackers':
      ingredients = 'Ingredients: canned protein (e.g., beef stew or tofu), canned vegetables, crackers';
      break;
    case 'Ravioli with Veggies and Crackers':
      ingredients = 'Ingredients: canned protein (e.g., ravioli or spam corned beef), canned vegetables, crackers';
      break;
    case 'Protein with Veggies and Granola Bar':
      ingredients = 'Ingredients: canned protein (e.g., tuna or tofu), canned vegetables, granola bar';
      break;
    default:
      ingredients = '';
      break;
  }

  // Update the ingredient element
  ingredientElement.textContent = ingredients;
}

function checkLocal() {

  demoDataNew = JSON.parse(localStorage.getItem("demoData"));

  if(!demoDataNew){

      saveDemo()
      loadSaveList () 
      refreshpageFood()
       

  
 };
};
 checkLocal()


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
      document.getElementById("others").value= element.others;
      
      var infants = document.getElementById("infants").value
      var kids = document.getElementById("kids").value
      var adults = document.getElementById("adults").value

      var dogs = document.getElementById("dogs").value
      var cats = document.getElementById("cats").value
      var others = document.getElementById("others").value
    
      // Food Supply
      var gallon = ((~~kids)+(~~adults))*3
      var meat = ((~~kids*1)+(~~adults*2))*3
      var fruit = ((~~kids*1)+(~~adults*2))*3
      var juice = ((~~kids*8)+(~~adults*24))*3
      var milk = ((~~kids*8)+(~~adults*24))*3
      var snacks = ((~~kids*3)+(~~adults*9))*3
      var aVitamins = (~~adults)*3
      var kVitamins = (~~kids)*3
      var babyFood = (~~infants)
      var babyFormula = (~~infants)
      var dogFood = (~~dogs)
      var catFood = (~~cats)
      var otherPet = (~~others)

      // Addotional Supplies
      // var diapers = (~~infants)*3
      
      // Update Food Tables
      function updateTable() {
          document.getElementById("gow").innerHTML= gallon;
          document.getElementById("meat").innerHTML= meat;
          document.getElementById("fruit").innerHTML= fruit;
          document.getElementById("juice").innerHTML= juice;
          document.getElementById("milk").innerHTML= milk;
          document.getElementById("snacks").innerHTML= snacks;
          document.getElementById("aVitamins").innerHTML= aVitamins;
          document.getElementById("kVitamins").innerHTML= kVitamins;
          document.getElementById("babyFormula").innerHTML= babyFormula;
          document.getElementById("babyFood").innerHTML= babyFood;
          document.getElementById("dogFood").innerHTML= dogFood;
          document.getElementById("catFood").innerHTML= catFood;
          document.getElementById("otherPet").innerHTML= otherPet;

      };
      updateTable()
      
    };
  
  };
     



//Saving food supply info

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
        refreshpageFood()
  };
  loadDemo()
  // location.reload();

  
  // Load data on refresh

refreshpageFood()
loadSaveList () 
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





  function downloadCheckList() {
   
// Checkboxes for Checked off list
waterCheck = document.getElementById("waterCheck").checked
meatCheck = document.getElementById("meatCheck").checked
fruitCheck = document.getElementById("fruitCheck").checked
pbCheck = document.getElementById("pbCheck").checked
crackCheck = document.getElementById("crackCheck").checked
juiceCheck = document.getElementById("juiceCheck").checked
milkCheck = document.getElementById("milkCheck").checked
snacksCheck = document.getElementById("snacksCheck").checked
cerealCheck = document.getElementById("cerealCheck").checked
aVitaminsCheck = document.getElementById("aVitaminsCheck").checked
kVitaminsCheck = document.getElementById("kVitaminsCheck").checked
babyFormulaCheck = document.getElementById("babyFormulaCheck").checked
babyFoodCheck = document.getElementById("babyFoodCheck").checked
dogFoodCheck = document.getElementById("dogFoodCheck").checked
catFoodCheck = document.getElementById("catFoodCheck").checked
otherPetCheck = document.getElementById("otherPetCheck").checked

  //Object for food supply check list
  var foodCheckDataObj = {
  
    //List of Checkboxes
    waterCheck: waterCheck,
    meatCheck: meatCheck, 
    fruitCheck: fruitCheck,
    pbCheck: pbCheck,
    milkCheck: milkCheck,
    snacksCheck: snacksCheck,
    cerealCheck: cerealCheck,
    aVitaminsCheck: aVitaminsCheck,
    kVitaminsCheck: kVitaminsCheck,
    babyFormulaCheck: babyFormulaCheck,
    babyFoodCheck: babyFoodCheck,
    dogFoodCheck: dogFoodCheck,
    catFoodCheck: catFoodCheck,
    otherPetCheck: otherPetCheck,
    crackCheck: crackCheck,
    juiceCheck: juiceCheck,
  
  };
  
    
  foodList.push(foodCheckDataObj)
  
  storeFoodList ()
}

function storeFoodList (){

  localStorage.setItem("foodList", JSON.stringify(foodList))
}

// save data to local storage and update table
function loadSaveList (){
  

  foodListNew = JSON.parse(localStorage.getItem("foodList"));
  
        for (let i = 0; i < foodListNew.length; i++) {
     
        var element = foodListNew[foodListNew.length-1];
        
        // newFood.push(element);
      
     
            document.getElementById("waterCheck").checked = element.waterCheck;
            document.getElementById("meatCheck").checked = element.meatCheck;
            document.getElementById("fruitCheck").checked = element.fruitCheck;
            document.getElementById("pbCheck").checked = element.pbCheck;
            document.getElementById("milkCheck").checked = element.milkCheck;
            document.getElementById("snacksCheck").checked = element.snacksCheck;
            document.getElementById("cerealCheck").checked = element.cerealCheck;
            document.getElementById("aVitaminsCheck").checked = element.aVitaminsCheck;
            document.getElementById("kVitaminsCheck").checked = element.kVitaminsCheck;
            document.getElementById("babyFormulaCheck").checked = element.babyFormulaCheck;
            document.getElementById("babyFoodCheck").checked = element.babyFoodCheck;
            document.getElementById("dogFoodCheck").checked = element.dogFoodCheck;
            document.getElementById("catFoodCheck").checked = element.catFoodCheck;
            document.getElementById("otherPetCheck").checked = element.otherPetCheck;
            document.getElementById("crackCheck").checked = element.crackCheck;
            document.getElementById("juiceCheck").checked = element.juiceCheck;
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






