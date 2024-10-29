export function getLetterCount(word: string) {
  const letters = word.split('');
  let letterCount: Record<string, number> = {};
  letters.forEach(letter => {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter] += 1;
    }
  });
  return letterCount;
}