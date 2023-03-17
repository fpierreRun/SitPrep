var food = [];
var newFood = [];

//Saving food supply info

var saveFood = function () {

    
    infants = document.getElementById("infants").value
    adults = document.getElementById("adults").value
    kids = document.getElementById("kids").value
    dogs = document.getElementById("dogs").checked
    cats = document.getElementById("cats").checked
    other = document.getElementById("others").checked
  
    //Object for form data
    var foodDataObj = {
  
      //Household Demographic
      infants: infants,
      adults: adults, 
      kids: kids,
  
        //  Pets
        dogs: dogs,
        cats: cats,
        other: other,
  
    };
    food.push(foodDataObj);
    saveData()
  };
 
  
  var saveData = function () {
 
    console.log(saveData)
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
    
            document.getElementById("dogs").checked= element.dogs;
            document.getElementById("cats").checked= element.cats;
            document.getElementById("other").checked= element.other;
            
            var infants = document.getElementById("infants").value
            var gallon = infants * 3
            
            console.log(gallon)
            
            function updateTable() {
            document.getElementById("gow").innerHTML= gallon;
            };
            updateTable()
        };
        
        };
      
    
    loadFood()
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

        
        console.log(gallon)
        
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
        document.getElementById("babyFormula").innerHTML= babyFormula;
        };
        updateTable()
    };
    
    };
  
    refreshpageFood()

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