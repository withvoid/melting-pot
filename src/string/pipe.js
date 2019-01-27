/**
 * @description Takes in an array of functions, pipes their result
 * @example pipe('Adeel Imran', onCapital, onRemoveSpaces); // ADEELIMRAN
 * @param  {...any} funcs
 * @returns String
 * @author Adeel Imran
 */

const initialState = {
  value: '',
  toPipe: [() => {}],
};

const pipe = ({ value = initialState.value, toPipe = initialState.toPipe } = initialState) => {
  if (typeof value !== 'string') {
    throw Error('Function pipe() Should be a string only');
  }
  return toPipe.reduce((result, cf) => cf(result), value);
};

export default pipe;
