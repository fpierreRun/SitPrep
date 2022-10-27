


function planChild() {
    

    if(addSecond.checked==true) {
        document.getElementById("planChild").style.display = "block"
    ;}

    else{
        document.getElementById("planChild").style.display = "none";
   ;}
;}



// Edit Plan Data
// $(".calc").on("click", "p", function() {
//     var text = $(this)
//  .text()
//  .trim();



//  var textInput = $("<input>")
//  .attr('id', this.id)
//  .attr('class', this.className)
// .val(text);

// $(this).replaceWith(textInput);

// textInput.trigger("focus");


//  });



//  // Saving edited data
//  $(".calc").on("blur", "input", function() {

//    var text = $(this)
   
// .val()
// .trim();

// calculate()
// // recreate p element
// var updatedData = $("<p>")
// .attr('id', this.id)
//  .attr('class', this.className)
// .text(text);



// // replace textarea with p element
// $(this).replaceWith(updatedData);

// console.log(updatedData)





//  });


 var calculate = function () {

    weeks = document.getElementById("weeks").value
    adults = document.getElementById("adults").value
    kids = document.getElementById("kids").value
console.log(weeks)
    water = document.getElementById("water").value
    // grain = document.getElementById("grain").innerHTML
    // legumes = document.getElementById("legumes").innerHTML
    // dairy = document.getElementById("dairy").innerHTML
    // sugars = document.getElementById("sugars").innerHTML
    // leavening = document.getElementById("leavening").innerHTML
    // salt = document.getElementById("salt").innerHTML
    // fats = document.getElementById("fats").innerHTML


    
    //equation for water
    var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    var waterRec = waterneeded - (~~water)
    // //equation for grain
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // //equation for Legumes
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // //equation for dairy
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // //equation for sugars
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // //equation for leavening agents
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // //equation for salt
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // //equation for fats
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)

   console.log(waterRec)

   function recAmount() {


    document.getElementById("waterRecommend").innerHTML= waterneeded;
    document.getElementById("waterNeeded").innerHTML= waterRec;



   };
   recAmount()
 };

 