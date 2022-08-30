function RectTool() {
  this.icon = "assets/rectTool.jpg"
  this.name = "rectTool"
  //Setting the starting points for the values of the mouse's points to an initial value of -1, that means we haven't started drawing yet
  var startMouseX = -1
  var startMouseY = -1
  // Assigning to a boolean variable called _drawing_ the state 'false'
  var drawing = false

  this.draw = function () {
    //when mouseIsPressed  is true, check if haven't start drawing yet i.e startMouseX == -1 is true
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        //set the value to the new mouse location
        startMouseX = mouseX
        startMouseY = mouseY
        //set the bool var drawing to be true
        drawing = true
        //loading the pixel data for the display into the pixels[] array.
        loadPixels()
      } else {
        updatePixels()
        noFill()
        rect(
          startMouseX,
          startMouseY,
          mouseX - startMouseX,
          mouseY - startMouseY
        )
      }
      //else, if user has released the mouse
    } else if (drawing) {
      //we reset the bool var to be false
      drawing = false
      //assign the default values for the mouse's points
      startMouseX = -1
      startMouseY = -1
    }
  }
}
