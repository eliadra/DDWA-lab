"use strict"
//расчётный счёт

function CheckingAccount(cashBack, premium){ 
  Account.call(this); //функциональное
 
  this.cashBack = cashBack;
  this.premium = premium;
  
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.getCashBack = function(){
  return this.cashBack;
}
CheckingAccount.prototype.jsonToObject = function(json){
       var obj = json;
       this.username = obj["username"];
       this.password = obj["password"];
       this.dateOfCreate = obj["date"];
       this.userType = obj["userType"];
       this.amount = obj["amount"];
       this.cashBack = obj["cashBack"];
       this.premium = obj["premium"];
}
CheckingAccount.prototype.setCashback = function(newPercent){
  this.cashBack = newPercent;
}
CheckingAccount.prototype.getPremium = function(){
  if(this.premium == "on") return true;
  else return false;
}
CheckingAccount.prototype.setPremium = function(val){
  this.premium = val;
}
