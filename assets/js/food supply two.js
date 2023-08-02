// Get the "Select All" checkbox and all the individual item checkboxes
const selectAllCheckbox = document.getElementById("checkAll");
const itemCheckboxes = document.querySelectorAll(".rounded.shadow[type='checkbox']");

// Add an event listener to the "Select All" checkbox
selectAllCheckbox.addEventListener("change", function () {
    // When the "Select All" checkbox is checked, check all the item checkboxes
    itemCheckboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox.checked;
    });
});

// Add event listeners to the item checkboxes
itemCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        // If any item checkbox is unchecked, uncheck the "Select All" checkbox
        if (!this.checked) {
            selectAllCheckbox.checked = false;
        }
    });
});



var foodList = [];

// Retrieve the stored object from local storage
var storedObject = localStorage.getItem('mealOptions');

// Check if the stored object exists
if (storedObject) {
  // Parse the stored object from JSON back to JavaScript object
  var mealOptions = JSON.parse(storedObject);

  // Access the meal options for each day
  var day1Breakfast = mealOptions.day1.breakfast;
  var day1Lunch = mealOptions.day1.lunch;
  var day1Dinner = mealOptions.day1.dinner;
  var day1Snack = mealOptions.day1.snack;

  var day2Breakfast = mealOptions.day2.breakfast;
  var day2Lunch = mealOptions.day2.lunch;
  var day2Dinner = mealOptions.day2.dinner;
  var day2Snack = mealOptions.day2.snack;

  var day3Breakfast = mealOptions.day3.breakfast;
  var day3Lunch = mealOptions.day3.lunch;
  var day3Dinner = mealOptions.day3.dinner;
  var day3Snack = mealOptions.day3.snack;

  // Update the content of the HTML elements
  document.getElementById('day1-breakfast-select').value = day1Breakfast;
  document.getElementById('day1-lunch-select').value = day1Lunch;
  document.getElementById('day1-dinner-select').value = day1Dinner;
  document.getElementById('day1-snack-select').value = day1Snack;

  document.getElementById('day2-breakfast-select').value = day2Breakfast;
  document.getElementById('day2-lunch-select').value = day2Lunch;
  document.getElementById('day2-dinner-select').value = day2Dinner;
  document.getElementById('day2-snack-select').value = day2Snack;

  document.getElementById('day3-breakfast-select').value = day3Breakfast;
  document.getElementById('day3-lunch-select').value = day3Lunch;
  document.getElementById('day3-dinner-select').value = day3Dinner;
  document.getElementById('day3-snack-select').value = day3Snack;

}


function showIngredients(day, meal) {
  const selectElement = document.getElementById(`${day}-${meal}-select`);
  const ingredientsElement = document.getElementById(`${day}-${meal}-ingredients`);
  const optionValue = selectElement.value;
  let ingredients = '';

  switch (optionValue) {
    case 'Cereal with Milk and Fruit':
      ingredients = 'Cereal, Milk, Fruit';
      break;
    case 'Cereal with Milk, Fruit, and Nuts':
      ingredients = 'Cereal, Milk, Fruit, Nuts';
      break;
    case 'Cereal with Milk, Fruit, and Granola Bar':
      ingredients = 'Cereal, Milk, Fruit, Granola Bar';
      break;
    case 'Cereal with Milk, Fruit, and Peanut Butter':
      ingredients = 'Cereal, Milk, Fruit, Peanut Butter';
      break;
    case 'Tuna and Crackers Combo':
      ingredients = 'Tuna, Crackers, Fruit or Vegetables';
      break;
    case 'Chilli and Crackers':
      ingredients = 'Chilli, Crackers, Fruit or Vegetables';
      break;
    case 'Beef Stew and Crackers Combo':
      ingredients = 'Beef Stew, Crackers, Fruit or Vegetables';
      break;
    case 'Tofu with Veggies and Crackers':
      ingredients = 'Tofu, Veggies, Crackers';
      break;
    case 'Ravioli with Veggies and Crackers':
      ingredients = 'Ravioli, Veggies, Crackers';
      break;
    case 'Protein with Veggies and Granola Bar':
      ingredients = 'Protein, Veggies, Granola Bar';
      break;
    case 'Protein with Veggies and Peanut Butter':
      ingredients = 'Protein, Veggies, Peanut Butter';
      break;
    case 'Granola Bar':
      ingredients = 'Granola Bar';
      break;
    case 'Nuts or Dried Fruits':
      ingredients = 'Nuts or Dried Fruits';
      break;
    case 'Crackers':
      ingredients = 'Crackers';
      break;
    case 'Peanut Butter and Crackers':
      ingredients = 'Peanut Butter, Crackers';
      break;
    default:
      ingredients = '';
      break;
  }

  if (meal === 'lunch' || meal === 'dinner') {
    ingredients += ', Juice';
  }

  ingredientsElement.textContent = optionValue !== '' ? `Ingredients: ${ingredients}` : '';
}



function downloadCheckList() {
  var checkboxes = [
    "waterCheck", "tunaCheck", "chilliCheck", "beefCheck", "ravioliCheck", 
    "tofuCheck", "vegCheck", "fruitCheck", "nutsCheck", "barsCheck", "pbCheck", "milkCheck", "granolaCheck", "crackCheck", "juiceCheck", "snacksCheck", "aVitaminsCheck", 
    "kVitaminsCheck", "babyFormulaCheck", "babyFoodCheck", "dogFoodCheck", 
    "catFoodCheck", "otherPetCheck"
  ];

  var foodCheckDataObj = {};

  // Loop through the checkboxes and check if they are checked
  checkboxes.forEach((checkboxId) => {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox) {
      foodCheckDataObj[checkboxId] = checkbox.checked;
    } else {
      console.warn(`Checkbox with ID "${checkboxId}" not found.`);
    }
  });

  console.log(foodCheckDataObj);

  // Assuming you have defined foodList as an array elsewhere in your code
  foodList.push(foodCheckDataObj);

  // Assuming you have defined storeFoodList() function elsewhere in your code
  storeFoodList();
}
  

function storeFoodList() {
  localStorage.setItem("foodList", JSON.stringify(foodList));
}

function loadSaveList() {
  const foodListNew = JSON.parse(localStorage.getItem("foodList"));
  
  for (let i = 0; i < foodListNew.length; i++) {
     
    var element = foodListNew[foodListNew.length-1];
    
    // newFood.push(element);
  
 
        document.getElementById("waterCheck").checked = element.waterCheck;
        document.getElementById("tunaCheck").checked = element.tunaCheck;
        document.getElementById("fruitCheck").checked = element.fruitCheck;
        document.getElementById("pbCheck").checked = element.pbCheck;
        document.getElementById("milkCheck").checked = element.milkCheck;
        document.getElementById("chilliCheck").checked = element.chilliCheck;
        document.getElementById("beefCheck").checked = element.beefCheck;

        document.getElementById("ravioliCheck").checked = element.ravioliCheck;
        document.getElementById("tofuCheck").checked = element.tofuCheck;
        document.getElementById("beefCheck").checked = element.beefCheck;
        document.getElementById("vegCheck").checked = element.vegCheck;

        document.getElementById("nutsCheck").checked = element.nutsCheck;
        document.getElementById("barsCheck").checked = element.barsCheck;

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
loadSaveList () 


// Function to store the selected meal options in local storage
function storeMealOptions() {


  const selectedOptions = {
    day1: {
      breakfast: document.getElementById('day1-breakfast-select').value,
      lunch: document.getElementById('day1-lunch-select').value,
      dinner: document.getElementById('day1-dinner-select').value,
      snack: document.getElementById('day1-snack-select').value
    },
    day2: {
      breakfast: document.getElementById('day2-breakfast-select').value,
      lunch: document.getElementById('day2-lunch-select').value,
      dinner: document.getElementById('day2-dinner-select').value,
      snack: document.getElementById('day2-snack-select').value
    },
    day3: {
      breakfast: document.getElementById('day3-breakfast-select').value,
      lunch: document.getElementById('day3-lunch-select').value,
      dinner: document.getElementById('day3-dinner-select').value,
      snack: document.getElementById('day3-snack-select').value
    }
  };
console.log(selectedOptions)
  // Store the selected options in local storage
  localStorage.setItem('mealOptions', JSON.stringify(selectedOptions));
}

// Call the storeMealOptions function whenever a meal option is selected
const selectMeals = document.getElementsByTagName('select');
for (let i = 0; i < selectMeals.length; i++) {
  selectMeals[i].addEventListener('change', storeMealOptions);
  
}


function updateCards(){

 //go to View Plan
window.location.href="./dashboard Main.html";

};

