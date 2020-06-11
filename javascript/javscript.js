// Keyboard event handlers
document.addEventListener("keydown", keyDown);

// Rules and close event handlers
const closeBtn = document.getElementById("close-btn");
rulesBtn.addEventListener("click", () => rules.classList.add("show"));

// 함수 선언, 표현
foo(); // success!
//함수 선언
function foo() {
  alert("foo");
}
foo(); // "foo" is not defined.
//함수 표현식
//자바스크립트는 인터프리터 언어라 인터프리터가 표현식 라인에 도달한 후에 사용가능
//그 전에는 호이스팅으로 변수는 선언되어있지만 항당은안되어서 사용불가
var foo = function () {
  alert("foo");
};

//즉시 호출 함수
//IIFE Immediately Invoked Function Expressions
(function () {})();

//객체 프로토타입 정의
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
(function () {
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}.call(MyObject.prototype));

//클로저
//클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
//이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
//myFunc변수에 displayName을 리턴함
//유효범위의 어휘적 환경을 유지
myFunc();
//리턴된 displayName 함수를 실행(name 변수에 접근)
