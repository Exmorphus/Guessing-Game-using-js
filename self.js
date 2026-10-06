let againBtn = document.querySelector(".again");
let guessnumber = document.querySelector(".number");
let guessvalue = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gamescore = document.querySelector(".score");
let highestscore = document.querySelector(".highest");
let score = 20;
let randomnumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomnumber);

checkBtn.addEventListener("click", ()=>{
    let val = Number(guessvalue.value);
    if(!val){
        msg.textContent = "Enter a Value"
    }
    else if( val==randomnumber){
        document.body.style.backgroundColor="green";
        guessnumber.textContent = randomnumber;
        msg.textContent = "Correct Answer";
        guessvalue.value=""
    }
    if(val>randomnumber){
        msg.textContent = "Too High";
        highestscore.textContent = score;

    }
    else if(val<randomnumber){
        msg.textContent = "Too Low";
        score--;
        gamescore.textContent = score;
    }
    
    })

    againBtn.addEventListener("click",()=>{
        document.body.style.backgroundColor="#222";
        msg.textContent="Start Guessing...";
        guessnumber.textContent="?";
        gamescore.textContent = score;
        randomnumber=Math.trunc(Math.random() * 20) + 1;
        console.log(randomnumber);
        
    })