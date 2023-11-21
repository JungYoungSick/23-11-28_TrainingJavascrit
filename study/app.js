console.log('Hello, World!');
//! 1-----------------------

let ten = 10;
//! 2-----------------------

const Hello = "Hello,";
const JavaScript = " Javascript!";
const string = Hello + JavaScript
console.log(string)
//! 3-----------------------

function plus() {
  a = 5
  b = 10
  return a + b
}
console.log(plus())
//! 4-----------------------

for (let i = 1; i <= 10; i++) {
  console.log(i)
}
//! 5-----------------------

Number = 21;
if (Number % 2 === 1) {
  console.log("홀수입니다.")
} else {
  console.log('짝수입니다.')
}
//! 6-----------------------

// null과 undefined의 차이점 설명
// null은 값이 없는 것을 뜻하며, undefined는 찾는 결과와 값이 다른걸 뜻한다.(값을 찾을 수 없음.)
//! 7-----------------------

let value = 10; //변수를 사용한 식별자 지정.
function fun() { //함수명을 사용한 식별자 지정.
}
let Object = { //배열속 객체 선언을 사용한 속성 변수명 지정.
  Number: 20,
};

//! 8-----------------------
/*const, let, var의 차이점은 다음과 같다.
  다 같은 변수 선언이지만 동기적으로 읽히는 것의 차이가 있고, 함수가 읽히는 범위에 따라 사용 방법이 다르기도 하다.
  const는 단 한번만 할당이 가능하며, 할당 시에는 변경이 안된다.
  let은 선언 이후 변경이 가능하며, 대신 블록 스코프를 따르는 변수 선언 키워드이다.
  var은 이전에 사용되던 변수로서 블록 스코프를 무시한다. 그러기에 괄호 안에 작성 시에는 꼭 let을 사용하도록 하자.*/
//! 9-----------------------

/*주석 처리엔 한줄처리와 여러줄 처리 주석이 있다.
단축키로는 ctrl(command) + /가 있으며, 한줄주석의 단축키이다.
여러줄을 주석 처리 할 경우엔 /*를 사용하여 시작하는 부분부터 끝까지 주석처리를 마무리한다.*/
/*주석의 사용 용도는 내가 작성한 코드를 다른 누군가가 알아보고 이해하기 쉽도록 글로써 표현하여 설명 할 때 사용한다.
자세할수록 상대방은 협업 시 알아보기 좋다*/
//! 10-----------------------

/**
 * @param {number} a - 작성 시 눈에 띄도록 색을 표시.

vscode에서 코드를 작성 시 알아보기 좋도록 주석처리를 안한것처럼 보이게 해준다.
단 코드의 적용은 되지않고 설명의 용도로만 사용되니 주의가 필요하다.
*/
//! 11-----------------------
"use strict"
a = 10;
console.log(a);
/* 암묵적으로 사용하며, 해당 텍스트가 있는 곳에는 변수를 선언하지 않고 사용하자는 뜻으로 이해가 된다.*/
//! 12-----------------------

/**
 * 자바스크립트에서의 대문자와 소문자를 구분할 때는 다음과 같다.
 * 1. 문자열에서 쓰임, 변수명에서 쓰임, 함수이름에서 쓰임,(이름을 지정 할 경우 사용된다.)
 * 2. 객체 속성사용 시 파스칼케이스 방식과 카멜케이스방식으로 작성 할 때 분류가 된다.
 */
//! 13-----------------------

/**
 * 자바스크립트에선 데이터타입이 두가지로 나눠진다.
 * 원시타입과 객체타입으로 나눠진다.
 * 원시타입은 숫자열, 문자열,참 거짓의 불값, undefined(지정된 값이 없음), null(값이 없음),심볼?로 되어 있다.
 * 객체타입은 괄호로 담겨져 있는 값들을 말한다.
 * 복잡한 데이터 구조를 나타낼 때 사용된다.
 */
//! 14-----------------------

let t = true;
let f = false;

if (t === true) { // 해당 변수가 true라면, truthy에 속하는 출력값이 나온다.
  console.log('참입니다')
} else if (f === false) { // 해당 변수가 false라면, Falsy에 속하는 출력값이 나온다.
  console.log("거짓입니다")
} else {
  console.log('오류입니다.')
}
//! 15-----------------------

let number = 1;
let String = "string";
let isTrue = true;
let array = [
  'one', 'two', 'three'
];
let obj = {
  key: value,
}


console.log(typeof number) // 숫자 타입
console.log(typeof String) // 문자열 타입
console.log(typeof isTrue) // boolean타입
console.log(typeof array) // 배열이나 타입 검사 시 객체에 속하여 객체 타입으로 반환
console.log(typeof obj) // 객체 타입
//! 16-----------------------

let aa = 0;
let bb = false
if (aa == false) { // 0 => false라는 값을 가지고 있다. 그러기에 동등 연산자를 사용 시 형변환을 통하여 참의 값을 준다.
  console.log("맞다.")
} else {
  console.log('아니다')
}

if (aa === false) { // 일치연산자를 사용함으로서 aa => 0의 값만을 가진다. false를 나타내지는 않았으니 '아니다'란 결과가 나온다. 
  console.log('맞다')
} else {
  console.log('아니다')
}
//! 17-----------------------

// let X = 10;
// let x = ;
// if (typeof x !== 'undefined' && x === 10) { // 변수선언을 별도로 해주지 않았기에 undefined를 조건으로 넣은 것이다. 
//   console.log('x는 10이다.');
// } else {
//   console.log('x는 10이 아니다.');
// }

//! 18-----------------------

let six = 6;
let seven = 7;

let sum = six + seven
console.log(sum) // 13

let diff = six - seven
console.log(diff) //-1

let prod = six * seven
console.log(prod) //42

let quot = six / seven
console.log(quot) //0.8571428571428571

let rema = six % seven
console.log(rema) //6
//! 19-----------------------

function quotient(ten, three) {
  ten = 10;
  three = 3;
  return ten % three
}
console.log(quotient())

let result = 10 % 3;
console.log(result);
//! 20-----------------------
let x = 5;
let y = 7;
if (x > y) {
  console.log('x가 y보다 크다')
} else {
  console.log('x가 y보다 작다')
}
//! 21-----------------------
let z = 2
if (x === y && z === 0) {
  console.log('x와 y는 같고 z는 0이다.')
} else if (x !== y) {
  console.log('x와 y는 다르다.')
} else if (z !== 0) {
  console.log('x와 y는 같고, z는 0이 아닙니다. ')
} else {
  console.log('그외의 다른 값들이다.')
}
//! 22-----------------------

function divide(x, y) {
  x = 5;
  y = 10;
  return x % y
}
console.log(divide()) // 함수로 작성 시에 5라는 값을 반환한다.

let q = 5
let w = 10
quotient = Math.floor(q / w)
console.log(quotient)
//변수를 선언 후 Math.floor[소수점 이하를 버리고 정수 부분만 남기기 위해 사용되는 함수]사용 시 0.5가 나오지만 소수점은 버리기에 몫은 0이 나온다.
//! 23-----------------------
//위 값을 그대로 사용.
let temp = q;
q = w;
w = temp;

console.log(q)
console.log(w)

//! 24-----------------------

let i = 1;
while (i <= 10) {
  console.log(i)
  i++
}
//! 25-----------------------