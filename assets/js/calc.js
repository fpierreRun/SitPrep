


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

    water = document.getElementById("water").value
    grain = document.getElementById("grain").value
    legumes = document.getElementById("legumes").value
    dairy = document.getElementById("dairy").value
    sugars = document.getElementById("sugars").value
    leavening = document.getElementById("leavening").value
    // salt = document.getElementById("salt").value
    // fats = document.getElementById("fats").value


    
    //equation for water
    var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    var waterRec = waterneeded - (~~water)
    var waterProgress = ((water/waterneeded)*100) 
   
    //equation for grain
    var grainNeeded =  Math.ceil(((~~adults*1.14) + (~~kids*0.71)) * (~~weeks*7));
    var grainRec = grainNeeded - (~~grain)
    var grainProgress = ((grain/grainNeeded)*100)

    //equation for Legumes
    var legumesNeeded =  Math.ceil(((~~adults*.14) + (~~kids*.14)) * (~~weeks*7));
    var legumesRec = legumesNeeded - (~~legumes)
    var legumesProgress = ((legumes/legumesNeeded)*100) 

    //equation for dairy
    var dairyNeeded =  Math.ceil(((~~adults*.14) + (~~kids*.14)) * (~~weeks*7));
    var dairyRec = dairyNeeded - (~~dairy)
    var dairyProgress = ((dairy/dairyNeeded)*100)

    // //equation for sugars
    var sugarsNeeded =  Math.ceil(((~~adults*.14) + (~~kids*.14)) * (~~weeks*7));
    var sugarsRec = sugarsNeeded - (~~water)
    var sugarsProgress = ((sugars/sugarsNeeded)*100) 

    //equation for leavening agents
    var leaveningNeeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    var leaveningRec = leaveningNeeded - (~~leavening)
    var leaveningProgress = ((leavening/leaveningNeeded)*100) 

    // //equation for salt
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // var waterProgress = ((water/waterneeded)*100) 
    // //equation for fats
    // var waterneeded =  Math.ceil(((~~adults*2.142) + (~~kids*2.142)) * (~~weeks*7));
    // var waterRec = waterneeded - (~~water)
    // var waterProgress = ((water/waterneeded)*100) 

   

   function recAmount() {

    
    document.getElementById("waterRecommend").innerHTML= waterneeded ;
    document.getElementById("waterNeeded").innerHTML= waterRec;
    document.getElementById("waterProgress").style.width= waterProgress += "%";

    document.getElementById("grainRecommend").innerHTML= grainNeeded ;
    document.getElementById("grainNeeded").innerHTML= grainRec;
    document.getElementById("grainProgress").style.width= grainProgress += "%";
    
    document.getElementById("legumesRecommend").innerHTML= legumesNeeded ;
    document.getElementById("legumesNeeded").innerHTML= legumesRec;
    document.getElementById("legumesProgress").style.width= legumesProgress += "%";
    
    document.getElementById("dairyRecommend").innerHTML= dairyNeeded ;
    document.getElementById("dairyNeeded").innerHTML= dairyRec;
    document.getElementById("dairyProgress").style.width= dairyProgress += "%";

    document.getElementById("sugarsRecommend").innerHTML= sugarsNeeded ;
    document.getElementById("sugarsNeeded").innerHTML= sugarsRec;
    document.getElementById("sugarsProgress").style.width= sugarsProgress += "%";

    document.getElementById("leaveningRecommend").innerHTML= leaveningNeeded ;
    document.getElementById("leaveningNeeded").innerHTML= leaveningRec;
    document.getElementById("leaveningProgress").style.width= leaveningProgress += "%";

    // document.getElementById("legumesRecommend").innerHTML= legumesNeeded ;
    // document.getElementById("legumesNeeded").innerHTML= legumesRec;
    // document.getElementById("legumesProgress").style.width= legumesProgress += "%";

    // document.getElementById("legumesRecommend").innerHTML= legumesNeeded ;
    // document.getElementById("legumesNeeded").innerHTML= legumesRec;
    // document.getElementById("legumesProgress").style.width= legumesProgress += "%";


   };
   recAmount()
 };

 