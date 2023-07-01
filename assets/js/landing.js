
var addTo72 = [];
var prog72 = [];
var prfName =[];




function openNameModal(){
  $('#getName').modal('show');

 }; 



function applyName(){

  updatedName = JSON.parse(localStorage.getItem("prfName"));

    if(!updatedName){

      $('#getName').modal('show'); 
     };

}
applyName()






function saveName(){
  localStorage.removeItem("prfName");
  var myName = document.getElementById("inputName").value;
   
    //Object for form data
    var nameDataObj = {
  
      //preferred name
      myName: myName,
    
    };
    prfName.push(nameDataObj);
    localStorage.removeItem("prfName");
    updateName()
  
  };
 
  function updateName() {
 
    localStorage.removeItem("prfName");
  
    localStorage.setItem("prfName", JSON.stringify(prfName))
    loadName();
    location.reload();
  };

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
    $('#getName').modal('hide');
   
};
loadName()




function updateCards (){



   //go to View Plan
 window.location.href="./create_evac_plan.html";
 
};

// function cardUpdates() {
 

//   viewPlan = JSON.parse(localStorage.getItem("addTo72"));
//   updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));
//   foodList = JSON.parse(localStorage.getItem("foodList"));
//   addList = JSON.parse(localStorage.getItem("addList"));

//     if(!updatedPlan){
//     updatedPlan = JSON.parse(localStorage.getItem("plan"));

//   }


//   if(viewPlan){
  
//     document.getElementById("continue1").style.display = "block";
//     document.getElementById("add1").style.display = "none";
    
//     document.getElementById("not1").style.display = "none";
//     document.getElementById("prog1").style.display = "block";

    
//     const evacForm = document.getElementsByClassName("evacForm");
//     for (let i = 0; i < evacForm.length; i++) {
//       evacForm[i].classList.add("d-block");}

//       const completed = document.getElementsByClassName("showComplete");
//       for (let i = 0; i < completed.length; i++) {
//         completed[i].classList.add("d-block");}

      


//     // var evacForm = document.getElementById("evacForm");
//     // evacForm.classList.add("d-block");

    
//     // var evacPlan = document.getElementById("evacPlan");
//     // evacPlan.classList.add("d-none");

    
//   };

// // get keys begin
//   updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));
//   savedFood = JSON.parse(localStorage.getItem("foodList"));
//   additional = JSON.parse(localStorage.getItem("addList"));
//   // get keys ends

//   if(!updatedPlan){
//   updatedPlan = JSON.parse(localStorage.getItem("plan"));

// }

// else if(updatedPlan){

  
//   localStorage.removeItem('addTo72');

//   const evacForm = document.getElementsByClassName("evacForm");
//     for (let i = 0; i < evacForm.length; i++) {
//       evacForm[i].classList.add("d-none");}

//       const remEvacPlan = document.getElementsByClassName("evacPlan");
//     for (let i = 0; i < remEvacPlan.length; i++) {
//       remEvacPlan[i].classList.remove("d-none");}

//       const evacPlan = document.getElementsByClassName("evacPlan");
//       for (let i = 0; i < evacPlan.length; i++) {
//         evacPlan[i].classList.add("d-block");}

//         // Evac Checklist begin
//         const step1M = document.getElementsByClassName("step1M");
//     for (let i = 0; i < step1M.length; i++) {
//       step1M[i].classList.add("d-none");}

//       const step1C = document.getElementsByClassName("step1C");
//     for (let i = 0; i < step1C.length; i++) {
//       step1C[i].classList.remove("d-none");}

//       // const evacPlan = document.getElementsByClassName("evacPlan");
//       // for (let i = 0; i < evacForm.length; i++) {
//       //   evacPlan[i].classList.add("d-block");}

  
//   document.getElementById("continue1").style.display = "none";
//   document.getElementById("view1").style.display = "block";
//   document.getElementById("add1").style.display = "none";
  
//   document.getElementById("not1").style.display = "none";
//     document.getElementById("prog1").style.display = "none";
//     document.getElementById("comp1").style.display = "block";

//     // document.getElementById("step1M").style.display = "none";
//     document.getElementById("step1C").style.display = "block";

  
    

//     // var evacForm = document.getElementById("evacForm");
//     // evacForm.classList.add("d-none");

//     // var remEvacPlan = document.getElementById("evacPlan");
//     // remEvacPlan.classList.remove("d-none");

//     // var evacPlan = document.getElementById("evacPlan");
//     // evacPlan.classList.add("d-block");

//     var prog72 = 33.333;

// };

// // check to seed that food supply is updated
// else if(savedFood){

  
//   localStorage.removeItem('addTo72');

//   const evacForm = document.getElementsByClassName("evacForm");
//     for (let i = 0; i < evacForm.length; i++) {
//       evacForm[i].classList.add("d-none");}

//       const remEvacPlan = document.getElementsByClassName("evacPlan");
//     for (let i = 0; i < remEvacPlan.length; i++) {
//       remEvacPlan[i].classList.remove("d-none");}

//       const evacPlan = document.getElementsByClassName("evacPlan");
//       for (let i = 0; i < evacPlan.length; i++) {
//         evacPlan[i].classList.add("d-block");}

//         // Evac Checklist begin
//         const step1M = document.getElementsByClassName("step2M");
//     for (let i = 0; i < step1M.length; i++) {
//       step1M[i].classList.add("d-none");}

//       const step1C = document.getElementsByClassName("step2C");
//     for (let i = 0; i < step1C.length; i++) {
//       step1C[i].classList.remove("d-none");}

//       // const evacPlan = document.getElementsByClassName("evacPlan");
//       // for (let i = 0; i < evacForm.length; i++) {
//       //   evacPlan[i].classList.add("d-block");}

//       document.getElementById("continue2").style.display = "none";
//       document.getElementById("view2").style.display = "block";
//       document.getElementById("add2").style.display = "none";
      
//       document.getElementById("not2").style.display = "none";
//         document.getElementById("prog2").style.display = "none";
//         document.getElementById("comp2").style.display = "block";
    
//         // document.getElementById("step1M").style.display = "none";
//         document.getElementById("step2C").style.display = "block";
  

  
    

//     // var evacForm = document.getElementById("evacForm");
//     // evacForm.classList.add("d-none");

//     // var remEvacPlan = document.getElementById("evacPlan");
//     // remEvacPlan.classList.remove("d-none");

//     // var evacPlan = document.getElementById("evacPlan");
//     // evacPlan.classList.add("d-block");

//     var prog72 = 33.333;

// };


// // check to seed that food supply is updated
// else if(additional){

  
//   localStorage.removeItem('addTo72');

//   const evacForm = document.getElementsByClassName("evacForm");
//     for (let i = 0; i < evacForm.length; i++) {
//       evacForm[i].classList.add("d-none");}

//       const remEvacPlan = document.getElementsByClassName("evacPlan");
//     for (let i = 0; i < remEvacPlan.length; i++) {
//       remEvacPlan[i].classList.remove("d-none");}

//       const evacPlan = document.getElementsByClassName("evacPlan");
//       for (let i = 0; i < evacPlan.length; i++) {
//         evacPlan[i].classList.add("d-block");}

//         // Evac Checklist begin
//         const step1M = document.getElementsByClassName("step3M");
//     for (let i = 0; i < step1M.length; i++) {
//       step1M[i].classList.add("d-none");}

//       const step1C = document.getElementsByClassName("step3C");
//     for (let i = 0; i < step1C.length; i++) {
//       step1C[i].classList.remove("d-none");}

//       // const evacPlan = document.getElementsByClassName("evacPlan");
//       // for (let i = 0; i < evacForm.length; i++) {
//       //   evacPlan[i].classList.add("d-block");}

//       document.getElementById("continue3").style.display = "none";
//       document.getElementById("view3").style.display = "block";
//       document.getElementById("add3").style.display = "none";
      
//       document.getElementById("not3").style.display = "none";
//         document.getElementById("prog3").style.display = "none";
//         document.getElementById("comp3").style.display = "block";
    
//         // document.getElementById("step1M").style.display = "none";
//         document.getElementById("step3C").style.display = "block";
  

  
    

//     // var evacForm = document.getElementById("evacForm");
//     // evacForm.classList.add("d-none");

//     // var remEvacPlan = document.getElementById("evacPlan");
//     // remEvacPlan.classList.remove("d-none");

//     // var evacPlan = document.getElementById("evacPlan");
//     // evacPlan.classList.add("d-block");

//     var prog72 = 33.333;

// };
// // Code to be executed if at least one of the conditions is true
// else (additional || saveFood || updatedPlan){

//   const dontShow = document.getElementsByClassName("dashBlock");
//   for (let i = 0; i < dontShow.length; i++) {
//     dontShow[i].classList.add("d-none");
//     }

//   const continueDash = document.getElementsByClassName("continueDash");
//   for (let i = 0; i < continueDash.length; i++) {
//     continueDash[i].classList.remove("d-none");
//     continueDash[i].classList.add("d-block")}
//  // Code to be executed if all three conditions are true

//       if(additional && saveFood && updatedPlan){

//         const dontShow = document.getElementsByClassName("dashBlock");
//         for (let i = 0; i < dontShow.length; i++) {
//           dontShow[i].classList.add("d-none");
//           }
      
//           const continueDash = document.getElementsByClassName("continueDash");
//           for (let i = 0; i < continueDash.length; i++) {
//             continueDash[i].classList.remove("d-block");
//             continueDash[i].classList.add("d-none")}
      
//             const completeDash = document.getElementsByClassName("completeDash");
//             for (let i = 0; i < completeDash.length; i++) {
//               completeDash[i].classList.remove("d-none");
//               completeDash[i].classList.add("d-block")}
//              // Code to be executed if only one or two conditions are true
//             } else {
//                 const dontShow = document.getElementsByClassName("dashBlock");
//                 for (let i = 0; i < dontShow.length; i++) {
//                   dontShow[i].classList.add("d-none");
//                   }
              
//                 const continueDash = document.getElementsByClassName("continueDash");
//                 for (let i = 0; i < continueDash.length; i++) {
//                   continueDash[i].classList.remove("d-none");
//                   continueDash[i].classList.add("d-block")}}
      
//       }
      

// }



// // function progTotal() {

// //   var sumProgress = prog72 

// //   document.getElementById("planProgress").style.width= sumProgress += "%";


// // };
// // progTotal();


// };
// cardUpdates();


function cardUpdates() {
  viewPlan = JSON.parse(localStorage.getItem("addTo72"));
  updatedPlan = JSON.parse(localStorage.getItem("editedPlan"));
  foodList = JSON.parse(localStorage.getItem("foodList"));
  addList = JSON.parse(localStorage.getItem("addList"));

  if (!updatedPlan) {
    updatedPlan = JSON.parse(localStorage.getItem("plan"));
  }

  if (viewPlan) {
    
    document.getElementById("continue1").style.display = "block";
    document.getElementById("add1").style.display = "none";
    
    document.getElementById("not1").style.display = "none";
    document.getElementById("prog1").style.display = "block";

    
    const evacForm = document.getElementsByClassName("evacForm");
    for (let i = 0; i < evacForm.length; i++) {
      evacForm[i].classList.add("d-block");}

      const completed = document.getElementsByClassName("showComplete");
      for (let i = 0; i < completed.length; i++) {
        completed[i].classList.add("d-block");}

      


  } if (updatedPlan) {
    localStorage.removeItem('addTo72');

  const evacForm = document.getElementsByClassName("evacForm");
    for (let i = 0; i < evacForm.length; i++) {
      evacForm[i].classList.add("d-none");}

      const remEvacPlan = document.getElementsByClassName("evacPlan");
    for (let i = 0; i < remEvacPlan.length; i++) {
      remEvacPlan[i].classList.remove("d-none");}

      const evacPlan = document.getElementsByClassName("evacPlan");
      for (let i = 0; i < evacPlan.length; i++) {
        evacPlan[i].classList.add("d-block");}

        // Evac Checklist begin
        const step1M = document.getElementsByClassName("step1M");
    for (let i = 0; i < step1M.length; i++) {
      step1M[i].classList.add("d-none");}

      const step1C = document.getElementsByClassName("step1C");
    for (let i = 0; i < step1C.length; i++) {
      step1C[i].classList.remove("d-none");}

      // const evacPlan = document.getElementsByClassName("evacPlan");
      // for (let i = 0; i < evacForm.length; i++) {
      //   evacPlan[i].classList.add("d-block");}

  
  document.getElementById("continue1").style.display = "none";
  document.getElementById("view1").style.display = "block";
  document.getElementById("add1").style.display = "none";
  
  document.getElementById("not1").style.display = "none";
    document.getElementById("prog1").style.display = "none";
    document.getElementById("comp1").style.display = "block";

    // document.getElementById("step1M").style.display = "none";
    document.getElementById("step1C").style.display = "block";

  
    

    // var evacForm = document.getElementById("evacForm");
    // evacForm.classList.add("d-none");

    // var remEvacPlan = document.getElementById("evacPlan");
    // remEvacPlan.classList.remove("d-none");

    // var evacPlan = document.getElementById("evacPlan");
    // evacPlan.classList.add("d-block");

    var prog72 = 33.333;

  }  if (foodList) {
   
  

  const evacForm = document.getElementsByClassName("evacForm");
    for (let i = 0; i < evacForm.length; i++) {
      evacForm[i].classList.add("d-none");}

      const remEvacPlan = document.getElementsByClassName("evacPlan");
    for (let i = 0; i < remEvacPlan.length; i++) {
      remEvacPlan[i].classList.remove("d-none");}

      const evacPlan = document.getElementsByClassName("evacPlan");
      for (let i = 0; i < evacPlan.length; i++) {
        evacPlan[i].classList.add("d-block");}

        // Evac Checklist begin
        const step1M = document.getElementsByClassName("step2M");
    for (let i = 0; i < step1M.length; i++) {
      step1M[i].classList.add("d-none");}

      const step1C = document.getElementsByClassName("step2C");
    for (let i = 0; i < step1C.length; i++) {
      step1C[i].classList.remove("d-none");}

      // const evacPlan = document.getElementsByClassName("evacPlan");
      // for (let i = 0; i < evacForm.length; i++) {
      //   evacPlan[i].classList.add("d-block");}

      document.getElementById("continue2").style.display = "none";
      document.getElementById("view2").style.display = "block";
      document.getElementById("add2").style.display = "none";
      
      document.getElementById("not2").style.display = "none";
        document.getElementById("prog2").style.display = "none";
        document.getElementById("comp2").style.display = "block";
    
        // document.getElementById("step1M").style.display = "none";
        document.getElementById("step2C").style.display = "block";
  

  
    

    // var evacForm = document.getElementById("evacForm");
    // evacForm.classList.add("d-none");

    // var remEvacPlan = document.getElementById("evacPlan");
    // remEvacPlan.classList.remove("d-none");

    // var evacPlan = document.getElementById("evacPlan");
    // evacPlan.classList.add("d-block");

    var prog72 = 33.333;


  } if (addList) {
    

  const evacForm = document.getElementsByClassName("evacForm");
    for (let i = 0; i < evacForm.length; i++) {
      evacForm[i].classList.add("d-none");}

      const remEvacPlan = document.getElementsByClassName("evacPlan");
    for (let i = 0; i < remEvacPlan.length; i++) {
      remEvacPlan[i].classList.remove("d-none");}

      const evacPlan = document.getElementsByClassName("evacPlan");
      for (let i = 0; i < evacPlan.length; i++) {
        evacPlan[i].classList.add("d-block");}

        // Evac Checklist begin
        const step1M = document.getElementsByClassName("step3M");
    for (let i = 0; i < step1M.length; i++) {
      step1M[i].classList.add("d-none");}

      const step1C = document.getElementsByClassName("step3C");
    for (let i = 0; i < step1C.length; i++) {
      step1C[i].classList.remove("d-none");}

      // const evacPlan = document.getElementsByClassName("evacPlan");
      // for (let i = 0; i < evacForm.length; i++) {
      //   evacPlan[i].classList.add("d-block");}

      document.getElementById("continue3").style.display = "none";
      document.getElementById("view3").style.display = "block";
      document.getElementById("add3").style.display = "none";
      
      document.getElementById("not3").style.display = "none";
        document.getElementById("prog3").style.display = "none";
        document.getElementById("comp3").style.display = "block";
    
        // document.getElementById("step1M").style.display = "none";
        document.getElementById("step3C").style.display = "block";
  

  
    

    // var evacForm = document.getElementById("evacForm");
    // evacForm.classList.add("d-none");

    // var remEvacPlan = document.getElementById("evacPlan");
    // remEvacPlan.classList.remove("d-none");

    // var evacPlan = document.getElementById("evacPlan");
    // evacPlan.classList.add("d-block");

    var prog72 = 33.333;

  } 
  if (addList || foodList || updatedPlan) {
    const dontShow = document.getElementsByClassName("dashBlock");
    for (let i = 0; i < dontShow.length; i++) {
      dontShow[i].classList.add("d-none");
    }
  
    const continueDash = document.getElementsByClassName("continueDash");
    for (let i = 0; i < continueDash.length; i++) {
      continueDash[i].classList.remove("d-none");
      continueDash[i].classList.add("d-block");
    }
  
    if (addList && foodList && updatedPlan) {
      const dontShow = document.getElementsByClassName("dashBlock");
      for (let i = 0; i < dontShow.length; i++) {
        dontShow[i].classList.add("d-none");
      }
  
      const continueDash = document.getElementsByClassName("continueDash");
      for (let i = 0; i < continueDash.length; i++) {
        continueDash[i].classList.remove("d-block");
        continueDash[i].classList.add("d-none");
      }
  
      const completeDash = document.getElementsByClassName("completeDash");
      for (let i = 0; i < completeDash.length; i++) {
        completeDash[i].classList.remove("d-none");
        completeDash[i].classList.add("d-block");
      }
    } else {
      const dontShow = document.getElementsByClassName("dashBlock");
      for (let i = 0; i < dontShow.length; i++) {
        dontShow[i].classList.add("d-none");
      }
  
      const continueDash = document.getElementsByClassName("continueDash");
      for (let i = 0; i < continueDash.length; i++) {
        continueDash[i].classList.remove("d-none");
        continueDash[i].classList.add("d-block");
      }
    }
  }
}
  

cardUpdates();



