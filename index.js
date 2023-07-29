var nameField = document.getElementById("nameField");

document.querySelector("#sign-in-btn").addEventListener("click", function () {
  const formBox = document.querySelector(".form-box");
  formBox.classList.add("active");
  document.querySelector("#sign-in-btn").classList.remove("disable");
  document.querySelector("#sign-up-btn").classList.add("disable");
  setTimeout(() => {
    formBox.querySelector("h1").innerHTML = "Sign In";
    formBox.classList.remove("active");
  }, 1000);
  nameField.style.maxHeight = "0";
  nameField.style.padding = "0";
});

document.querySelector("#sign-up-btn").addEventListener("click", function () {
  const formBox = document.querySelector(".form-box");
  formBox.classList.add("active");
  document.querySelector("#sign-up-btn").classList.remove("disable");
  document.querySelector("#sign-in-btn").classList.add("disable");
  setTimeout(() => {
    formBox.querySelector("h1").innerHTML = "Sign Up";
    formBox.classList.remove("active");
  }, 1000); // Change the text after 1 second (same as the transition duration)
  nameField.style.maxHeight = "65px"; // Set the original max-height value
  nameField.style.padding = "20px";
});
