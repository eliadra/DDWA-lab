"use strict"
//накопительный счёт

function SavingsAccount(rate, term){
   Account.call(this);
   this.rate = rate;
   this.term = term;
}
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.getRate = function(){
  return this.rate;
}
SavingsAccount.prototype.jsonToObject = function(json){
       var obj = json;
       this.username = obj["username"];
       this.password = obj["password"];
       this.dateOfCreate = obj["date"];
       this.userType = obj["userType"];
       this.amount = obj["amount"];
       this.rate = obj["rate"];
       this.term = obj["term"];
}
SavingsAccount.prototype.setRate = function(newRate){
  this.rate = newRate;
}
SavingsAccount.prototype.getTerm = function(){
  return this.term;
}
SavingsAccount.prototype.setTerm = function(newTerm){
  this.term = newTerm;
}
