// script.js

// Initial Balance
let balance = 1000;

// DOM Elements
const balanceDisplay = document.getElementById("balance");
const depositInput = document.getElementById("deposit-amount");
const depositButton = document.getElementById("deposit-btn");
const withdrawInput = document.getElementById("withdraw-amount");
const withdrawButton = document.getElementById("withdraw-btn");

// Function to update the balance on the page
function updateBalanceDisplay() {
  balanceDisplay.textContent = balance.toFixed(2); // Ensure balance is always displayed as a decimal
}

// Deposit Functionality
depositButton.addEventListener("click", () => {
  const depositAmount = parseFloat(depositInput.value);
  if (depositAmount > 0) {
    balance += depositAmount;
    updateBalanceDisplay();//
  } else {
    alert("Please enter a valid deposit amount.");
  }
  depositInput.value = ""; // Clear the input field
});

// Withdraw Functionality
withdrawButton.addEventListener("click", () => {
  const withdrawAmount = parseFloat(withdrawInput.value);
  if (withdrawAmount > 0) {
    if (withdrawAmount <= balance) {
      balance -= withdrawAmount;
      updateBalanceDisplay();
    //   alert(Withdrawn $${withdrawAmount.toFixed(2)} successfully!);
    } else {
      alert("Insufficient balance! Unable to withdraw.");
    }
  } else {
    alert("Please enter a valid withdrawal amount.");
  }
  withdrawInput.value = ""; // Clear the input field
});
