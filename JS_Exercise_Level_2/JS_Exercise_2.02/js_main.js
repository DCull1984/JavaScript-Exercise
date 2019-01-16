function reduceToOne(){
	let n = +document.getElementById("Num").value;

	do{
		if(n%3 === 0){
			n = n/3;
		}
		//else if((n+1)%3 == 0){
		//	n = n/3;
		//}
		else if((n-1)%3 == 0){
			n = n/3;
		}
		else{
		
		}
		console.log(n);
	}while(n > 1)
}