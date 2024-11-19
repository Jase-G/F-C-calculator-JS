// JS Average Calculator
// this website will calculate the average of 3 numbers

//HTML vars
var input1El = document.getElementById("input1");
var avgBtnEl = document.getElementById("avg-btn");
var avgOutEl = document.getElementById("avg-out");
var imgEl = document.getElementById("img");
var linkEl = document.getElementById("link");

console.log(input1El);
console.log(avgBtnEl);
console.log(avgOutEl);

// Event Listener
avgBtnEl.addEventListener("click", calcAverage);

function calcAverage() {
  //input: save 3 numbers as variables.

  let num1 = Number(input1El.value); // or +input1El.value

  //process: calculate average, round the result to one decimal place.
  let average = ((num1 - 32) * 5) / 9;
  average = average.toFixed(0);

  //output: display the answer where the dashes are in HTML
  avgOutEl.innerHTML = average;
  console.log(average);

  //add image
  imgEl.src = "images/thermometer.jpg";
  imgEl.style.width = "50px";

  //clear inputs
  input1El.value = "";

  //change link
  linkEl.href = "https://www.google.com/";

  //change background of inputs
  avgBtnEl.style.backgroundColor = "#26d978";
  avgOutEl.style.border = "2px darkgreen solid";
  avgOutEl.style.padding = "5px 10px";
}
