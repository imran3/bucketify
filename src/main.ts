import { bucketify } from "./bucketifier";

const sentence = "the quick brown fox jumps over the lazy dog";
const num = 10;
const buckets = bucketify(sentence, num);

console.log(sentence, "\nbuckets: \n", buckets);
