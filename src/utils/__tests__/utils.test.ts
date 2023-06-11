import isNumber from '../isNumber';
import objectToFormData from '../objectToFormData';

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

describe(`objectToFormData utility function`, () => {
    it(`returns correct FormData for given object as parameter`, () => {
        const testObject = {
            field: `field`,
        };
        const formData = objectToFormData(testObject);
        expect(Object.fromEntries(formData.entries())).toMatchObject(
            testObject,
        );
    });
});
