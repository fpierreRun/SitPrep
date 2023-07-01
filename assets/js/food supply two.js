var foodList = [];


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
    case 'Chilli and Crackers Delight':
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
    "waterCheck", "meatCheck", "fruitCheck", "pbCheck", "crackCheck", 
    "juiceCheck", "milkCheck", "granolaCheck", "snacksCheck", "aVitaminsCheck", 
    "kVitaminsCheck", "babyFormulaCheck", "babyFoodCheck", "dogFoodCheck", 
    "catFoodCheck", "otherPetCheck"
  ];
  
  var foodCheckDataObj = {};
  
  checkboxes.forEach(function(checkbox) {
    foodCheckDataObj[checkbox] = document.getElementById(checkbox).checked;
  });
  
  foodList.push(foodCheckDataObj);
  
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

