//business logic:
var initialInfoArray = [];
var depositWithdrawArray = [];
var currentBalanceArray = [];

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(depositAmount) {
  this.balance += depositAmount;
}

BankAccount.prototype.withdraw = function(withdrawAmount) {
  this.balance -= withdrawAmount;
}



//user interface logic:
$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#register-name").val();
    var inputedAmount = $("input#initial-deposit").val();
    var newBankAccount = new BankAccount(inputtedName, inputedAmount);
    console.log(newBankAccount);

  $("form#banking").submit(function(event){
    event.preventDefault();

    var depositAmount = $("#deposit-amount").val();
    var withdrawAmount = $("#withdraw-amount").val();






    })

  })
})
