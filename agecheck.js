function agecheck() {

 age = prompt("How old are you: ")
if (age > 12){
alert("Welcome")
sessionStorage.setItem("Age", age);
}
else {
  alert("you are way too young")
window.location.assign("https://google.com)
}


}
