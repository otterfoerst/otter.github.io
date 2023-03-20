alert('Выдра сказала ку. Ок?');
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vidra2.png') {
      myImage.setAttribute ('src','images/vidra.webp');
    } else {
      myImage.setAttribute ('src','images/vidra2.png');
    }
}
document.querySelector('h2').onclick = function() {
    alert('Не бупай');
  }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пож введи позывной.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Привет, друг, ' + myName;
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ну здарова, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
  }