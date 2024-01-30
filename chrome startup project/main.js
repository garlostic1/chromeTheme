document.addEventListener("DOMContentLoaded", function() {
  var inputElement = document.getElementById("textInput");
  var formElement = document.getElementById("searchForm");
  var searchIcon = document.getElementById("searchIcon");

  document.addEventListener("keydown", function(event) {
    if (event.key.length === 1) {
      // Handle regular key presses (ignore special keys like Enter or Backspace)
      inputElement.value += event.key;
      inputElement.classList.add("active");
    } else if (event.key === "Backspace") {
      // Handle Backspace key
      inputElement.value = inputElement.value.slice(0, -1);
      if (inputElement.value.length === 0) {
        inputElement.classList.remove("active");
      }
    } else if (event.key === "Enter") {
      // Handle Enter key
      formElement.submit();
    }
  });

  inputElement.addEventListener("input", function() {
    if (inputElement.value.length === 0) {
      inputElement.classList.remove("active");
    } else {
      inputElement.classList.add("active");
    }
  });

  inputElement.addEventListener("blur", function() {
    if (inputElement.value.length === 0) {
      inputElement.classList.remove("active");
    }
  });

  searchIcon.addEventListener("mouseover", function() {
    inputElement.parentElement.classList.add("hover");
  });

  searchIcon.addEventListener("mouseout", function() {
    inputElement.parentElement.classList.remove("hover");
  });
});
