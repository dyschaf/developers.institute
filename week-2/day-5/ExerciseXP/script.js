function playTheGame(){
let text;
if (confirm("Press a button!") == true) {
} else {
  return "no problem, goodbye";
}

}
let computerNumber
let userNumber
function input(){
    let tries= 0;
    let userNumber = prompt('chose a random number')
    if(isNaN(userNumber)){
        alert(`Sorry Not a number, Goodbye`)
    }else if(userNumber>10||userNumber<0){
        alert(`Sorry it's not a good number, Goodbye`)
    }else{computerNumber = (Math.round(Math.random() * 10)); 

    }
   console.log(computerNumber)
   compareNumbers(userNumber,computerNumber)

}
input()
function compareNumbers(userNumber,computerNumber){
    let tries= 0;
    if(userNumber == computerNumber){
        alert('Winner')
    }else if(userNumber > computerNumber){
    alert(`Your number is bigger then the computer's, guess again`);tries= tries + 1;input();
    }else if(userNumber < computerNumber && tries != 3){
        alert(`Your number is smaller then the computer's, guess again`);tries= tries + 1;input();
    }else{alert(`game over`)}
    console.log(tries)
}