const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("button");
const output = document.getElementById("output");

button?.addEventListener("click", () => {});
enum Role {
  ADMIN,
  USER,
  READ_ONLY,
}
const human = {
  //   name: string;
  //   nickname: string;
  //   age: number;
  //   occupation: string;
  //   learning: string;
  //   hobbies: string[];
  // } =
  //{
  name: "oliver",
  age: 30,
  nickname: "oli",
  occupation: "coder",
  learning: "typescript",
  hobbies: ["jiu jitsu", "piano"],
  role: Role.ADMIN,
};
//tuple - array with 2 elements, which you tell tsc what they are
//enum - enumerated list, assigns labels to numbers

console.log(human.nickname), human.role;
