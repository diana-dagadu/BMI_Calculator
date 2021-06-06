let result = document.getElementById("result")
let btn = document.getElementById("btn")

// Validation function
const isNotZeroOrNotANum = (value) =>
  value <= 0 || isNaN(value) ? true : false;

  // BMI Calculation function
const bmiCalculatorAdvanced = () => {

  // collecting user input
  let height = document.getElementById("height").value
  let weight = document.getElementById("weight").value

  // Invalid message display
  let output;

  // Checking for invalid inputs
  if (isNotZeroOrNotANum(weight)) {
    output = `Weight and height should be a number greater than 0.`;
  } else if (isNotZeroOrNotANum(height)) {
    output = `Weight and height should be a number greater than 0.`;

  } else {
    // converting values into floating point numbers
    const wgtVal = parseFloat(weight);
    const hgtVal = parseFloat(height);

    // calculating BMI
    const bmi = Math.round(wgtVal / Math.pow(hgtVal, 2));

    // Displaying message based on user's BMI
    if (bmi < 18.5) {
      output = `Your BMI is ${bmi}kg/m<sup>2</sup>, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      output = `Your BMI is ${bmi}kg/m<sup>2</sup>, so you have a normal weight.`;
    } else {
      output = `Your BMI is ${bmi}kg/m<sup>2</sup>, so you are overweight.`;
    }
  }
 
// returning results
  return (result.innerHTML = output);
};

// button event listener
btn.addEventListener(`click`, bmiCalculatorAdvanced);