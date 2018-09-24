module.exports = function solveEquation(equation) {
  // your implementation
  equation = equation.replace("x^2", "a");
  equation = equation.replace("x", "b");

  let a = /-?\d+\s\*\sa/i;
  let b = /[+-]?\s\d+\s\*\sb/i;
  let c = /[+-]?\s\d+$/i;

  let resA = equation.match(a)[0];
  let resB = equation.match(b)[0];
  let resC = equation.match(c)[0];

  a = resA.substr(0, resA.length - 4);
  b = resB.substr(0, resB.length - 4);
  c = resC;

  a = a.replace(" ", "");
  b = b.replace(" ", "");
  c = c.replace(" ", "");
  a = Number.parseInt(a, 10);
  b = Number.parseInt(b, 10);
  c = Number.parseInt(c, 10);
  let d = b * b - 4 * a * c;
  let ans1 = Math.round((-b + Math.sqrt(d)) / (2 * a));
  let ans2 = Math.round((-b - Math.sqrt(d)) / (2 * a));
  if (ans1 < ans2)
    return [ans1, ans2];
  else return [ans2, ans1];
}