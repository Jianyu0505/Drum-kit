var numOfDrum = document.querySelectorAll(".drum").length;

for (i=0; i <numOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

      var buttonInnerHTML = this.innerHTML;
      makeSounds(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

  });
}


document.addEventListener('keypress', function(event) {
  makeSounds(event.key);
  buttonAnimation(event.key);
});



function makeSounds(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
    break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    default:

  }
};

function buttonAnimation(currentButton){
  var actuveButton = document.querySelector("." + currentButton);

  actuveButton.classList.add("pressed");

  setTimeout(function(){
  actuveButton.classList.remove("pressed");
}, 100);
}




// document.addEventListener('keydown', function(e) {
//   if (e.keyCode === 87) {
//     var crash = new Audio("sounds/crash.mp3");
//     crash.play();
//   } else if (e.keyCode === 65) {
//     var kickBass = new Audio("sounds/kick-bass.mp3");
//     kickBass.play();
//   } else if (e.keyCode === 83) {
//     var snare = new Audio("sounds/snare.mp3");
//     snare.play();
//   } else if (e.keyCode === 68) {
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//   } else if (e.keyCode === 74) {
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//   } else if (e.keyCode === 75) {
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//   } else if (e.keyCode === 76) {
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//   }
// });
