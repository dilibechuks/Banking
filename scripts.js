const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
const transfers = [];
const AcctNumber = [2063992881, 8033014478];
const acctPIN = [1111, 2222];
const acctNameField = ["Nwadilibe Chukwuemeka", "Ojimadu Jerry"];
let totalBalance = 100000;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");
const userTransferNumber = document.getElementById("userTransferAcctNumber");
const userTransferAmount = document.getElementById("userTransferAmount");
const btnTransfer = document.getElementById("btnTransfer");
const btnBalance = document.getElementById("btnCheckBalance");
const lastTransaction = document.getElementById("lastTransactionLbl");
const btnLastTransaction = document.getElementById("btnLastTransaction");
const CreateAcctNumber = document.getElementById("createdAccountNumber");
const CreateAcctName = document.getElementById("createAcctName");
const CreatePin = document.getElementById("createPin");
const loginNumber = document.getElementById("loginAcctNumber");
const loginPin = document.getElementById("loginPin");
const transact = document.getElementById("inputs");
const welcomeNote = document.getElementById("welcomeMessage");

// Create Account Script
function Login() {
  if (loginNumber.value == "" || loginPin.value == "") {
    alert("Account Number or PIN is missing");
  } else if (
    loginNumber.value == AcctNumber[0] &&
    loginPin.value == acctPIN[0]
  ) {
    transact.style.visibility = "visible";
    document.getElementById("loginDivision").style.visibility = "hidden";
    welcomeNote.innerText = `Welcome, ${acctNameField[0]}`;
    // alert("Welcome User1");
  } else if (
    loginNumber.value == AcctNumber[1] &&
    loginPin.value == acctPIN[1]
  ) {
    transact.style.visibility = "visible";
    document.getElementById("loginDivision").style.visibility = "hidden";
    welcomeNote.innerText = `Welcome, ${acctNameField[1]}`;
    // alert("Welcome User2");
  } else if (
    loginNumber.value == AcctNumber[2] &&
    loginPin.value == acctPIN[2]
  ) {
    transact.style.visibility = "visible";
    document.getElementById("loginDivision").style.visibility = "hidden";
    welcomeNote.innerText = `Welcome, ${acctNameField[2]}`;
    // alert("Welcome User3");
  } else if (
    loginNumber.value == AcctNumber[3] &&
    loginPin.value == acctPIN[3]
  ) {
    transact.style.visibility = "visible";
    document.getElementById("loginDivision").style.visibility = "hidden";
    welcomeNote.innerText = `Welcome, ${acctNameField[3]}`;
    // alert("Welcome User4");
  } else if (
    loginNumber.value == AcctNumber[4] &&
    loginPin.value == acctPIN[4]
  ) {
    transact.style.visibility = "visible";
    document.getElementById("loginDivision").style.visibility = "hidden";
    welcomeNote.innerText = `Welcome, ${acctNameField[4]}`;
    // alert("Welcome User5");
  } else {
    alert("You have entered an incorrect Account Number or PIN");
  }
}

function createAccount() {
  if (CreateAcctName.value == "" || CreatePin.value == "") {
    alert("Account Name or PIN is missing");
  } else if (CreateAcctName.value != "" && CreatePin.value != "") {
    AcctNumber.push(
      Number(Math.floor(1000000000 + Math.random() * 9999999999))
    );
    acctPIN.push(CreatePin.value);
    acctNameField.push(CreateAcctName.value);
    CreateAcctNumber.textContent = `Successful! New Account Number is:  ${
      AcctNumber[AcctNumber.length - 1]
    }`;
  }
}

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2,
  /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
});
//View Account Balance
function balance() {
  acctBalanceLbl.style.visibility = "visible";
}

// accept deposits from user, store deposits in array
btnDeposit.addEventListener("click", () => {
  // checks if deposit is a number
  if (isNaN(userDeposit.value)) {
    alert("Please enter a number.");
    return (userDeposit.value = "");
  } else {
    // checks if deposit meets parameters
    if (userDeposit.value < 1 || userDeposit.value > 10000000) {
      alert("You can only deposit between NGN1 and NGN10,000,000.");
      return (userDeposit.value = "");
    } else {
      // push deposit to array
      deposits.push(Number(userDeposit.value));

      // calculate Total Balance
      totalBalance += Number(userDeposit.value);
      lastTransaction.innerText = `Deposit: NGN${
        deposits[deposits.length - 1]
      } on ${new Date().toLocaleDateString()}`;

      // format TotalBalance to show NGN XX.XX (2 decimal places)
      let totalBalanceFormatted = formatter.format(totalBalance);
      document.getElementById("acctBalanceLbl").innerHTML =
        totalBalanceFormatted;

      // print deposit to console to verify success
      console.log("NGN" + userDeposit.value);
      return (userDeposit.value = "");
    }
  }
});

// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener("click", () => {
  // checks if withdrawal is a number
  if (isNaN(userWithdraw.value)) {
    alert("Please enter a number.");
    return (userWithdraw.value = "");
  } else {
    // checks if withdrawal meets parameters
    if (userWithdraw.value > totalBalance - 1000) {
      alert("Your total balance cannot drop below NGN1000.");
      return (userWithdraw.value = "");
    }
    if (userWithdraw.value < 1 || userWithdraw.value > 1000000) {
      alert("You can only withdraw between NGN1 and NGN1,000,000.");
      return (userWithdraw.value = "");
    } else {
      // push withdrawal to array
      withdrawals.push(Number(userWithdraw.value));
      // calculate Total Balance
      totalBalance -= Number(userWithdraw.value);

      //Display the last withdrawal
      lastTransaction.innerText = `Withdrawal: NGN${
        withdrawals[withdrawals.length - 1]
      } on ${new Date().toLocaleDateString()}`;

      // format TotalBalance to show NGN XX.XX (2 decimal places)
      let totalBalanceFormatted = formatter.format(totalBalance);
      document.getElementById("acctBalanceLbl").innerHTML =
        totalBalanceFormatted;

      // print withdrawal to console to verfify success
      console.log("NGN" + userWithdraw.value);
      return (userWithdraw.value = "");
    }
  }
});

btnTransfer.addEventListener("click", () => {
  // checks if transfer is a number
  if (isNaN(userTransferAmount.value) || isNaN(userTransferNumber.value)) {
    alert("Please check the recipient account number or amount");
    return (userTransferAmount.value = ""), (userTransferNumber.value = "");
  } else {
    // checks if transfer is greater than the balance
    if (userTransferAmount.value > totalBalance - 1000) {
      alert("Your total balance cannot drop below NGN1000.");
      return (userTransferAmount.value = ""), (userTransferNumber.value = "");
    }
    if (userTransferAmount.value < 1 || userTransferAmount.value > 1000000) {
      alert("You can only transfer between NGN1 and NGN1,000,000.");
      return (userTransferAmount.value = ""), (userTransferNumber.value = "");
    } else {
      // push transfer to array
      transfers.push(Number(userTransferAmount.value));
      // calculate Total Balance
      totalBalance -= Number(userTransferAmount.value);

      //Display the last withdrawal
      lastTransaction.innerText = `Transfer: NGN${
        transfers[transfers.length - 1]
      } on ${new Date().toLocaleDateString()}`;

      // format TotalBalance to show NGN XX.XX (2 decimal places)
      let totalBalanceFormatted = formatter.format(totalBalance);
      document.getElementById("acctBalanceLbl").innerHTML =
        totalBalanceFormatted;

      // print withdrawal to console to verfify success
      console.log("NGN" + userWithdraw.value);
      return (userWithdraw.value = "");
    }
  }
});

// format TotalBalance to show NGN XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

function login2() {
  document.getElementById("createDivision").style.visibility = "hidden";
  document.getElementById("loginDivision").style.visibility = "visible";
}

function create2() {
  document.getElementById("createDivision").style.visibility = "visible";
  document.getElementById("loginDivision").style.visibility = "hidden";
}

function logout() {
  document.getElementById("loginDivision").style.visibility = "visible";
  transact.style.visibility = "hidden";
  return (loginPin.value = ""), (loginNumber.value = "");
}
