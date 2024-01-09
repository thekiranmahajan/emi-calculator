const loanAmount = document.getElementById("amount");
const interestRate = document.getElementById("interest");
const monthsToPay = document.getElementById("month");
const EMI = document.getElementById("emi");

const emiCalculator = () => {
  let interest =
    (loanAmount.value * (interestRate.value * 0.01)) / monthsToPay.value;
  let monthlyPay = loanAmount.value / monthsToPay.value + interest;
  EMI.innerText = monthlyPay.toFixed(2);
};

loanAmount.addEventListener("change", emiCalculator);
interestRate.addEventListener("change", emiCalculator);
monthsToPay.addEventListener("change", emiCalculator);
