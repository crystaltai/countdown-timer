# Countdown Timer

Project to create countdown timer, allowing user to input # of seconds and to start/pause the timer

**🔗 Live preview:** https://crystaltai.github.io/countdown-timer/

![](https://github.com/crystaltai/countdown-timer/blob/main/countdown-timer-demo.gif)

## Built with

### Technologies

- HTML
- CSS
- JS

### Tools

- Visual Studio Code
- Git and GitHub

### Third party code

- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## Summary

### What I learned

4/20/22

- Practiced creating a class Timer and instantiating a new instance of it
  - Used a constructor function to accept arguments that would be accessible by the methods of the class
  - Also passed in a callbacks parameter to the constructor function, to accept callback functions added during the instantiation of a new Timer
    - Since the callback functions were passed into the constructor function, the class's methods were able to access them
  - Used getter and setter functions to get the time input value and set the input value, respectively
    - Using getter and setter functions allowed me to pass the logic as an instance variable (instead of a function)
- Created first circle using an SVG element, positioning and sizing the circle to fit around the timer and timer controls
  - Learned to use fill, stroke and stroke-dashoffset properties to illustrate a visual countdown

### Project Summary

4/20/22

- A countdown timer that allows user to input time (in seconds), start and pause the timer
