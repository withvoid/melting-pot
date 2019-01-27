/**
 * @description Takes in an array of higher order components & returns the final
 * component
 * @example withCompose(withFoo, withBar)(BazComponent);
 * @param  {...any} funcs
 * @returns React component, the accumulated of all React components
 * @author Adeel Imran
 */

const withCompose = (...funcs) => {
  return funcs.reduce(
    (acc, cf) => (...args) => {
      return acc(cf(...args));
    },
    arg => {
      return arg;
    },
  );
};

export default withCompose;
