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
    "juiceCheck", "milkCheck", "snacksCheck", "cerealCheck", "aVitaminsCheck", 
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
  
  const element = foodListNew[foodListNew.length - 1];
  
  var checkboxes = [
    "waterCheck", "meatCheck", "fruitCheck", "pbCheck", "crackCheck", 
    "juiceCheck", "milkCheck", "snacksCheck", "cerealCheck", "aVitaminsCheck", 
    "kVitaminsCheck", "babyFormulaCheck", "babyFoodCheck", "dogFoodCheck", 
    "catFoodCheck", "otherPetCheck"
  ];
  
  checkboxes.forEach(function(checkbox) {
    document.getElementById(checkbox).checked = element[checkbox];
  });
}
loadSaveList () 