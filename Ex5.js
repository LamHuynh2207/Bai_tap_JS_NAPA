// Ngoài việc khác nhau về mặt cú pháp thì for thường và forEach còn có sự khác nhau gì? code minh họa

// Khởi tạo mảng:

const arr_1 = ['a', 'b', 'c'];

/*
1. for và for/in cho phép bạn truy cập vào index của mảng chứ không phải là phần tử 
thực tế, thế nên bạn cần sử dụng arr[i] để lấy giá trị:
*/

for (let i = 0; i < arr_1.length; ++i) {
  console.log(arr_1[i]);
}

for (let i in arr_1) {
  console.log(arr_1[i]);
}

/*
Với forEach() và for/of bạn có thể truy cập trực tiếp đến giá trị của phần tử, 
forEach() cho phép bạn truy cập đến index của phần tử, for/of thì không.
*/

arr_1.forEach((v, i) => console.log(v));

for (const v of arr_1) {
  console.log(v);
}

/*
2. Empty Elements
Javascript array cho phép chứa các phần tử rỗng, dưới đây là một ví dụ về cú pháp hợp lệ:
*/

const arr_2 = ['a',, 'c'];

arr_2.length; // 3

// for/in và for/each bỏ qua các phần tử rỗng, for và for/of thì không:

// Prints "a, undefined, c"
for (let i = 0; i < arr_2.length; ++i) {
  console.log(arr_2[i]);
}

// Prints "a, c"
arr_2.forEach(v => console.log(v));

// Prints "a, c"
for (let i in arr_2) {
  console.log(arr_2[i]);
}

// Prints "a, undefined, c"
for (const v of arr_2) {
  console.log(v);
}

/*
Function Context
Scope của this bên trong for, for/in, và for/of chính là scope bên ngoài của các cấu 
trúc lặp này, forEach() thì không như vậy trừ khi bạn dùng arrow function
*/

'use strict';

const arr_3 = ['a'];

// Prints "undefined"
arr_3.forEach(function() {
  console.log(this);
});

// Thế nên sử dụng arrow function đối với forEach nếu không this sẽ không tồn tại.

/*
Async/Await và Generators
forEach cũng không hoạt động tốt với Async/Await hoặc Generators. Nếu forEach 
callback là đồng bộ thì không thành vấn đề, nhưng bạn không thể sử dụng await bên trong forEach 
*/

async function run() {
  const arr = ['a', 'b', 'c'];
  arr.forEach(async el => {
    // SyntaxError
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  });
}

// Không sử dụng được yield nốt:

function* run() {
  const arr = ['a', 'b', 'c'];
  arr.forEach(el => {
    // SyntaxError
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  });
}

// Sử dụng trong for/of thì hoàn toàn ok:

async function asyncFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  }
}

function* generatorFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    yield new Promise(resolve => setTimeout(resolve, 1000));
    console.log(el);
  }
}