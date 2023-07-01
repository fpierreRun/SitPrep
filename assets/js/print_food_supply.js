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
  document.getElementById('day1Breakfast').textContent = day1Breakfast;
  document.getElementById('day1Lunch').textContent = day1Lunch;
  document.getElementById('day1Dinner').textContent = day1Dinner;
  document.getElementById('day1Snack').textContent = day1Snack;

  document.getElementById('day2Breakfast').textContent = day2Breakfast;
  document.getElementById('day2Lunch').textContent = day2Lunch;
  document.getElementById('day2Dinner').textContent = day2Dinner;
  document.getElementById('day2Snack').textContent = day2Snack;

  document.getElementById('day3Breakfast').textContent = day3Breakfast;
  document.getElementById('day3Lunch').textContent = day3Lunch;
  document.getElementById('day3Dinner').textContent = day3Dinner;
  document.getElementById('day3Snack').textContent = day3Snack;

  // Function to dynamically display the ingredients for a meal
  function displayIngredients(meal, ingredientsListId) {
    var ingredients = '';

    switch (meal) {
      case 'Cereal with Milk and Fruit':
        ingredients = `
        <label class="h5">Adult Serving</label>
          <li>1 cup of dry cereal or granola</li>
          <li>1 cup of shelf stable milk or powdered milk</li>
          <li>1/2 cup of fruit</li>

          <label class="mt-3 h5">Kids Serving</label>
          <li>1/2 cup of dry cereal or granola</li>
          <li>1/2 cup of shelf stable milk or powdered milk</li>
          <li>1/2 cup of fruit</li>
        `;
        break;

      case 'Cereal with Milk, Fruit, and Nuts':
        ingredients = `
        <label class="h5">Adult Serving</label>
          <li>1 cup of dry cereal or granola</li>
          <li>1 cup of shelf stable milk or powdered milk</li>
          <li>1/2 cup of fruit</li>
          <li>1/4 cup of nuts or dried fruits</li>

          <label class="mt-3 h5">Kids Serving</label>
          <li>1/2 cup of dry cereal or granola</li>
          <li>1/2 cup of shelf stable milk or powdered milk</li>
          <li>1/2 cup of fruit</li>
          <li>1/4 cup of nuts or dried fruits</li>
        `;
        break;

      case 'Cereal with Milk, Fruit, and Granola Bar':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 cup of dry cereal or granola</li>
        <li>1 cup of shelf stable milk or powdered milk</li>
        <li>1/2 cup of fruit</li>
        <li>1 granola bar</li>

          <label class="mt-3 h5">Kids Serving</label>
          <li>1/2 cup of dry cereal or granola</li>
          <li>1/2 cup of shelf stable milk or powdered milk</li>
          <li>1/2 cup of fruit</li>
        `;
        break;

        case 'Cereal with Milk, Fruit, and Peanut Butter':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 cup of dry cereal or granola</li>
        <li>1 cup of shelf stable milk or powdered milk</li>
        <li>1/2 cup of fruit</li>
          <li>1 tablespoon of peanut butter</li>

          <label class="mt-3 h5">Kids Serving</label>
          <li>1/2 cup of dry cereal or granola</li>
          <li>1/2 cup of shelf stable milk or powdered milk</li>
          <li>1/2 cup of fruit</li>
          <li>1 tablespoon of peanut butter</li>
        `;
        break;

      case 'Tuna and Crackers Combo':
        ingredients = `
        <label class="h5">Adult Serving</label>
          <li>1 can of canned Tuna or Salmon</li>
          <li>6 crackers</li>
          <li>1/2 cup of fruits or vegetables</li>
          <li>1 cup of juice</li>

          <label class="mt-3 h5">Kid Serving</label>
          <li>1/2 can of Tuna or Salmon</li>
          <li>3 crackers</li>
          <li>1/4 cup of fruits or vegetables</li>
          <li>1/2 cup of juice</li>

        `;
        break;

      case 'Chilli and Crackers Delight':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 can of canned Chili</li>
        <li>6 crackers</li>
        <li>1/2 cup of fruits or vegetables</li>
        <li>1 cup of juice</li>

        <label class="mt-3 h5">Kid Serving</label>
        <li>1/2 can of Chili</li>
        <li>3 crackers</li>
        <li>1/4 cup of fruits or vegetables</li>
        <li>1/2 cup of juice</li>
        `;
        break;

      case 'Beef Stew and Crackers Combo':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 can of canned Beef Stew</li>
        <li>6 crackers</li>
        <li>1/2 cup of fruits or vegetables</li>
        <li>1 cup of juice</li>

        <label class="mt-3 h5">Kid Serving</label>
        <li>1/2 can of Beef Stew</li>
        <li>3 crackers</li>
        <li>1/4 cup of fruits or vegetables</li>
        <li>1/2 cup of juice</li>
        `;
        break;

      case 'Tofu with Veggies and Crackers':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 can of canned Tofu</li>
        <li>6 crackers</li>
        <li>1/2 cup of fruits or vegetables</li>
        <li>1 cup of juice</li>

        <label class="mt-3 h5">Kid Serving</label>
        <li>1/2 can of Tofu</li>
        <li>3 crackers</li>
        <li>1/4 cup fof fruits or vegetables</li>
        <li>1/2 cup of juice</li>
        `;
        break;

      case 'Ravioli with Fruits and Crackers':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 can of canned Ravioli</li>
        <li>6 crackers</li>
        <li>1/2 cup of fruits or vegetables</li>
        <li>1 cup of juice</li>

        <label class="mt-3 h5">Kid Serving</label>
        <li>1/2 can of Ravioli</li>
        <li>3 crackers</li>
        <li>1/4 cup of fruits or vegetables</li>
        <li>1/2 cup of juice</li>
        `;
        break;

      case 'Plant Base Protein with Veggies and Granola Bar':
        ingredients = `
        <label class="h5">Adult Serving</label>
        <li>1 can of canned Ravioli</li>
        <li>6 crackers</li>
        <li>1/2 cup of fruits or vegetables</li>
        <li>1 cup of juice</li>

        <label class="mt-3 h5">Kid Serving</label>
        <li>1/2 can of Ravioli</li>
        <li>3 crackers</li>
        <li>1/4 cup of fruits or vegetables</li>
        <li>1/2 cup of juice</li>
        `;
        break;

    //   default:
    //     ingredients = 'No meal chosen.';
    //     break;
    }

    document.getElementById(ingredientsListId).innerHTML = ingredients;
  }

  // Display ingredients for each meal
  displayIngredients(day1Breakfast, 'day1BreakfastIngredients');
  displayIngredients(day2Breakfast, 'day2BreakfastIngredients');
  displayIngredients(day3Breakfast, 'day3BreakfastIngredients');
  displayIngredients(day1Lunch, 'day1LunchIngredients');
  displayIngredients(day2Lunch, 'day2LunchIngredients');
  displayIngredients(day3Lunch, 'day3LunchIngredients');
  displayIngredients(day1Dinner, 'day1DinnerIngredients');
  displayIngredients(day2Dinner, 'day2DinnerIngredients');
  displayIngredients(day3Dinner, 'day3DinnerIngredients');
  displayIngredients(day1Snack, 'day1SnackIngredients');
  displayIngredients(day2Snack, 'day2SnackIngredients');
  displayIngredients(day3Snack, 'day3SnackIngredients');
}

function loadName(){

    updatedName = JSON.parse(localStorage.getItem("prfName"));

    for (let i = 0; i < updatedName.length; i++) {
 
    var element = updatedName[updatedName.length-1];
    

        // document.getElementById("displayname").innerHTML= element.myName;
        let myNameElements = document.querySelectorAll('.myName');

      // Append new text to the span's innerHTML
      for (let i = 0; i < myNameElements.length; i++) {
        myNameElements[i].innerHTML += element.myName;
       
      }
      
          };
   
};
loadName()


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
       filename:     'My_Plan_.pdf',
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
