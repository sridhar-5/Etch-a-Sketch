//selecting the grid container
const gridcontainer = document.querySelector(".grid-container");

//selecting the change the size button
const ChangeSizeButton = document.querySelector("#reset");

//adding the even listener on load property when loaded sets the deault grid
// of size 20 x 20

window.addEventListener("load", SetDefaultGrid);

//adding event listener to the change the size button
ChangeSizeButton.addEventListener("click", ChangeGridSize);

//default grid size function
function SetDefaultGrid() {
  SetGridSize(20);
  CreateGridElements(20);
}

//function to set the size of the grid
function SetGridSize(size) {
  gridcontainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
}

// function to create all the grid elements
function CreateGridElements(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-pixel");
    gridElement.addEventListener("mouseover", ChangeColor);
    gridcontainer.appendChild(gridElement);
  }
}

//this will get a event as parameter and changes the background color
function ChangeColor(e) {
  //generating a random number between 0 to 255
  var randomRed = Math.floor(Math.random() * 255);
  var randomGreen = Math.floor(Math.random() * 255);
  var randomBlue = Math.floor(Math.random() * 255);

  e.target.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
}

function ChangeGridSize() {
  var Usersize = window.prompt("Please enter the size of the Grid");
  var UserSize = parseInt(Usersize);

  if (UserSize < 0 || UserSize > 60) {
    window.alert("please enter a size between 2 to 64");
    ChangeGridSize();
  } else {
    //clearing the 20 x 20 grid elements
    const ArrayfromGrid = Array.from(gridcontainer.childNodes);
    ArrayfromGrid.forEach((gridelement) => {
      gridcontainer.removeChild(gridelement);
    });
    SetGridSize(UserSize);
    CreateGridElements(UserSize);
  }
}
