/**
 * @description Takes in an array of functions, pipes their result
 * @example compose('Adeel Imran', onCapital, onRemoveSpaces); // ADEELIMRAN
 * @param  {...any} funcs
 * @returns String | Number
 * @author Adeel Imran
 */

const compose = (...funcs) => {
  return funcs.reduce((result, cf) => cf(result), arg => arg);
};

export default compose;
