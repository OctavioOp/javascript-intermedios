//Sigma
const sigma = (num) => {
  let arr = [];
  let suma = 0;
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      arr.push(i + 1);
    }
    for (let i = 0; i < arr.length; i++) {
      suma = suma + arr[i];
    }
  }
  return suma;
};
//factorial
const factorial = (num) => {
  let arr = [];
  let factor = 1;

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      arr.push(i + 1);
    }
    for (let i = 0; i < arr.length; i++) {
        factor = factor * arr[i];
      }
  }
  return factor;
};
//fibonacci
