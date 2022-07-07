// There are for suits
let suits= ['♠','♡','♢','♣'];
// there are 13 cards
let ranks= ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
// this will hold all my cards right befor shuffling
let deck=[]
// this is making my card
for(let i=0; i<4;i++){
    let cards
    for(let j=0; j<13;j++){
        let cards=ranks[j]+suits[i];
        deck.push(cards)

    }
}
// shuffling deck
let shuffledArray = deck.sort((a, b) => 0.5 - Math.random());
console.log(shuffledArray)
// splitting the deck
let half = Math.ceil(deck.length / 2);    
let player1 = deck.splice(0, half)
let player2 = deck.splice(-half)
// maybe this should be in a while loops to check if there's 52 on one side and in case there is a tie
// I would want to ignollage player1 won this round  
if(player1[0] > player2[0]){
    player2[0].push(player1)
    player1[0].push(player1)
    player2[0].remove
    player1[0].remove
 }else if(player1[0] < player2[0]){
    // I would want to ignollage player2 won this round  
    player2[0].push(player2)
    player1[0].push(player2)
    player2[0].remove
    player1[0].remove
 }else if(player1[0] = player2[0]){
    // push 3 cards out then display the forth card and run the if statments
    // ingnolige it's tie
    // push them back in the if statement
    // maybe a button acction
 }



