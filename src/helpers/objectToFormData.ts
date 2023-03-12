interface DataObject {
    [key: string]: string | Blob;
}

const objectToFormData = <T extends DataObject>(object: T) =>
    Object.keys(object).reduce((formData, key) => {
        formData.append(key, object[key]);
        return formData;
    }, new FormData());

export default objectToFormData;
