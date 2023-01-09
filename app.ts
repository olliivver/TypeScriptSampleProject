const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("button");
const output = document.getElementById("output");

const human: {
  name:string;
  nickname:string;
  age:number;
  occupation:string;
} = {
  name: "oliver",
  age: 30,
  nickname: "oli",
  occupation: "coder"
}

console.log(human.nickname);