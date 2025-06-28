// Get references to DOM elements
var btn = document.getElementById("btn");
var textInput = document.getElementById("text");
var delayInput = document.getElementById("delay");
var output = document.getElementById("output");

// Add click event listener
btn.addEventListener("click", async function() {
  // Get values
  let textValue = textInput.value.trim();
  let delayValue = delayInput.value.trim();

  // Validate input
  if (textValue === "" || delayValue === "") {
    alert("Kindly fill all the fields!");
    return;
  }

  let ms = parseInt(delayValue);

  if (isNaN(ms) || ms <= 0) {
    alert("Please enter a valid positive delay!");
    return;
  }

  // Call async function
  await asyncCall(textValue, ms);
});

// async function to wait and display text
async function asyncCall(text, ms) {
  // Create promise that resolves after ms milliseconds
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve(text);
    }, ms);
  });

  // Wait for promise to resolve
  let result = await myPromise;

  // Show the result
  output.textContent = result;
}
