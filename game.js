let compScore=0;
let userScore=0;

const choices=document.querySelectorAll(".choices");
const msg = document.querySelector("#msg")
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
}
const userScorePara= document.querySelector("#userScore");
const compScorePara= document.querySelector("#compScore");

const drawGame = () => {
    console.log("It was a draw");
    msg.innerText="Draw";
    msg.style.backgroundColor="grey";

}
const showWinner =(userWin,compChoice,userChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win .Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice === "scissors"? false : true
        }else 
        {userWin=compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
        
    });
    
});