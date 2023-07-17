document.addEventListener("DOMContentLoaded", function () {
    const originInput1 = document.getElementById("origin-input-0");
    const destinationInput1 = document.getElementById("destination-input-0");
    const travelModeInput1 = document.getElementById("changemode-driving-1");
    const originInput2 = document.getElementById("origin-input-1");
    const destinationInput2 = document.getElementById("destination-input-1");
    const travelModeInput2 = document.getElementById("changemode-driving-2");
    const originInput3 = document.getElementById("origin-input-2");
    const destinationInput3 = document.getElementById("destination-input-2");
    const travelModeInput3 = document.getElementById("changemode-driving-3");
    const originInput4 = document.getElementById("origin-input-4");
    const destinationInput4 = document.getElementById("destination-input-4");
    const travelModeInput4 = document.getElementById("changemode-driving-4");
    const originInput5 = document.getElementById("origin-input-5");
    const destinationInput5 = document.getElementById("destination-input-5");
    const travelModeInput5 = document.getElementById("changemode-driving-5");
  
    const mapData1 = localStorage.getItem("mapData1");
    if (mapData1) {
      const data = JSON.parse(mapData1);
      originInput1.value = data.origin;
      destinationInput1.value = data.destination;
      travelModeInput1.value = data.travelMode;
    }
  
    const mapData2 = localStorage.getItem("mapData2");
    if (mapData2) {
      const data = JSON.parse(mapData2);
      originInput2.value = data.origin;
      destinationInput2.value = data.destination;
      travelModeInput2.value = data.travelMode;
    }
  
    const mapData3 = localStorage.getItem("mapData3");
    if (mapData3) {
      const data = JSON.parse(mapData3);
      originInput3.value = data.origin;
      destinationInput3.value = data.destination;
      travelModeInput3.value = data.travelMode;
    }
  
    const mapData4 = localStorage.getItem("mapData4");
    if (mapData4) {
      const data = JSON.parse(mapData4);
      originInput4.value = data.origin;
      destinationInput4.value = data.destination;
      travelModeInput4.value = data.travelMode;
    }
  
    const mapData5 = localStorage.getItem("mapData5");
    if (mapData5) {
      const data = JSON.parse(mapData5);
      originInput5.value = data.origin;
      destinationInput5.value = data.destination;
      travelModeInput5.value = data.travelMode;
    }
  });
  