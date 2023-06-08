const isNumber = (x: any): x is number => typeof x === `number` && !isNaN(x);

export default isNumber;

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest;

    describe(`isNumber utility function`, () => {
        it(`returns true when type of parameter is number`, () => {
            expect(isNumber(0)).toBe(true);
            expect(isNumber(100)).toBe(true);
        });
        it(`returns false when type of parameter is different than number`, () => {
            expect(isNumber(undefined)).toBe(false);
            expect(isNumber(null)).toBe(false);
        });
        it(`returns false when type of parameter is NaN`, () => {
            expect(isNumber(NaN)).toBe(false);
        });
    });
}
