/*

THIS CODE *IS* SUPPOSED TO BE CHANGED BY THE STUDENT.

Feel free to add new functions and variables, but don't _rename_ these:
* `drawSingleFrame (ctx, state)` — the function to draw the
  representation of the state on 2d canvas using drawing context ctx.
* `FPS` — number of frames per second, 60 or lower.

*/

// Frames Per Second, 60 is max, try smaller values for debugging
const FPS = 60


// Here we draw the visual representation of our model
// Model's state and its evolution is defined in `state.js`
//
// Originally, we have a single point and represent it visually as a small rectangle
function drawSingleFrame (ctx, state) {
    const rectangleWidth = 10
    const rectangleHeight = 10
    ctx.fillRect(state.x, state.y, rectangleWidth, rectangleHeight)
}
