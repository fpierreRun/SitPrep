


function planChild() {
    

    if(addSecond.checked==true) {
        document.getElementById("planChild").style.display = "block"
    ;}

    else{
        document.getElementById("planChild").style.display = "none";
   ;}
;}



// Edit Plan Data
$(".calc").on("click", "p", function() {
    var text = $(this)
 .text()
 .trim();



 var textInput = $("<textarea>")
 .attr('id', this.id)
 .attr('class', this.className)
.val(text);

$(this).replaceWith(textInput);

textInput.trigger("focus");
 });


 // Saving edited data
 $(".calc").on("blur", "textarea", function() {

   var text = $(this)
   
.val()
.trim();


// recreate p element
var updatedData = $("<p>")
.attr('id', this.id)
 .attr('class', this.className)
.text(text);



// replace textarea with p element
$(this).replaceWith(updatedData);

console.log(updatedData)



calculate()

 });


 var calculate = function () {

    weeks = document.getElementById("weeks").innerHTML
    adults = document.getElementById("adults").innerHTML

    var waterneeded = (~~weeks) + (~~adults);
    
    
   console.log(waterneeded)
 };

 