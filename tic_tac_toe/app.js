let btns=document.querySelectorAll(".btn");
let turn =true;
let ar=[0,1,2,3,4,5,6,7,8];
let winning=[[0,1,2],
             [0,3,6],
             [0,4,8],
             [1,4,7],
             [3,4,5],
             [2,5,8],
             [6,7,8],
             [6,4,2]];
for(let b of btns){
	b.addEventListener("click",(e)=>{
		checkWinner();
			b.innerText="X";
			b.disabled=true;
		
			let ar1=array(b.id);
			   
			console.log(ar1);
			computerMove(ar1);
 
        

		
      
	})
}
function computerMove(ar){
	let comp=ar[Math.floor(Math.random()*ar.length)];
	console.log(comp);
	btns[comp].innerText="O";
	btns[comp].disabled=true;
}
function disableBtn(){
	for(let b of btns){
		b.disabled=true;
	}
}
function array(user){
	
	for(let i=0;i<ar.length;i++){
		if(ar[i]==user){
           ar.splice(i,1);
		}
	}
return ar;
}

function checkWinner(){
for(let w of winning){
	let a=btns[w[0]].innerText;
	let c=btns[w[1]].innerText;
	let d=btns[w[2]].innerText;
	if(a!=""&&c!=""&&d!=""){
	if(a==c&&c==d){
		console.log(a, "winner");
	    disableBtn();

	}
	else{
		console.log( "draw");
		  disableBtn();
	}
}

}

}