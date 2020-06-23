var turn_winner;
var user_count = 0;
var comp_count = 0;
var final_winner;
const getUserChoice = (userInput) => {
  if (userInput==="rock"|| userInput==="paper"||userInput==="scissors" || userInput==="bomb")
userInput=userInput.toLowerCase();
console.log(`You entered        :${userInput}`)
if (userInput==="rock"|| userInput==="paper"||userInput==="scissors" || userInput==="bomb")
  return userInput;
else
  console.log("Enter valid input");
                                     
}
//getUserChoice("rock");
//console.log(getUserChoice("Rock"));
function getComputerChoice(){
  var choice=Math.floor(Math.random()*3);
  //console.log(choice);
  if(choice===0)
    return "rock"
  else if (choice===1)
    return "paper"
  else 
    return "scissors"
}
function determineWinner(input){
  if(user_count===5){
    console.log("You won the game :D :D");
    final_winner = "user";
    document.getElementById("hide_split_4").style="visibility:visible";
    reset();
  }
  else if (comp_count===5){
    console.log("You won the game :D :D");
    final_winner = "computer";
    document.getElementById("hide_split_4").style="visibility:visible";
    reset();
  }
  else{

  //var turn_winner;

  var user = getUserChoice(input);
  var computer = getComputerChoice();
  document.getElementById("hide_split_4").style="visibility:hidden";
  console.log(`Computer choice is :${computer}`);
  if(computer===user){
    console.log("Tie");
    turn_winner="tie";
  }
  else if(computer==="rock" && user==="paper"){
    console.log("User won"); 
    turn_winner="user"; 
    user_count++;
  }

  else if(computer==="rock" && user==="scissors"){
    console.log("You loose!");
    turn_winner="computer";
    comp_count++;
  }
    
  else if(computer==="paper"&& user==="scissors"){
    console.log("You won");
    turn_winner="user";
    user_count++;
  }

  else if(computer==="paper"&& user==="rock")
  {
    console.log("You loose!");
    turn_winner="computer";
    comp_count++;
  }
  else if(computer==="scissors"&& user==="rock")
  {
    console.log("You won");
    turn_winner="user";
    user_count++;
  }
  else if(computer==="scissors"&& user==="paper")
  {
    console.log("You loose!");
    turn_winner="computer";
    comp_count++;
  }
  else if(user==="bomb"){
    console.log("User win with a bomb")
    turn_winner="user";
    user_count++;
  }
if(user_count===5){
    console.log("You won the game :D :D");
    final_winner = "user";
  }
else if (comp_count===5){
    console.log("You won the game :D :D");
    final_winner = "computer";
}
console.log(`user count is : ${user_count}`);
console.log(`comp count is : ${comp_count}`);
document.getElementById("user_ans").innerHTML = user;
document.getElementById("user_points").innerHTML = user_count;
document.getElementById("comp_ans").innerHTML = computer;
document.getElementById("comp_points").innerHTML = comp_count;
document.getElementById("result").innerHTML = turn_winner;
document.getElementById("final_winner").innerHTML = final_winner;
if(final_winner==="user") {
document.getElementById("hide_split_4").style="visibility:visible";
document.getElementById("congrats").src= "https://www.pngkit.com/png/full/842-8422095_scmy2019emoji-sticker-partying-face-emoji.png";
document.getElementById("congrats_text").innerText = "Hurrayyyy !!! You won the game."
}
else if(final_winner==="computer"){
document.getElementById("hide_split_4").style="visibility:visible";
document.getElementById("congrats").src= "https://i.pinimg.com/originals/da/8c/21/da8c2163061be58d770f6f9af78258e8.png";
document.getElementById("congrats_text").innerText = "You loose! Better luck next time"
}

}
}
function reset(){
user_count=0;
comp_count=0;
final_winner=0;
console.log("Your game is now reset!");
document.getElementById("user_points").innerHTML = user_count;
document.getElementById("comp_points").innerHTML = comp_count;
document.getElementById("final_winner").innerHTML = final_winner;
document.getElementById("hide_split_4").style="visibility:hidden";
}

//determineturnWinner("paper");
