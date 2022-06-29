function findLongestWord(arr){
    let longestWord = 0;
    for(i in arr){
      if(arr[i].length > longestWord){
        longestWord = arr[i].length;
      }
    }
    return longestWord;
}

let input = prompt("Enter a few words seperated by a comma and space!").split(", ");
let inputLength = findLongestWord(input);
let final = "*".repeat(inputLength+4) + "\n";
for(i in input){
  let spaces = inputLength - input[i].length;
  final += `* ${input[i]} `;
  final += " ".repeat(spaces) + "*\n";

}
final += "*".repeat(inputLength+4);
console.log(final);