


function planChild() {
    

    if(addSecond.checked==true) {
        document.getElementById("planChild").style.display = "block"
    ;}

    else{
        document.getElementById("planChild").style.display = "none";
   ;}
;}


 var calculate = function () {

    
    days = document.getElementById("days").value
    weeks = document.getElementById("weeks").value*7
    years = document.getElementById("years").value*365
    adults = document.getElementById("adults").value
    kids = document.getElementById("kids").value
    
    

    water = document.getElementById("water").value
    grain = document.getElementById("grain").value
    legumes = document.getElementById("legumes").value
    dairy = document.getElementById("dairy").value
    sugars = document.getElementById("sugars").value
    leavening = document.getElementById("leavening").value
    salt = document.getElementById("salt").value
    fats = document.getElementById("fats").value


    
    
    
    //equation for water
    var waterneeded = (((~~adults*2.142) + (~~kids*2.142)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var waterRec = (waterneeded - (~~water)).toFixed(2)
    var waterProgress = ((water/waterneeded)*100).toFixed(2)


    //equation for grain
    var grainNeeded =  (((~~adults*1.14) + (~~kids*0.71))* ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var grainRec = (grainNeeded - (~~grain)).toFixed(2)
    var grainProgress = ((grain/grainNeeded)*100).toFixed(2)

    //equation for Legumes
    var legumesNeeded =  (((~~adults*.14) + (~~kids*.14)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var legumesRec = (legumesNeeded - (~~legumes)).toFixed(2)
    var legumesProgress = ((legumes/legumesNeeded)*100).toFixed(2) 

    //equation for dairy
    var dairyNeeded =  (((~~adults*.14) + (~~kids*.14)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var dairyRec = (dairyNeeded - (~~dairy)).toFixed(2)
    var dairyProgress = ((dairy/dairyNeeded)*100).toFixed(2)

    // //equation for sugars
    var sugarsNeeded =  (((~~adults*.14) + (~~kids*.14)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var sugarsRec = (sugarsNeeded - (~~sugars)).toFixed(2)
    var sugarsProgress = ((sugars/sugarsNeeded)*100).toFixed(2) 

    //equation for leavening agents
    var leaveningNeeded =  (((~~adults*.14) + (~~kids*.14)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var leaveningRec = (leaveningNeeded - (~~leavening)).toFixed(2)
    var leaveningProgress = ((leavening/leaveningNeeded)*100).toFixed(2) 

    // //equation for salt
    var saltNeeded =  (((~~adults*.14) + (~~kids*.14)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var saltRec = (saltNeeded - (~~salt)).toFixed(2)
    var saltProgress = ((salt/saltNeeded)*100).toFixed(2) 

    // //equation for fats
    var fatsneeded =  (((~~adults*.14) + (~~kids*.14)) * ((~~days) + (~~weeks) + (~~years))).toFixed(2);
    var fatsRec = (fatsneeded - (~~fats)).toFixed(2)
    var fatsProgress = ((fats/fatsneeded)*100).toFixed(2) 

   

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

    document.getElementById("saltRecommend").innerHTML= saltNeeded;
    document.getElementById("saltNeeded").innerHTML= saltRec;
    document.getElementById("saltProgress").style.width= saltProgress += "%";

    document.getElementById("fatsRecommend").innerHTML= fatsneeded ;
    document.getElementById("fatsNeeded").innerHTML= fatsRec;
    document.getElementById("fatsProgress").style.width= fatsProgress += "%";

   };
   recAmount();
 
 };


 
 
     //download PDF code

     $(document).ready(function($) 
     { 
   
       $(document).on('click', '.btn_print ', function(event) 
       {
         event.preventDefault();
   
         //credit : https://ekoopmans.github.io/html2pdf.js
         
         var element = document.getElementById('downloadPrint'); 
            console.log(element)
         
   
         //more custom settings
         var opt = 
         {
           margin:     0.25,
           filename:     'My_Results_.pdf',
           image:        { type: 'pdf', quality: 0.98 },
           html2canvas:  { scale: 2 },
           jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' },
           scrollY: 0
         };
   
         // New Promise-based usage:
         html2pdf().set(opt).from(element).save();
   
         // Avoid page-breaks on all elements, and add one before #page2el.
          //  html2pdf().set({
          //    pagebreak: { mode: 'avoid-all', before: '#page2el' }
          //  });
          });
       });

       function giveFeedback (){

        window.location.href="./feedback.html";
    console.log()
      };


     