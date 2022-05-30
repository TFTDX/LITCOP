function BMI(weight, height) {
  return weight / (height * height);
}

document.getElementById("calculateBMI").onclick = function () {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = BMI(weight, height);

  document.getElementById("bmi-results").innerText =
    "Your BMI is: " + bmi + "\n";

  if (bmi < 18.5) {
    document.getElementById("bmi-results").innerText += "Eat more?";
  } else if (bmi < 25) {
    document.getElementById("bmi-results").innerText += "Ok normie?";
  } else {
    document.getElementById("bmi-results").innerText += "Get help?";
  }
};

function incomeTax(income) {
  if (income < 20001) return 0;
  else if (income < 30001) return (income - 20000) * 0.02;
  else if (income < 40001) return 200 + (income - 30000) * 0.035;
  else alert("Wow u make so much money the calculator cant calculate");
}

document.getElementById("calculateIncomeTax").onclick = function () {
  const income = document.getElementById("income").value;

  if (income.trim() === "") return alert("Please enter your income");
  if (income < 0) return alert("Why u in debt... in debt no need tax");

  const tax = incomeTax(income);

  document.getElementById("tax-results").innerText =
    "Your tax payable is: " + tax;
};
