export const mapValues = (obj: Json, callback: any) => {
    const result: Json = {};

    Object.keys(obj).forEach((key) => {
        result[key] = callback(obj[key], key);
    });

    return result;
};
