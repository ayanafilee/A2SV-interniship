// const myImage = document.getElementById("toggleImage");

// myImage.addEventListener("click", () => {
//   const currentSrc = myImage.getAttribute("src");

//   if (currentSrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// });

var buttons = document.querySelector("button");
var headline = document.querySelector("h1");
function setName() {
  var name = prompt("please enter the name  ");
  headline.textContent = `wellcome back ${name}`;
}
buttons.addEventListener("click", setName);

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Mozilla is cool, ${myName}`;
//   }
// }

// // if (!localStorage.getItem("name")) {
// //   setUserName();
// // } else {
// //   const storedName = localStorage.getItem("name");
// //   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// // }
// myButton.addEventListener("click", () => {
//   setUserName();
// });
