function anagram(word, list) {
  var sortedLetters = word.split("").sort().join("");

  console.log(sortedLetters);
  return list.filter(function(listWord) {
    return listWord.split("").sort().join("") === sortedLetters;
  });
}