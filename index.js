buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click",function(){
      var button_char = this.innerHTML;
      playSound(button_char);
      showAnimation(button_char);
    });
}


//Detecting keyboard press
document.addEventListener("keypress", function(event){
  playSound(event.key);
  showAnimation(event.key);
  });


//Plays relevant sound
function playSound(button_char)
{
  switch(button_char)
  {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
  }
}

function showAnimation(button_char)
{
  var active_button = document.querySelector("." + button_char);
  active_button.classList.add("pressed");
  setTimeout(function(){
      active_button.classList.remove("pressed");
    },100);
}
