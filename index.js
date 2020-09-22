//Creating variables for the html elements:
//1.The input box where the user enters a time 
//2.The Start button 
//3.The Pause button 
//4.The circle onject we are using to create an animation 

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

//To get the animation to work we need to define the perimeter of the circle and set an atrribute to 'stroke-dasharray' which is a presentation attribute for defining the pattern of dashes and gaps used to paint the outline of the shape. We can then manipulate this attribute to get the perimeter to decrease the perimeter by a set amount each time an interval of time has passed
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

//Declaring a duration variable into which we will save the inital timer duration input by the user
let duration;

//The timer function depends on a class Timer, in which as an argument we pass three functions that represent what the code will do when the differnt actions are triggered
const timer = new Timer(durationInput, startButton, pauseButton, {
 //Setions the duration variable when start button is clicked 	
  onStart(totalDuration) {
    duration = totalDuration;
  },
//Sets the interval that defines the set amount the perimiter will decrease by
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 		   
	perimeter*timeRemaining/duration-perimeter
	);
  },
//Represents the completion of the timer
  onComplete() {
    console.log('Timer is completed');
  }
});
