export const bucketify = (inputString: string, num: number): string[] => {
  let words = inputString.split(" ");

  let buckets = [];
  let newWord: string | undefined;

  let stop = false;
  while (words.length > 0 && !stop) {
    newWord = words.shift();

    if (!newWord) break;

    // skip word if too large
    if (newWord && newWord.length > num) continue;

    // push new element into buckets
    buckets.push(newWord);

    // chain as many words as possible new element in buckets
    while (
      words.length &&
      buckets[buckets.length - 1].length + words[0].length + 1 <= num
    ) {
      newWord = words.shift();
      buckets[buckets.length - 1] += " " + newWord;
    }
  }

  return buckets;
};
