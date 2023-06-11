const isNumber = (x: any): x is number => typeof x === `number` && !isNaN(x);

export default isNumber;
