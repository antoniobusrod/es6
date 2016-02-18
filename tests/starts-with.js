"use strict";

const regex = /^Hello/;
function a(value) {
  return regex.test(value);
}

function b(value) {
  return value.startsWith('Hello');
}

let array = [];
for (let i = 0; i < 1000; i++) { array.push('Hello world'); }

let time = process.hrtime();
const res1 = array.every(a);
const diff1 = process.hrtime(time);

time = process.hrtime();
const res2 = array.every(b);
const diff2 = process.hrtime(time);

console.log(res1);
console.log('regex benchmark took %d nanoseconds', diff1[0] * 1e9 + diff1[1]);
console.log(res2);
console.log('startswith benchmark took %d nanoseconds', diff2[0] * 1e9 + diff2[1]);

