"use strict" //strogi regime for all script

function Account(pass, date, name){
	var accountId;
	var username = name;
	var password = pass;
	var dateOfCreate = date;
	var userType = "off"; //active
	var amount = 0.0; 
	
}
Account.prototype.setId = function(id){
		this.accountId = id;
	}
	
	Account.prototype.getId = function(){
		return this.accountId;
	}

	Account.prototype.getPassword = function(){
		return this.password;
	}
	Account.prototype.setPassword = function(pass){
		this.password = pass;
	}

	Account.prototype.getName = function(){
		return this.username;
	}
	
	Account.prototype.setName = function(name){
		this.username = name;
	}

	Account.prototype.getDate = function(){
		return this.dateOfCreate;
	}
	
	Account.prototype.setDate = function(date){
		this.date = date;
	}

	Account.prototype.getType = function(){
		if(this.userType == "on") return true; //on
		else return false;
	}
	
	Account.prototype.setType = function(type){
		this.userType = type;
	}

	Account.prototype.getAmount = function(){
		return this.amount;
	}
	
	Account.prototype.setAmount= function(money){
		this.amount = money;
	}	

