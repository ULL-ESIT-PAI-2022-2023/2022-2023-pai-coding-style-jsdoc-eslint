/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.solveEquation(5, 10);
 * @example
 * // returns 3
 * globalNS.solveEquation(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.solveEquation = function (variableA, variableB) {
  return variableB / variableA;
};

