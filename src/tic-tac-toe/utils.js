export const WIN = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
  [1, 5, 9],
  [7, 5, 3],
];

export const POSIBILITY_WIN = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 7],
  [1, 9],
  [2, 3],
  [2, 5],
  [2, 8],
  [3, 6],
  [3, 5],
  [3, 9],
  [3, 7],
  [4, 5],
  [4, 6],
  [4, 7],
  [5, 8],
  [5, 6],
  [5, 9],
  [5, 7],
  [6, 9],
  [7, 8],
  [7, 9],
  [8, 9],
]

const utils = {
  containsAll: (values, array) => {
    return values.every((val) => array.includes(val));
  },
  randomBoolean: () => {
    return Math.random() < 0.5;
  },
  randomInteger: (range) => {
    return Math.floor(Math.random() * range)
  }
};

export default utils;