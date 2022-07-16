const anagram = (a, b) => {
  const word1 = a
    .toLowerCase()
    .split("")
    .sort()
    .reduce((e, i) => e + i);
  const word2 = b
    .toLowerCase()
    .split("")
    .sort()
    .reduce((e, i) => e + i);
  word1 == word2
    ? console.log(`${a} is anagram to ${b}`)
    : console.log(`${a} is not anagram to ${b} `);
};

anagram("war", "raw");
const anagrams = (str1, str2) => {
  let sort1 = str1.split("").sort();
  let sort2 = str2.split("").sort();
  return sort1.join("") === sort2.join("");
};
