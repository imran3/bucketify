export const bucketify = (inputString: string, num: number): string[] => {
  const words = inputString.trim().split(' ');
  let buckets = [];
  let newWord;

  while (words.length > 0) {
    newWord = words.shift();

    if (newWord) {
      // skip word if too large
      if (newWord.length > num) continue;

      if (buckets.length === 0) {
        buckets.push(newWord);
        continue;
      }

      buckets[buckets.length - 1].length + newWord.length + 1 <= num
        ? (buckets[buckets.length - 1] += ' ' + newWord)
        : buckets.push(newWord);
    }
  }

  return buckets.length ? buckets : [];
};
