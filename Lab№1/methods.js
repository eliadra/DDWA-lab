"use strict"

var url = "http://localhost:3000/posts/";

function Template(method, id, object, func){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = func;    
		
			if(id==null){
				xhr.open(method,url,true)
			}
		
		else xhr.open(method,url+id,true)
		xhr.setRequestHeader("Content-Type", "application/json")
		if(object!=null) xhr.send(JSON.stringify(object))
		else xhr.send()
	}

function Get(id, func){
		Template("GET",id,null,func)
	}

function GetAll(func){
		Template("GET",null,null,func)
	}	

function Post(card){
		Template("POST",null,card,null)
		alert("Saved");
	}

function Put(id, card){
		Template("PUT",id,card,null)
		alert("Saved");
	}

function Delete(id, func){
		if(confirm("Delete this Account?")){
		Template("DELETE",id,null,func)
	}
}
