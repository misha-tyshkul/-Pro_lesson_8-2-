function findTheLongestWord(offer) {
  for (let i = 0; i < offer.length; i++) {
    if (typeof offer === "string") {
      return offer.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
    } else {
      console.log("Error");
      return "";
    }
  }
}
console.log(findTheLongestWord("london is the capital of great britain its political economic and cultural centre"));
