var myImage = document.querySelector('img')
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc ==='images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png')
    } else {
        myImage.setAttribute('src','images/firefox-icon.png')
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('myNameTitle', myName);
  myHeading.innerHTML = myName;
}

myButton.onclick = setUserName

// 这是初始化
if(!localStorage.getItem('myNameTitle')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('myNameTitle');
    myHeading.innerHTML = storedName;
  }