myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/11.png") {
    myImage.setAttribute("src", "images/12.jfif");
  } else {
    myImage.setAttribute("src", "images/11.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `We love ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `We love ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
