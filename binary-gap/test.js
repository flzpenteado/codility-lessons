const solution = require('./index');

describe('Binary Gap ', () => {
    it('should return 2 for value 9',() => {
        expect(solution(9)).toBe(2);
    });

    it('should return 4 for value 529',() => {
        expect(solution(529)).toBe(4);
    });

    it('should return 1 for value 20',() => {
        expect(solution(20)).toBe(1);
    });

    it('should return 0 for value 15',() => {
        expect(solution(15)).toBe(0);
    });

    it('should return 5 for value 1041',() => {
        expect(solution(1041)).toBe(5);
    });


    it('should return 3 for value 561892',() => {
        expect(solution(561892)).toBe(3);
    });
});