var food = [];
var newFood = [];
var foodList = [];







//Saving food supply info

var saveFood = function () {

    
    infants = document.getElementById("infants").value
    adults = document.getElementById("adults").value
    kids = document.getElementById("kids").value
    dogs = document.getElementById("dogs").value
    cats = document.getElementById("cats").value
    others = document.getElementById("others").value
  
    //Object for form data
    var foodDataObj = {
  
      //Household Demographic
      infants: infants,
      adults: adults, 
      kids: kids,
  
        //  Pets
        dogs: dogs,
        cats: cats,
        others: others,
  
    };
    food.push(foodDataObj);
    saveData()
    

  };
 
  
  var saveData = function () {
 
    localStorage.removeItem("food");
  
    localStorage.setItem("food", JSON.stringify(food))
   

    var loadFood = function () {

        updatedFood = JSON.parse(localStorage.getItem("food"));
    
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
        
        };
      
    
    loadFood()
    location.reload();
  };
  

  var refreshpageFood = function () {

    updatedFood = JSON.parse(localStorage.getItem("food"));

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

        var gallon = ((~~kids)+(~~adults))*3
        var meat = ((~~kids*1)+(~~adults*2))*3
        var fruit = ((~~kids*1)+(~~adults*2))*3
        var juice = ((~~kids*8)+(~~adults*24))*3
        var milk = ((~~kids*8)+(~~adults*24))*3
        var snacks = ((~~kids*3)+(~~adults*9))*3
        var aVitamins = (~~adults)*3
        var kVitamins = (~~kids)*3
        var babyFood = (~~infants)*3
        var babyFormula = (~~infants)*3
        var dogFood = (~~dogs)*3
        var catFood = (~~cats)*3
        var otherPet = (~~others)*3

        
        function updateTable() {
        document.getElementById("gow").innerHTML= gallon;
        document.getElementById("meat").innerHTML= meat;
        document.getElementById("fruit").innerHTML= fruit;
        document.getElementById("juice").innerHTML= juice;
        document.getElementById("milk").innerHTML= milk;
        document.getElementById("snacks").innerHTML= snacks;
        document.getElementById("aVitamins").innerHTML= aVitamins;
        document.getElementById("kVitamins").innerHTML= kVitamins;
        document.getElementById("babyFood").innerHTML= babyFood;
        document.getElementById("dogFood").innerHTML= dogFood;
        document.getElementById("catFood").innerHTML= catFood;
        document.getElementById("otherPet").innerHTML= otherPet;
        };
        updateTable()
        
    };
    
    };
  
    

//Infants Value Change buttons Function 
function increaseInfants() {
  var input = document.getElementById("infants");
  input.value = parseInt(input.value) + 1;
}
function decreaseInfants() {
  var input = document.getElementById("infants");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
};

//Kids Value Change buttons Function 
function increaseKids() {
  var input = document.getElementById("kids");
  input.value = parseInt(input.value) + 1;
}
function decreaseKids() {
  var input = document.getElementById("kids");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
};

//adults Value Change buttons Function 
function increaseAdults() {
  var input = document.getElementById("adults");
  input.value = parseInt(input.value) + 1;
}
function decreaseAdults() {
  var input = document.getElementById("adults");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
};

//dogs Value Change buttons Function 
function increaseDogs() {
  var input = document.getElementById("dogs");
  input.value = parseInt(input.value) + 1;
}
function decreaseDogs() {
  var input = document.getElementById("dogs");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
};


//cats Value Change buttons Function 
function increaseCats() {
  var input = document.getElementById("cats");
  input.value = parseInt(input.value) + 1;
}
function decreaseCats() {
  var input = document.getElementById("cats");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
};

//other pets Value Change buttons Function 
function increaseOthers() {
  var input = document.getElementById("others");
  input.value = parseInt(input.value) + 1;
}
function decreaseOthers() {
  var input = document.getElementById("others");
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
};

  
  function saveCheckList() {
   
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
  
    //Lis of Checkboxes
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
      
        console.log(element)
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




// Load data on refresh

refreshpageFood()
loadSaveList () 

