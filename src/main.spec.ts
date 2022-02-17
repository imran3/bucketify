import { isEven } from './main'

describe('isEven tests', () => {
    it('should return true when input number is even', () => {
        // arrange
        const num = 4;
        const expectedOutcome = true
        
        // act 
        const res = isEven(num);

        // assert
        expect(res).toBe(expectedOutcome)
    });

    it('should return false when input number is odd', () => {
        // arrange
        const num = 5;
        const expectedOutcome = false
        
        // act 
        const res = isEven(num);

        // assert
        expect(res).toBe(expectedOutcome)
    });
});