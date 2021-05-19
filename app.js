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

//array: penultimo
const next_to_last = (array) => {
  let middle = Math.round(array.length / 2);
  let antePenum = 0;
  //  console.log(array.length)
  if (array.length > 2) {
    antePenum = array[middle];
  }
  return antePenum;
};

//Array: “N” último
const n_last = (arr, num) => {
  let len = arr.length - num;
  let value = 0;

  if (arr.length >= 3) {
    value = arr[len - 1];
  }
  return value;
};

//Array: Segundo más grande
const second_bigger = (arr) => {
  let small = 0;
  let high = 0;
  let secHigh = 0;
  
  high = Math.max(arr)

  console.log(high);
};
//Doble Problema Par
