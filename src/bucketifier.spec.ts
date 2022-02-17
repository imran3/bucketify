import { bucketify } from "./bucketifier";

describe("bucketify tests", () => {
  it("should bucketify input sentence", () => {
    // arrange
    const sentence = "the quick brown fox jumps over the lazy dog";
    const num = 10;
    const expectedRes = [
      "the quick",
      "brown fox",
      "jumps over",
      "the lazy",
      "dog",
    ];

    // act
    const res = bucketify(sentence, num);

    // act and assert
    expect(res).toEqual(expectedRes);
  });

  it("should return empty array if input sentence is empty", () => {
    // arrange
    const sentence = "";
    const num = 10;
    const expectedRes: string[] = [];

    // act
    const res = bucketify(sentence, num);

    // act and assert
    expect(res).toEqual(expectedRes);
  });

  it("should bucketify input sentence discarding words longer than num", () => {
    // arrange
    const sentence =
      "hello this sentence has some reaaaaaaaaaly really looooooooooooong words";
    const num = 12;
    const expectedRes: string[] = [
      "hello this",
      "sentence has",
      "some really",
      "words",
    ];

    // act
    const res = bucketify(sentence, num);

    // act and assert
    expect(res).toEqual(expectedRes);
  });
});
