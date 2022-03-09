function fn(num1, num2, ...args) {
  console.log(num1);
  console.log(num2);
  console.log(args);
}

fn(2, 3, 3, 3, 32, 2, 22, 2, 2, 2, 2);

const arr1 = ["apple", "mango"];
const arr2 = ["alu", "misti", ...arr1];

console.log(arr2);
const x = 5;
const xy = (x) => {
  console.log(x);
};

xy();

console.log(`Thjis jis
 na output ${x}`);
