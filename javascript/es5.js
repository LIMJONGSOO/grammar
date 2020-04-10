// javasript 특성
// 인터프리터 언어
// 이진 부동소수점 숫자를 사용
// 함수 유효범위
// 함수내 변수는 호스팅되어 자동으로 함수 맨 위에서 선언됨

// Math 함수
Math.pow(2,4) // 2의 4승
Math.round(.6) //반올림
Math.ceil(.6) //올림
Math.floor(.6)//버림
Math.abs(-5) // 절대 값
Math.max(1,2,3) // 최대값
Math.min(1,2,3) // 최소값
Math.random() // 0과 1사이의 임의의 수
Math.PI // 원주율
Math.E // 자연로그상수
Math.sqrt(3) // 3의 제곱근

var f = function(x) { return x;} //변수에 함수 할당
function f(x) {return x;} // 함수선언

switch(n) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

// 점프문
//label 레이블
mainloop: while(token != null) {
    continue mainloop; //주어진 mainloop의 다음 반복으로 이동
}

// object 객체
var o = {a: 1};
var p = inherit(0);  // 객체 o를 상속
delete o.a; //a프로퍼티 삭제
a in o; // o 객제에 a 프로퍼티 여부


// array 배열
var a = new Array();
var a2 = new Array(10);
var a3 = new Array(1,2,3,4);

a3.join(); //'1,2,3,4' 모든 원소를 문자열로 변환하여 붙인 결과
a3.join(""); // '1234'
a3.reverse(); // 순서반대로
a.sort(); // 인자값이 없으면 알파벳순
a.concat(a2); // a + a2 배열반환
a3.slice(3); //[4]
a3.slice(0,1); //[1]
a3.splice(3); //[4], a3 = [1,2,3]
a3.splice(1,1 ,'a','b'); // [2], a3=[1,'a','b',3]
//push, pop 배열 맨 끝에 추가 삭제
//unshift, shift 배열 맨 앞에 추가 삭제
//array function
a.forEach();
a.map(); // 함수인자의 결과값으로 배열반환
a.filter(); //함수인자에 결과값이 true인 원소만 반환
a.every(); // 함수인자에서 모든 원소의 결과값이 true일 때 true
a.some(); // 함수인자에서 일부 원소의 결과값이 true면 true
a.reduce(); // 함수인자로 배열의 원소를 하나의 값으로 결합, 앞부터 계산
a.reduceRight(); // 함수인자로 배열의 원소를 하나의 값으로 결합, 뒤부터 계산

// function 함수