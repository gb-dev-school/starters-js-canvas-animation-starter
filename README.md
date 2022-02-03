# Canvas Animation Starter
This starter template project is a part of *GB Dev School* initiative by Grigoriy Beziuk (@gbezyuk).

## Purpose
Allow students to:
* practice with 2D animations using JavaScript and 2D Canvas
* get familiar with the concept of separation of state and its representation

## Prerequisites
* Basic JavaScript familiarity: understanding
  * expressions, variables, functions, using dictionaries

## How to use
1. Clone this repo, or download a release and unarchive it.
2. Open `index.html` in your favorite web browser; you should see some minimalistic animation.
3. Open `scripts/payload/state.js` and `scripts/payload/representation.js`
   in your favorite text/code editor, and start hacking.


## Sample Problems

### 1. Canvas Drawing

At this point, the student is supposed to edit `scripts/payload/representation.js` only.

You could find this useful: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

* Change the size and color of the moving rectangle
* Instead of the rectangle, try using moving something different around
* Add some background, maybe?

### 2. Minor state changes

At this point, the student is supposed to edit `scripts/payload/state.js` only.

* reduce FPS in order to slow down the animation, if you'd like
* given FPS is the same, make the point move faster or slower
* change its movement direction
* make it bounce of canvas' edges instead of teleporting

### 3. Extending the state

At this point, the student is supposed to edit both files in `scripts/payload/` dir.

* make the moving figure change colors while moving
* how about having many figures on screen at the same time?
* adding some physics, like handling collisions?
* or maybe make larger figures eat the smaller ones?
* if so, let them actively hunt!
* maybe some new figures should arise from time to time?

### 4. Implementing something completely different

At this point, the student is supposed to change whatever you want in `scripts/payload/` dir.
Still, chances are you won't need to change anything else.

* implement Conway's Game of Life using this starter
* try drawing some fractals
* try drawing planets and satellites orbiting
* basically, try implementing any animation you'd like


### 5. User interaction

At this point, the student can edit whatever feels necessary for the task.

* add interactivity! first, allow pausing the animation via some
  mouse action, keyboard press or a special HTML button
* get back to the original single object state, but now let user control its movement
* how about having two objects, and two users?
* how about letting them shoot at each other?
