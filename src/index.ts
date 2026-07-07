import foo from './foo';
import old from './old';

let a: number = 1;
let b: number = 2;
let c: number = 3;

const d = foo;

const p1 = new Promise((resolve, reject) => {
  resolve('p1');
});

const asyncFn = async () => {
  return await p1;
};

console.log(a + b + c + d);