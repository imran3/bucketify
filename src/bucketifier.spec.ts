import { bucketify } from './bucketifier';

describe('bucketify tests', () => {
  it('should bucketify input sentence', () => {
    // arrange
    const sentence = 'the quick brown fox jumps over the lazy dog';
    const num = 10;
    const expectedRes = [
      'the quick',
      'brown fox',
      'jumps over',
      'the lazy',
      'dog',
    ];

    // act
    const res = bucketify(sentence, num);

    // assert
    expect(res).toEqual(expectedRes);
  });
  it('should bucketify input sentence', () => {
    // arrange
    const sentence = 'the five boxing wizards jump quickly';
    const num = 7;
    const expectedRes = ['the', 'five', 'boxing', 'wizards', 'jump', 'quickly'];

    // act
    const res = bucketify(sentence, num);

    // assert
    expect(res).toEqual(expectedRes);
  });
  it('should bucketify input sentence', () => {
    // arrange
    const sentence = 'how vexingly quick daft zebras jump';
    const num = 12;
    const expectedRes = ['how vexingly', 'quick daft', 'zebras jump'];

    // act
    const res = bucketify(sentence, num);

    // assert
    expect(res).toEqual(expectedRes);
  });

  it('should bucketify input sentence (one word)', () => {
    // arrange
    const sentence = 'hello';
    const num = 10;
    const expectedRes = ['hello'];

    // act
    const res = bucketify(sentence, num);

    // assert
    expect(res).toEqual(expectedRes);
  });

  it('should bucketify input sentence (trim lead and trail spaces)', () => {
    // arrange
    const sentence = ' hello there, how are you ';
    const num = 10;
    const expectedRes = ['hello', 'there, how', 'are you'];

    // act
    const res = bucketify(sentence, num);

    // assert
    expect(res).toEqual(expectedRes);
  });

  it('bucketify discarding words that are too long', () => {
    // arrange
    const sentence =
      'hello this sentence has some reaaaaaaaaaly really looooooooooooong words';
    const num = 12;
    const expectedRes: string[] = [
      'hello this',
      'sentence has',
      'some really',
      'words',
    ];

    // act
    const res = bucketify(sentence, num);

    //  assert
    expect(res).toEqual(expectedRes);
  });

  it('should bucketify input sentence (single letters)', () => {
    // arrange

    const sentence = 'a b c d e f g';
    const num = 2;
    const expectedRes: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    // act
    const res = bucketify(sentence, num);

    // assert
    expect(res).toEqual(expectedRes);
  });

  describe('edge cases', () => {
    it('should return empty array if input sentence is empty', () => {
      // arrange
      const sentence = '';
      const num = 10;
      const expectedRes: string[] = [];

      // act
      const res = bucketify(sentence, num);

      // assert
      expect(res).toEqual(expectedRes);
    });

    it('should return array containing input sentence (big n)', () => {
      // arrange
      const sentence = 'this sentence that will fit in single bucket';
      const num = 50;
      const expectedRes: string[] = [
        'this sentence that will fit in single bucket',
      ];

      // act
      const res = bucketify(sentence, num);

      // assert
      expect(res).toEqual(expectedRes);
    });

    it('should return empty array (n too small for any word)', () => {
      // arrange
      const sentence = 'this sentence has num too small for any word here';
      const num = 2;
      const expectedRes: string[] = [];

      // act
      const res = bucketify(sentence, num);

      // assert
      expect(res).toEqual(expectedRes);
    });

    it('should return empty array (n is negative)', () => {
      // arrange
      const sentence = 'this sentence has num too small for any word here';
      const num = -12;
      const expectedRes: string[] = [];

      // act
      const res = bucketify(sentence, num);

      // assert
      expect(res).toEqual(expectedRes);
    });
  });
});
