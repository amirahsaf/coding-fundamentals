const palette = document.querySelector(".palette");

document.addEventListener("keydown", isKeyPressed);


function isKeyPressed(event) {
  
  if (event.ctrlKey && event.keyCode === 75) { // if ctrl key and k key is pressed simultaneously
      event.preventDefault(); //prevent default event(activating the browser's search bar)
      if (palette.classList.contains("none")) { //if palette contains class "none"(css display: none)
        palette.classList.remove("none"); // remove class so palette is displayed
      } else if (!palette.classList.contains("none")) { //if palette doesnt contain class "none"(css display: none) when both keys are pressed
        palette.classList.add("none"); // remove add so palette is not displayed
      }
  } 
}

