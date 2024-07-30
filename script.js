const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const mynum = document.getElementById("mynum");
const answer = document.getElementById("answer");

let max=10;
let min = 1;
let x  = Math.floor(Math.random()*(max-min+1) +min );
let attemp =0;
button1.onclick = function(){
     attemp++;
     let y = Number(mynum.value);
   if(x==y){
    answer.textContent=`yes it is ${x} and it took u ${attemp} attempts`;
   
   }
   else if(x<y){
    answer.textContent = ` too high! try again`;
   }
   else {
    answer.textContent = `too low! try again`;
   }
   //answer.textContent=mynum.value;
}
button2.onclick = function(){
    attemp=0;
    mynum.value="";
    answer.textContent="";
    x  = Math.floor(Math.random()*(max-min+1) +min );

}