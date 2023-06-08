interface DataObject {
    [key: string]: string | Blob;
}

const objectToFormData = <T extends DataObject>(object: T) =>
    Object.keys(object).reduce((formData, key) => {
        formData.append(key, object[key]);
        return formData;
    }, new FormData());

export default objectToFormData;

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest;

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
}
