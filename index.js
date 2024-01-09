const loanInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const monthInput = document.getElementById("month");
const resultEMI = document.getElementById("emi");

const emiCalculator = () => {
  const LoanAmount = parseFloat(loanInput.value);
  const annualInterest = parseFloat(interestInput.value);
  const monthsToPay = parseInt(monthInput.value);
  const monthlyInterest = (annualInterest * 0.01) / 12;

  const EMI = (
    (LoanAmount *
      monthlyInterest *
      Math.pow(1 + monthlyInterest, monthsToPay)) /
    (Math.pow(1 + monthlyInterest, monthsToPay) - 1)
  ).toFixed(2);
  resultEMI.innerText = EMI;
};

loanInput.addEventListener("change", emiCalculator);
interestInput.addEventListener("change", emiCalculator);
monthInput.addEventListener("change", emiCalculator);
emiCalculator();
