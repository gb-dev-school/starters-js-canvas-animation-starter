/*

THIS CODE *IS* SUPPOSED TO BE CHANGED BY THE STUDENT.

Feel free to add new functions and variables, but don't _rename_ these:
* `state` — the state of the system we model.
* `getNextState(state)` — the reducer function, performing one step
  of the state evolution and returning the new state.

*/


// The main idea is to separate model's state and its representation.
//
// Here we define the initial state of the model
//
// Originally, we consider a single point moving in space, thus (x, y) coordinates
function initState () {
    return {
        x: 1,
        y: 1
    }
}
let state


// Here the evolution of the model occurs, as it moves from one state to another.
//
// Originally, the point under consideration is moving diagonally,
// and when it hits the edge of the canvas, it teleports to the opposite edge.
function getNextState (currentState) {
    const step = 1
    const newState = {
        x: currentState.x + step,
        y: currentState.y + step,
    }
    if (newState.x > canvas.width) {
        newState.x = 0
    }
    if (newState.y > canvas.height) {
        newState.y = 0
    }
    return newState
}
