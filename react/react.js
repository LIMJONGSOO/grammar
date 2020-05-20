/*
React

Virtual Dom - 초기 렌더링 이후에는 데이터가 변경되면 DOM을 비교하여 최적화하여 리렌더링


비구조화 문법
 - const { name, children } = props; 혹은 파라미터 부분에서 const MyComponent = ({name, children}) => {}
 - 배열 비구조화 할당 const array = [1, 2]; const [one, two] = array;

컴포넌트
 - 함수형 컴포넌트 : v16.8 업데이트 이후 Hooks를 도입하면서 단점 보안
  props - 부모컴포넌트에서 설정하는 프로퍼티
  defaultProps - 부모컴포넌트에서 설정하지 않은경우 기본값 설정
  props.children -  태그 사이의 값을 표출
  비구조화 문법 - const { name, children } = props; 혹은 파라미터 부분에서 const MyComponent = ({name, children}) => {}
  propType - propsType을 선언해서 타입을 지정할 수 있음, 다른 타입을 넘기는 경우 오류발생
  name: PropTyps.string.isRequired  필수값 지정
  
 - 클래스형 컴포넌트 : state 기능 및 라이프사이클 기능 사용가능, 임의의 메서드 정의가능
  this.props로 사용가능
  defaultProps, propType 지정은 함수컴포넌트와 동일하게 클래스 밖에서 선언 가능
  defaultProps, propType 클래스 내부에서 지정할 경우 static으로 선언

 - state
  컴포넌트 내부에서 바뀔 수 있는 값
  클래스형 컴포넌트 - 선언은 construtor 안에서 this.state = {} 또는 밖에서 state = {}, 
                     사용시 this.state.name, 
                     변경시 this.setState({name:value}); 
  함수형 컴포넌트 - 선언시 const [name, setName] = useState('초기값');
                   사용시 name
                   변경시 setName(value);  
 
 JSX
  - 감싸인 요소 : 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 합니다.
  컴포넌트내부는 하나의 DOM 트리 구조로 이루어져야하는 규칙
  Fragment(<></>)를 사용하여 해결

 JSX 내에서 조건부 렌더링 - 삼항 연산자, AND(&&)
 여러줄을 작성할 때만 ()로 감싼다.

 스타일 속성을 지정할 땐 '-' 이런 문자를 없애고 카멜 표기법으로 작성

 태그 사용시 무조건 닫는 태그나 self-closing 태그를 사용해야한다.
*/
