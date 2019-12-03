function shuffle(array) {
  const myArray = array;
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temporary = myArray[i];
    myArray[i] = myArray[randomIndex];
    myArray[randomIndex] = temporary;
  }
  return myArray;
}

export default function shuffleCards() {
  let id = 0;
  const cards = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
  ].reduce((a, type) => {
    a.push({
      id: id++,
      type
    });
    a.push({
      id: id++,
      type
    });
    return a;
  }, []);

  return shuffle(cards);
}
