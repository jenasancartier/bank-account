//business logic:
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
    var inputtedAmount = parseInt($("input#initial-deposit").val());
    var newBankAccount = new BankAccount(inputtedName, inputtedAmount);
    console.log(newBankAccount);
    $("form#banking").show();
    $("#currentBalance").text(newBankAccount.balance);

  $("form#banking").submit(function(event){
    event.preventDefault();
    var depositAmount = parseInt($("#deposit-amount").val());
    var withdrawAmount = parseInt($("#withdraw-amount").val());
    newBankAccount.withdraw(withdrawAmount);
    newBankAccount.deposit(depositAmount);
    console.log(newBankAccount.balance);
    $("currentBalance").empty("");
    $("currentBalance").text(newBankAccount.balance);
    });
  });
})
