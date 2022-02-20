/*

This code is a boilerplate not supposed to be changed by the student.
It's okay if you don't understand this code!
All the task-related code is placed in `payload.js` file, which should be loaded first.

This code assumes these names to be already defined:
* `state` — the state of the system we model.
* `drawSingleFrame (ctx, state)` — the function to draw the
  representation of the state on 2d canvas using drawing context ctx.
* `getNextState(state)` — the reducer function, performing one step
  of the state evolution and returning the new state.
* `FPS` — number of frames per second, 60 or lower.

*/

function _setCanvasSize (canvas) {
    // there are HDR screens, like Retina
    // which means, a DOM logical pixel may represent more than one physical screen pixel
    // for best experience, canvas size should match physical pixels
    canvas.width = canvas.clientWidth * window.devicePixelRatio
    canvas.height = canvas.clientHeight * window.devicePixelRatio
}

function initCanvas (canvas) {
    _setCanvasSize(canvas)
    return canvas.getContext('2d')
}

const canvas = document.getElementById('theCanvas')
const ctx = initCanvas(canvas)

window.addEventListener('resize', () => _setCanvasSize(canvas))

function _clearStage (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

let currentFrame = 0
const frameLimit = 60 / Math.min(FPS, 60)

function skipFrame () {
    if (frameLimit <= 1) {
        return false
    }

    console.log(currentFrame)
    const skip = currentFrame !== 0
    currentFrame++
    currentFrame %= frameLimit
    return skip
}

function onAnimationFrame () {

    if (!skipFrame()) {

        _clearStage(ctx)

        drawSingleFrame(ctx, state)

        state = getNextState(state)
    }

    // "call me again to draw the next frame"
    window.requestAnimationFrame(onAnimationFrame)
}

state = initState()

// start with drawing the first frame
window.requestAnimationFrame(onAnimationFrame)
