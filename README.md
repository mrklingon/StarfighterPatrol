# StarfighterPatrol

This is a one-dimensional starfighter game. Inspired by ["1D Pac-Man is the best game I’ve played in 2024 (so far)"](https://arstechnica.com/gaming/2024/01/1d-pac-man-is-the-best-game-ive-played-in-2024-so-far/)

Pressing B reverses direction, A fires your lasers. You need to clear the purple asteroids that are a hazard to hyperspace navigation. You can move to a new region by hitting A4. Or if you choose restart the game with A3. When you've been hit 5 times your score (number of asteroids cleared) will show before the game restarts.
In the CircuitPython version you restart when you hit A or B. The Makecode/Javascript version will restart after a pause. 

Bonus: You can see MORE pixels if you attach https://www.adafruit.com/product/3811 - the 60 pixel Adafruit neopixel strip using A1 as the control - then you'll get a wider one-dimensional display!

```
Switch to the right to turn off sound.
```
* bach.py - provides musical tones
* starfighter.py - 1D starfighter patrol game. Destroy asteroid threats.
* starfighter.js - Javascript version Makecode link: https://makecode.com/_RocF4AHbY19R

```
  A - fire laser
  B - reverse direction
  A4 - hyperspace
  A3 - restart game
  A7 - show last score
```  
