# StarfighterPatrol

This is a one-dimensional starfighter game. Inspired by ["1D Pac-Man is the best game I’ve played in 2024 (so far)"](https://arstechnica.com/gaming/2024/01/1d-pac-man-is-the-best-game-ive-played-in-2024-so-far/)

Pressing B reverses direction, A fires your lasers. You need to clear the purple asteroids that are a hazard to hyperspace navigation. You can move to a new region by hitting A4. Or if you choose restart the game with A3. When you've been hit 5 times your score (number of asteroids cleared) will show before the game restarts. (the score is digit-by-digit, so 13 would show one pixel, then three pixels. Zero is all green pixels).
In the CircuitPython version you restart when you hit A or B. The Makecode/Javascript version will restart after a pause. 

The Circuit Playground display shows your spaceship as a green dot, and the stars and asteroids heading toward you in a 10 pixel-wide display - this is a portion of the 100 pixel wide hyperspace lane you patrol (think of the "lane" as a circle - you move left or right in in and will wrap all the way around if you play long enough). Your ship fires toward oncoming objects - so when you reverse cours the laser blasts (yellow dots) move towards the oncoming objects.

Bonus: You can see MORE pixels if you attach https://www.adafruit.com/product/3811 - the 30 pixel Adafruit neopixel strip using A1 as the control - then you'll get a 30 pixel wide one-dimensional display!

```
Switch to the right to turn off sound.
```
* bach.py - provides musical tones - copy to Circuit Playground for starfighter.py
* starfighter.py - 1D starfighter patrol game. Destroy asteroid threats. copy to code.py on your Circuit Playground
* starfighter.js - Javascript version Makecode link: https://makecode.com/_RocF4AHbY19R

```
  A - fire laser
  B - reverse direction
  A4 - hyperspace
  A3 - restart game
  A7 - show last score
```  
