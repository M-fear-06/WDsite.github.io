



function showLow() {

  const highopText = document.getElementById("highText");
  const midopText = document.getElementById("midText");
  const lowopText = document.getElementById("lowText");
  
  
  const highButton = document.getElementById("highButton");
  const lowButton = document.getElementById("lowButton");
  const midButton = document.getElementById("midButton");


 
    highopText.style.opacity = "0";
    lowopText.style.opacity = "100";



    highButton.style.textDecoration = "none";
    lowButton.style.textDecoration = "underline";

    midButton.style.textDecoration = "none";
    midopText.style.opacity = "0";
}

function showHigh() {

  const highopText = document.getElementById("highText");
  const midopText = document.getElementById("midText");
  const lowopText = document.getElementById("lowText");
  
  
  const highButton = document.getElementById("highButton");
  const lowButton = document.getElementById("lowButton");
  const midButton = document.getElementById("midButton");





    highopText.style.opacity = "100";
    lowopText.style.opacity = "0";
    

    highButton.style.textDecoration = "underline";
    lowButton.style.textDecoration = "none";
    
    
    midButton.style.textDecoration = "none";
    midopText.style.opacity = "0";
    }


    function showMid() {

      const highopText = document.getElementById("highText");
      const midopText = document.getElementById("midText");
      const lowopText = document.getElementById("lowText");
      
      
      const highButton = document.getElementById("highButton");
      const lowButton = document.getElementById("lowButton");
      const midButton = document.getElementById("midButton");
  
  
  
  
      highopText.style.opacity = "0";
      lowopText.style.opacity = "0";
      
  
      highButton.style.textDecoration = "none";
      lowButton.style.textDecoration = "none";
     
      midButton.style.textDecoration = "underline";
      midopText.style.opacity = "100";
      
      }