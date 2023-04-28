//detecting  button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length ;

for(var i=0;  i<numberOfDrumButtons;  i++) {

 document.querySelectorAll(".drum")[i].addEventListener("click",function(){

//if a button is pressed then we check the innerHTML of the button that got pressed
 var buttonInnerHTML=this.innerHTML;

//now here we send it to makeSound function to make relevant sound
makeSound(buttonInnerHTML);

//now here we are creating button animation based on the click so thereby we need
//to pass our buttonInnerHTML as a parameter becauses "buttonInnerHTML" here identifies
//which is clicked while making a call to buttonAnimation function
buttonAnimation(buttonInnerHTML);

});

}

//detecting keyboard press

//instead if a key was pressed we then send (event.key) or its key property of the event
document.addEventListener("keydown",function(event) {
makeSound(event.key);

//now here we are identifying which key was pressed by "event.key"
//and also we need to make the same button animation so we make a call to buttonAnimation function
//and passs 'event.key' as a parameter
buttonAnimation(event.key);

});


//now our clicks or keypresses reach here inside this function as a parameter-(key)
function makeSound(key){

//now we switch on the basis of keys or instruction as per switch statement
//and relevant sound gets played based on which key was passed in

  switch (key) {
      case "w":
               var tom1 = new Audio("sounds/tom-1.mp3");
               tom1.play();
      break;

      case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
      break;

      case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
      break;

      case "d":
               var tom4 = new Audio("sounds/tom-4.mp3");
               tom4.play();
      break;

      case "j":
               var snare = new Audio('sounds/snare.mp3');
               snare.play();
               break;

     case "k":
     var crash = new Audio('sounds/crash.mp3');
     crash.play();
     break;


     case "l":
     var kick = new Audio('sounds/kick-bass.mp3');
     kick.play();
     break;


    default: console.log(buttonInnerHTML);

  }

}

//adding animation by linking it to a pre styled class in css namely("pressed")

function buttonAnimation(currentKey){
// now as we get the values accordingly from the above functions we now thereby create animations
//here we need to concatenate a '.' with current key because the current key is a single character
var activeButton = document.querySelector("." + currentKey);

//now we need to add a pre defined class property in css named pressed in our activebutton element
activeButton.classList.add("pressed");

//now we need to add a setTimeout functionality so that our animation return back to normal
//otherwise if we just let the above code run we will end up with a constant animation as soon
//as a button is triggered
setTimeout(function(){
  activeButton.classList.remove("pressed");
} , 100 );
}
