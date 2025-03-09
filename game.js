let gameResult = document.getElementById("gameResult");
let userinput=document.getElementById("userInput");
let randomnumber=Math.ceil(Math.random()*100);
function checkGuess(){
    user=parseInt(userinput.value);
    if(user<randomnumber){
        gameResult.textContent="Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(user>randomnumber){
        gameResult.textContent="Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(user === randomnumber){
        gameResult.textContent="Congratulations,You Got It Right";
        gameResult.style.backgroundColor = "green";
    }
    else{

        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "red";
    }
}