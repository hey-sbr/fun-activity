export function gibrish(str: string) {
    const gibrishSentence = str.toLowerCase().split(/\s+/).map((word) => jumbleWord(word))


    return gibrishSentence.join(" ")
}


function jumbleWord(word: string): string {
  if (word.length <= 1) return word;

  const chars = word.split("");

  // Fisher–Yates shuffle
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    // swap
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}


console.log(gibrish("Hello World! This is a test of the gibrish function."))