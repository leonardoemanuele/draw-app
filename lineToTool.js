function LineToTool() {
  this.icon = "assets/lineTo.jpg"
  this.name = "LineTo"
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
        //update the display window with the data in the pixels[] array
        updatePixels()
        //drawing the line starting from the data loaded in loadPixels() which is startMouseX and startMouseY, up until to the current mouseX and Y  loaded in updatePixels(), as long as mouseIsPressed is true.
        line(startMouseX, startMouseY, mouseX, mouseY)
      }
      //else, if user has released the mouse
    } else if (drawing) {
      loadPixels()
      //we reset the bool var to be false
      drawing = false
      //assign the default values for the mouse's points
      startMouseX = -1
      startMouseY = -1
    }
  }
}
