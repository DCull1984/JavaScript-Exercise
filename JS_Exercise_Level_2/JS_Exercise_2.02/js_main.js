function reduceToOne(){
	let n = +document.getElementById("Num").value;
	do{
		if(n%3 === 0){
			n = n/3;
		}
		else if(n%3 != 0){
			if(n%3 != 0){
				n+=1;
			}
			else{
			n-=1;}
			}
		else{
		
		}
		console.log(n);
	}while(n > 1)
}