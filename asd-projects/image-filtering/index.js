// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      filterFunction(pixelArray);
      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel.RED;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  let backgroundColor = image[0][0];
  for (i = 0; i < image.length; i++) {
    for (j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        let pixel = image[i][j];
        let pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        let updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;
      }
    }
  }
}
// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  return num < 0 ? 0 : (num > 255 ? 255 : num);
}
// TODO 4: Create reddify filter function
function reddify(array) {
  array[0] += RED;
}
// TODO 7 & 8: Create more filter functions
function decreaseBlue(array) {
  BLUE = array[2] - 50;
  array[2] = keepInBounds(BLUE);
}
function increaseGreenByBlue(array) {
  GREEN = array[1];
  BLUE = array[2];
  array[1] = keepInBounds(BlUE + GREEN);
}
// CHALLENGE code goes below here
