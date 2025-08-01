console.log("What do you think you're doing");

window.onload = function() {
  dogcheck();
};

function dogcheck() {
  const dogs = ["Dogs", "Dog", "dog", "dogs", "DOGS", "DOG"];
  const dogAnswer = prompt("Dogs or Cats");

  if (dogs.includes(dogAnswer)) {
    alert("NO DOG PEOPLE ALLOWED");
    window.location.assign("https://www.thesprucepets.com/why-cats-are-better-than-dogs-554880");
  } else {
    alert("Welcome");
  }
}
