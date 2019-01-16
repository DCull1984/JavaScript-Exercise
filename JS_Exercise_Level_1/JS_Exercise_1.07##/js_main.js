/* let person(name,age,job){name:"",
		   age:"",
		   job:""
}; */

function personInput(){
	let name = document.forms["myForm"]["fname"].value;
	if(name == ""){
		alert("Please enter your name");
		return false;
		}
	
	let age = document.forms["myForm"]["fage"].value;
	if(age == ""){
		alert("Please enter your age");
		return false;
		}
		
	let occupation = document.forms["myForm"]["foccupation"].value;
	if(occupation == ""){
		alert("Please enter your job");
		return false;
		}
		
	document.cookie = name + ", " + age + ", " + occupation;
	}

function callBack(){
	console.log(document.cookie);
		
	/* for(let i = 0; i < who.length; i++){
		text += who.elements[i].value + "<br/>";
	} */
}