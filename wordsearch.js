const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let vArray = [];
  for (let i in letters[0]) {
    let vWord = "";
    for (let j in letters) {
      vWord += letters[j][i];
    }
    vArray.push(vWord);
  }
  for (let l of vArray) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;