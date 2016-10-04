var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(function(band) {
    band.country = "Canada";
    band.name = capitalizeName(band.name);
  });

  function capitalizeName(name) {
    var words = name.split(" ");
    words = words.map(capitalizeWord);
    return words.join(" ");
  }

  function capitalizeWord(word) {
    var letters = word.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.filter(lettersOnly).join("");
  }

  function lettersOnly(let) {
    return /[a-zA-Z]/.test(let);
  }

  return data;
}