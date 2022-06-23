module.exports = function solveEquation(equation) {
  const equationArguments = equation.split(' ');

  const a = Number(equationArguments[0]);
  const b = equationArguments[3] === '-' ? Number(equationArguments[4]) * -1 : Number(equationArguments[4]);
  const c = equationArguments[7] === '-' ? Number(equationArguments[8]) * -1 : Number(equationArguments[8]);


  const desc = Math.pow(b, 2) - 4 * a * c;

  const x1 = Math.round((-b + Math.sqrt(desc)) / (2 * a))
  const x2 = Math.round((-b - Math.sqrt(desc)) / (2 * a))

  return [x1, x2].sort((a, b) => a > b ? 1 : -1);
}
