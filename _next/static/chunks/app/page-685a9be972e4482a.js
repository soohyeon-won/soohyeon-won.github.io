(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{732:()=>{},2001:(e,t,n)=>{"use strict";n.d(t,{NavigationTabView:()=>eu});var o=n(5155),s=n(2115);let l=n(4987).Ay.button.withConfig({componentId:"sc-c759d066-0"})(["padding:10px 20px;font-size:16px;border:none;background-color:",";color:",";border-radius:8px;cursor:pointer;transition:all 0.3s ease;&:hover{opacity:0.8;}"],e=>e.isActive?"#007AFF":"#E5E5EA",e=>e.isActive?"white":"black"),i=s.memo(e=>{let{to:t,label:n,$isActive:s,onClick:i}=e;return(0,o.jsx)(l,{isActive:s,onClick:i,children:n})});n(8116);let c=()=>{let[e,t]=(0,s.useState)(1);return console.log("update"),(0,o.jsxs)("div",{children:[(0,o.jsxs)("span",{children:["현재 시각: ",e,"시"]}),(0,o.jsx)("button",{onClick:()=>{let n;t(e>=12?1:e+1)},children:"Update"})]})},r=()=>{let[e,t]=(0,s.useState)(!0);return(0,o.jsxs)("div",{className:"basic-section",children:[(0,o.jsx)("p",{children:"1. useState를 이용한 Toggle버튼"}),(0,o.jsx)("button",{onClick:()=>t(!e),children:e?"ON":"OFF"})]})},a=()=>{let[e,t]=(0,s.useState)(0),n=e=>{t(t=>t+e)};return(0,o.jsx)("a",{children:(0,o.jsxs)("div",{className:"basic-section",children:[(0,o.jsx)("p",{children:"2. 버튼에 있는 값 input으로 옮기기"}),(0,o.jsx)("button",{onClick:()=>n(10),children:"10+"}),(0,o.jsx)("button",{onClick:()=>n(50),children:"50+"}),(0,o.jsx)("input",{value:e,readOnly:!0})]})})},d=()=>{let[e,t]=(0,s.useState)(0),[n,l]=(0,s.useState)(["test1","test2"]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Modal Example"}),(0,o.jsx)(function(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)("h4",{children:[n[0]," ",(0,o.jsx)("span",{onClick:()=>{t(e+1);let o=[...n];o[0]="A",l(o)},children:"좋아요\uD83D\uDC4D"})," ",e]}),(0,o.jsx)("h4",{children:n[1]})]})},{})]})},u=()=>(console.log("heavyWork"),["init","heavy"]),h=()=>{let[e,t]=(0,s.useState)(()=>u()),[n,l]=(0,s.useState)(""),i=e=>{l(e)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"text",value:n,onChange:e=>{l(e.target.value)}}),(0,o.jsx)("input",{type:"text",value:n,onChange:e=>i(e.target.value)}),(0,o.jsx)("button",{onClick:()=>{t(e=>(console.log("prevState",e),[n,...e]))},children:"Upload"}),e.map((e,t)=>(0,o.jsx)("p",{children:e},t))]})},p=()=>{let[e,t]=(0,s.useState)(1),[n,l]=(0,s.useState)(""),i=e=>{l(e)};return(0,s.useEffect)(()=>{console.log("렌더링~")}),(0,s.useEffect)(()=>{console.log("Count 변화로 렌더링~")},[e]),(0,s.useEffect)(()=>{console.log("Name 변화로 렌더링~")},[n]),(0,s.useEffect)(()=>{console.log("마운트 !")},[]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("button",{onClick:()=>{t(e+1)},children:["Update ",e]}),(0,o.jsxs)("button",{onClick:()=>{t(e=>e+1)},children:["Update ",e]}),(0,o.jsx)("input",{type:"text",value:n,onChange:e=>{i(e.target.value)}}),(0,o.jsxs)("span",{children:["name: ",n]})]})},m=()=>((0,s.useEffect)(()=>{let e=setInterval(()=>{console.log("1초 타이머...")},1e3);return()=>{clearInterval(e),console.log("타이머 종료")}},[]),(0,o.jsx)("div",{children:(0,o.jsx)("span",{children:"타이머를 시작합니다. 콘솔을 보세요!"})})),x=()=>{let[e,t]=(0,s.useState)(!1);return(0,o.jsxs)("div",{children:[e&&(0,o.jsx)(m,{}),(0,o.jsx)("button",{onClick:()=>t(!e),children:" Toggle timer "})]})},g=()=>{let[e,t]=(0,s.useState)(0),n=(0,s.useRef)(0),l=0,[i,c]=(0,s.useState)(0);return console.log(n),console.log("렌더링11"),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["State: ",e]}),(0,o.jsx)("button",{onClick:()=>{t(e+1)},children:"Up state"}),(0,o.jsxs)("p",{children:["Ref: ",n.current]}),(0,o.jsx)("button",{onClick:()=>{n.current+=1,console.log("Ref: ",n.current)},children:"Up Ref"}),(0,o.jsxs)("p",{children:["countVar: ",l]}),(0,o.jsx)("button",{onClick:()=>{console.log("countVar: ",l+=1)},children:"Up countVar(변수)"}),(0,o.jsx)("button",{onClick:()=>{c(i+1)},children:"렌더링"}),(0,o.jsx)("button",{onClick:()=>{console.log("ref:",n.current,"var: ",l)},children:"Ref, var 값 출력"})]})},C=()=>{let[e,t]=(0,s.useState)(0),n=(0,s.useRef)(1);return(0,s.useEffect)(()=>{console.log("렌더링 카운트"),n.current+=1}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["count: ",e]}),(0,o.jsx)("button",{onClick:()=>t(e+1),children:"Up RenderCount"})]})},j=()=>{let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{var t;console.log(e.current),null===(t=e.current)||void 0===t||t.focus()},[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{ref:e,type:"text",placeholder:"userName"}),(0,o.jsx)("button",{onClick:()=>{var t,n;alert("Welcome ".concat(null===(t=e.current)||void 0===t?void 0:t.value)),null===(n=e.current)||void 0===n||n.focus()},children:" Login "})]})},f=(0,s.createContext)(void 0),v=(0,s.createContext)(void 0),b=()=>{let e=(0,s.useContext)(f);if(void 0===e)throw Error("useTheme must be used within a ThemeContext.Provider");return e},S=()=>{let e=(0,s.useContext)(v);if(void 0===e)throw Error("useTheme must be used within a ThemeContext.Provider");return e},k=()=>{let[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)({userseq:0,username:"Guest"});return(0,o.jsx)(v.Provider,{value:{user:n,setUser:l},children:(0,o.jsx)(f.Provider,{value:{isDark:e,setIsDark:t},children:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:e}),(0,o.jsxs)("button",{onClick:()=>t(!e),children:["다크모드 선택 isDark: ",e.toString()]}),(0,o.jsx)(R,{}),(0,o.jsx)(w,{isDark:e}),(0,o.jsx)(y,{isDark:e,setIsDark:t})]})})})},R=()=>{let{isDark:e}=b(),{user:t}=S();return(0,o.jsxs)("div",{style:{backgroundColor:e?"black":"red",width:200,height:44,color:e?"white":"black"},children:["Header user ",t.username," "]})},w=e=>{let{isDark:t}=e,{setUser:n}=S();return(0,o.jsxs)("div",{style:{backgroundColor:t?"black":"green",width:200,height:100,color:t?"white":"black"},children:["Content",(0,o.jsx)("button",{onClick:()=>n({userseq:1,username:"사용자1"}),children:"Login"})]})},y=e=>{let{isDark:t,setIsDark:n}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{backgroundColor:t?"black":"pink",width:200,height:50,color:t?"white":"black"},children:" Footer "}),(0,o.jsx)("button",{className:"button",onClick:()=>{n(e=>!e)},children:"Inner btn: Dark Mode"})]})},E=()=>{let[e,t]=(0,s.useState)(0),[n,l]=(0,s.useState)(!0),i=(0,s.useMemo)(()=>({title:n?"Hidden":"Show",test:""}),[n]);return(0,s.useEffect)(()=>{console.log("useEffect 호출")},[n]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Number: ",e]}),(0,o.jsx)("button",{onClick:()=>t(e+1),children:"plus Number"}),(0,o.jsx)("button",{onClick:()=>l(!n),children:"Toggle"}),(0,o.jsxs)("p",{children:[" isHidden : ",i.title]})]})},D=()=>{let[e,t]=(0,s.useState)(0),n=(0,s.useCallback)(()=>{console.log("someFunc number:",{number:e})},[e]);return(0,s.useEffect)(()=>{console.log("someFunction changed")},[n]),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"number",value:e,onChange:e=>{t(Number(e.target.value))}}),(0,o.jsx)("button",{onClick:n,children:"Call someFunc"})]})},T=()=>{let[e,t]=(0,s.useState)(0),n=(0,s.useCallback)(()=>{console.log("someFunc number:",{number:e})},[e]);return(0,s.useEffect)(()=>{console.log("someFunction changed")},[n]),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"number",value:e,onChange:e=>{t(Number(e.target.value))}}),(0,o.jsx)("button",{onClick:n,children:"Call someFunc"})]})},U=()=>{let[e,t]=(0,s.useState)(50),[n,l]=(0,s.useState)(!1),i=(0,s.useCallback)(()=>{console.log("someFunc size:",{size:e})},[e]);(0,s.useEffect)(()=>{console.log("someFunction changed")},[i]);let c=(0,s.useCallback)(()=>({backgroundColor:"pink",width:"".concat(e,"px"),height:"".concat(e,"px")}),[e]);return(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"number",value:e,onChange:e=>{t(Number(e.target.value))}}),(0,o.jsx)("button",{onClick:()=>l(!n),children:"상위컴포넌트 Dark모드 변경"}),(0,o.jsx)(P,{createBoxStyle:c}),(0,o.jsx)("div",{style:{background:n?"black":"white",width:"100px",height:"100px"}})]})},P=e=>{let{createBoxStyle:t}=e,[n,l]=(0,s.useState)({});return(0,s.useEffect)(()=>{console.log("박스 키우기 \uD83C\uDFA8"),l(t())},[t]),(0,o.jsx)("div",{style:n})},A={deposit:"deposit",withdraw:"withdraw"},H=(e,t)=>{switch(console.log("state: ",e,"action: ",t),t.type){case A.deposit:return e+t.payload;case A.withdraw:return e-t.payload;default:return e}},F=()=>{let[e,t]=(0,s.useState)(0),[n,l]=(0,s.useReducer)(H,0);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["잔고: ",n]}),(0,o.jsx)("input",{type:"number",value:e,onChange:e=>{t(Number(e.target.value))}}),(0,o.jsx)("button",{onClick:()=>l({type:A.deposit,payload:e}),children:"입금"}),(0,o.jsx)("button",{onClick:()=>l({type:A.withdraw,payload:e}),children:"출금"})]})},N={count:0,students:[]},I=(e,t)=>{switch(t.type){case"add-student":let n=t.payload,o={id:Date.now(),name:n,isHere:!1};return{count:e.count+1,students:[...e.students,o]};case"delete-student":return{count:e.count-1,students:e.students.filter(e=>e.id.toString()!==t.payload)};default:return e}},L=()=>{let[e,t]=(0,s.useState)(""),[n,l]=(0,s.useReducer)(I,N);return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"출석부"}),(0,o.jsxs)("p",{children:["총 학생 수 : ",n.count]}),(0,o.jsx)("input",{type:"text",value:e,placeholder:"이름을 입력해주세요",onChange:e=>{t(e.target.value)}}),(0,o.jsx)("button",{onClick:()=>{l({type:"add-student",payload:e})},children:"추가"}),n.students.map(e=>(0,o.jsx)(M,{name:e.name,id:e.id,dispatch:l},e.id))]})},M=e=>(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:e.name}),(0,o.jsx)("button",{onClick:()=>{e.dispatch({type:"delete-student",payload:e.id.toString()})},children:"삭제"})]}),W=s.memo(e=>{let{prop:t}=e,[n,l]=(0,s.useState)(0);return(0,s.useEffect)(()=>{console.log("useMemo child comp render")}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:[" child useMemo RC: ",n," "]}),(0,o.jsx)("button",{onClick:()=>l(n+1),children:"Child RC+1"}),(0,o.jsxs)("p",{children:[" prop age : ",t.age]})]})}),B=s.memo(e=>{let{childCallBack:t}=e,[n,l]=(0,s.useState)(0);return(0,s.useEffect)(()=>{console.log("useCallback child comp render")}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:[" child useCallBack RC: ",n," "]}),(0,o.jsx)("button",{onClick:()=>l(n+1),children:"Child RC+1"}),(0,o.jsx)("button",{onClick:()=>t,children:"childCall"})]})}),J=()=>{let[e,t]=(0,s.useState)(0),n=(0,s.useMemo)(()=>(console.log("childProp rendering"),{age:10}),[]),l=(0,s.useCallback)(()=>{console.log("childCallBack 렌더링")},[]);return(0,s.useEffect)(()=>{console.log("useEffect")},[e]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:[" parent rendering count: ",e," "]}),(0,o.jsx)("button",{onClick:()=>t(e+1),children:"Parent RC+1"}),(0,o.jsx)(W,{prop:n}),(0,o.jsx)(B,{childCallBack:l})]})},z=()=>{let[e,t]=function(e){let[t,n]=(0,s.useState)(e);return[t,e=>{n(e+"추가작업")}]}("안녕");return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:e}),(0,o.jsx)("input",{type:"text",onChange:e=>t(e.target.value)}),(0,o.jsx)("button",{onClick:()=>t,children:"Button"})]})},O=()=>{let[e,t]=function(e,t){let[n,o]=(0,s.useState)(null),l=(0,s.useCallback)(async t=>{try{let n=await fetch("".concat(e,"/").concat(t)),s=await n.json();o(s)}catch(e){console.error("Fetch error:",e)}finally{console.log("fin")}},[e]);return(0,s.useEffect)(()=>{l(t)},[t,l]),[n,l]}("https://jsonplaceholder.typicode.com","users");return(0,s.useEffect)(()=>{},[]),(0,o.jsxs)("div",{children:[Array.isArray(e)&&e.length>5?(0,o.jsx)("ul",{children:e.slice(0,5).map(e=>(0,o.jsx)("li",{children:e.name||e.title},e.id))}):(0,o.jsx)("p",{children:"No data"}),(0,o.jsx)("p",{}),(0,o.jsx)("button",{onClick:()=>t("users"),children:"Users"}),(0,o.jsx)("button",{onClick:()=>t("posts"),children:"Posts"}),(0,o.jsx)("button",{onClick:()=>t("todos"),children:"Todos"})]})},X=()=>{let e=(0,s.useId)(),t=(0,s.useRef)(null);return(0,s.useEffect)(()=>{console.log(t.current)}),console.log(e),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"name",children:"이름"}),(0,o.jsx)("input",{id:"name"}),(0,o.jsx)("p",{children:"TODO"}),(0,o.jsx)("label",{htmlFor:"".concat(e,"-name"),children:"이름"}),(0,o.jsx)("input",{id:"".concat(e,"-name")}),(0,o.jsx)("br",{}),(0,o.jsx)("label",{htmlFor:"".concat(e,"-age"),children:"나이"}),(0,o.jsx)("input",{id:"".concat(e,"-age")}),(0,o.jsx)("button",{id:"btn",children:"버튼"}),(0,o.jsx)("input",{id:e,ref:t})]})},_=()=>{let[e,t]=(0,s.useState)(0);return(0,s.useLayoutEffect)(()=>{console.log("useLayoutEffect",e)},[e]),(0,s.useEffect)(()=>{console.log("useEffect",e)},[e]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["count: ",e]}),(0,o.jsx)("button",{onClick:()=>{t(e+1)},children:"Update"})]})},G=[{name:"A",age:"16"},{name:"B",age:"17"},{name:"C",age:"18"}],V=()=>{let[e,t]=(0,s.useState)(""),[n,l]=(0,s.useState)(e),[i,c]=(0,s.useState)([]);return(0,s.useEffect)(()=>{c(function(e){return console.log("fetchDataFromServer 호출",e),G.filter(t=>t.name.startsWith(e))}(n))},[n]),(0,s.useEffect)(()=>{let t=setTimeout(()=>{console.log("called"),l(e)},1e3);return()=>{clearTimeout(t)}},[e]),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{placeholder:"검색어 입력",value:e,onChange:e=>t(e.target.value)}),(0,o.jsx)("ul",{children:i&&i.map(e=>(0,o.jsx)("li",{children:e.name},e.name))})]})},q=()=>{let[e,t]=(0,s.useState)(""),n=function(e,t){let[n,o]=(0,s.useState)(e);return(0,s.useEffect)(()=>{let t=setTimeout(()=>{o(e)},300);return()=>{clearTimeout(t)}},[e,300]),n}(e,300),[l,i]=(0,s.useState)([]);return(0,s.useEffect)(()=>{i(function(e){return console.log("fetchDataFromServer 호출",e),G.filter(t=>t.name.startsWith(e))}(n))},[n]),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{placeholder:"검색어 입력",value:e,onChange:e=>t(e.target.value)}),(0,o.jsx)("ul",{children:l&&l.map(e=>(0,o.jsx)("li",{children:e.name},e.name))})]})},Z=()=>{let[e,t]=(0,s.useState)([]),n=(0,s.useRef)(Date.now()),l=()=>{let e=new Set;for(;e.size<6;){let t=Math.floor(45*Math.random())+1;e.add(t)}console.log("로또 번호 생성"),t(Array.from(e).sort((e,t)=>e-t))};return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"로또 번호 생성기"}),(0,o.jsx)("button",{onClick:()=>{let e=Date.now();if(e-n.current<2e3){console.log("2초 뒤에 다시 시도하세요.");return}n.current=e,l()},children:"번호 생성"}),(0,o.jsx)("div",{children:e.length>0&&(0,o.jsxs)("p",{children:["생성된 번호: ",e.join(", ")]})})]})},$=()=>{let[e,t]=(0,s.useState)([]),n=function(e,t){let n=(0,s.useRef)(Date.now());return function(){let t=Date.now();if(t-n.current<2e3){console.log("".concat(2,"초 뒤에 다시 시도하세요."));return}n.current=t,e()}}(()=>{l()},2e3),l=()=>{let e=new Set;for(;e.size<6;){let t=Math.floor(45*Math.random())+1;e.add(t)}console.log("로또 번호 생성"),t(Array.from(e).sort((e,t)=>e-t))};return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"로또 번호 생성기"}),(0,o.jsx)("button",{onClick:n,children:"번호 생성"}),(0,o.jsx)("div",{children:e.length>0&&(0,o.jsxs)("p",{children:["생성된 번호: ",e.join(", ")]})})]})},K=e=>{let{title:t,children:n}=e;return(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("h3",{children:t}),n]})},Y=e=>{let{title:t,cards:n}=e;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:"section-title",children:t}),(0,o.jsx)(ee,{spacer:16,children:n.map((e,t)=>{let{title:n,Component:s}=e;return(0,o.jsx)(K,{title:n,children:(0,o.jsx)(s,{})},t)})})]})},Q=()=>(0,o.jsx)("div",{className:"practice-container",children:[{title:"UseState Examples",cards:[{title:"useState ex1",Component:c},{title:"useState ex2",Component:r},{title:"useState ex3",Component:a},{title:"useState ex4",Component:d},{title:"Upload Component",Component:h}]},{title:"UseEffect Examples",cards:[{title:"Basic UseEffect",Component:p},{title:"UseEffect Cleanup",Component:x}]},{title:"UseRef Examples",cards:[{title:"Basic UseRef",Component:g},{title:"UseRef Render Count",Component:C},{title:"UseRef DOM",Component:j}]},{title:"UseContext Examples",cards:[{title:"UseContext",Component:k}]},{title:"UseMemo Examples",cards:[{title:"UseMemo",Component:E}]},{title:"UseCallBack Examples",cards:[{title:"Legacy Callback",Component:D},{title:"UseCallback 1",Component:T},{title:"UseCallback 2",Component:U}]},{title:"UseReducer Examples",cards:[{title:"UseReducer 1",Component:F},{title:"UseReducer 2",Component:L}]},{title:"ReactMemo Examples",cards:[{title:"React Memo",Component:J}]},{title:"Custom Hooks Examples",cards:[{title:"Custom Hooks",Component:z},{title:"UseFetchComp",Component:O}]},{title:"useId",cards:[{title:"useId",Component:X}]},{title:"useLayoutEffect",cards:[{title:"UseLayoutEffectComp",Component:_}]},{title:"Debounce",cards:[{title:"UseDebounceComp",Component:V},{title:"UseDebounceComp",Component:q}]},{title:"Throttle",cards:[{title:"UseThrottleComp",Component:Z},{title:"UseThrottleComp",Component:$}]}].map((e,t)=>(0,o.jsx)(Y,{...e},t))}),ee=e=>{let{children:t,spacer:n=10}=e;return(0,o.jsx)("div",{className:"scroll-container",style:{gap:"".concat(n,"px"),padding:"".concat(n,"px")},children:t})};var et=n(275);n(2750);let en=[{id:"1",title:"JavaScript Fundamentals",content:"Detailed content about JS Fundamentals",depth:0},{id:"1.1",title:"ES6+ features (arrow functions, destructuring, modules)",sections:[{title:"변수와 상수 (Variables and Constants)",content:"변수는 데이터를 저장하기 위해 사용되며, let과 const는 ES6에서 도입된 변수 선언 방법입니다. var는 이제 잘 사용하지 않습니다.",code:"// let: 변경 가능한 변수\nlet age = 30;\nage = 31;\n\n// const: 변경 불가능한 상수\nconst birthYear = 1990;"},{title:"자료형 (Data Types)",content:"JavaScript는 문자열, 숫자, 불리언, 객체, 배열 등의 다양한 자료형을 제공합니다.",code:'let name = "Alice"; // 문자열\nlet age = 25; // 숫자\nlet isStudent = true; // 불리언\nlet hobbies = ["reading", "traveling"]; // 배열\nlet person = { name: "Alice", age: 25 }; // 객체'},{title:"조건문 (Conditional Statements)",content:"if-else 및 switch 구문을 사용하여 프로그램의 흐름을 제어합니다.",code:'if (age > 18) {\nconsole.log("성인입니다.");\n} else {\nconsole.log("미성년자입니다.");\n}\n\n// switch 예제\nlet grade = "A";\nswitch (grade) {\ncase "A":\n    console.log("Excellent");\n    break;\ncase "B":\n    console.log("Good");\n    break;\ndefault:\n    console.log("Try Again");\n}'},{title:"반복문 (Loops)",content:"for, while, do-while 문을 사용하여 반복 작업을 수행합니다.",code:"// for 반복문\nfor (let i = 0; i < 5; i++) {\nconsole.log(i);\n}\n\n// while 반복문\nlet i = 0;\nwhile (i < 5) {\nconsole.log(i);\ni++;\n}"},{title:"함수 (Functions)",content:"함수는 코드를 재사용할 수 있게 합니다. ES6 이후 화살표 함수가 추가되었습니다.",code:'// 함수 선언식\nfunction greet(name) {\n  return "Hello, " + name;\n}\nconsole.log(greet("Alice"));\n\n// 화살표 함수\nconst add = (a, b) => a + b;\nconsole.log(add(2, 3));'},{title:"ES6+ 문법 (ES6+ Features)",content:"템플릿 리터럴, 구조 분해 할당 등 ES6+의 새로운 문법을 배웁니다.",code:'// 템플릿 리터럴\nlet name = "Alice";\nconsole.log(`Hello, ${name}!`);\n\n// 구조 분해 할당\nlet person = { name: "Alice", age: 25 };\nlet { name, age } = person;\nconsole.log(name, age);'},{title:"Modules",content:"Modules allow splitting code into reusable pieces with import and export statements.",code:"export const sum = (a, b) => a + b;\nimport { sum } from './math.js';"}],depth:1},{id:"1.2",title:"Asynchronous JavaScript (Promises, async/await)",sections:[{title:"Promises(프로미스)",content:"프로미스는 비동기 작업이 완료된 후의 결과 값을 나타내는 객체로, 성공(resolved) 또는 실패(rejected) 상태를 가집니다.",code:"const promise = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve('Success!');\n      }, 1000);\n    });\n    \n    promise.then(result => {\n      console.log(result); // 'Success!' 출력\n    }).catch(error => {\n      console.error(error);\n    });"},{title:"async/await",content:"`async/await`는 비동기 코드를 작성하는 더 직관적인 방법을 제공하며, 프로미스를 보다 읽기 쉽게 다룰 수 있습니다.",code:"const fetchData = async () => {\n      try {\n        const response = await fetch('https://api.example.com/data');\n        const data = await response.json();\n        console.log(data);\n      } catch (error) {\n        console.error('Error:', error);\n      }\n    };\n    \n    fetchData();"}],depth:1},{id:"1.3",title:"Functional programming concepts (함수형 프로그래밍 개념)",content:"함수형 프로그래밍은 상태 변이를 피하고 순수 함수를 사용하는 것을 기본 원칙으로 합니다. 이를 통해 코드의 예측 가능성과 가독성을 높일 수 있습니다.",depth:1,sections:[{title:"Pure Functions (순수 함수)",content:"순수 함수는 외부 상태를 변경하지 않으며, 동일한 입력에 대해 항상 동일한 출력을 반환하는 함수입니다. 부작용이 없기 때문에 예측 가능한 코드를 작성하는 데 유용합니다.",code:"// 순수 함수 예시\n      const add = (a, b) => a + b;\n      \n      console.log(add(2, 3)); // 5\n      console.log(add(2, 3)); // 5 (항상 같은 입력에 대해 같은 출력)"},{title:"Immutability (불변성)",content:"불변성은 데이터의 상태를 직접 변경하지 않고, 데이터를 복사하여 새로운 값을 만들어내는 것을 의미합니다. 이를 통해 상태 관리가 쉬워지고 버그 발생 가능성이 줄어듭니다.",code:"// 불변성 예시 (배열 복사)\n      const numbers = [1, 2, 3];\n      const newNumbers = [...numbers, 4]; // 기존 배열을 변경하지 않고 새로운 배열 생성\n      console.log(numbers); // [1, 2, 3]\n      console.log(newNumbers); // [1, 2, 3, 4]"},{title:"Higher-Order Functions (고차 함수)",content:"고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수입니다. 이는 함수형 프로그래밍의 중요한 특징 중 하나로, 코드를 재사용하고 모듈화하는 데 도움을 줍니다.",code:"// 고차 함수 예시\n      const applyOperation = (a, b, operation) => operation(a, b);\n      \n      const multiply = (a, b) => a * b;\n      console.log(applyOperation(5, 3, multiply)); // 15"},{title:"First-Class Functions (일급 함수)",content:"자바스크립트에서는 함수가 일급 시민(First-Class Citizen)입니다. 이는 함수를 변수에 할당하거나, 다른 함수의 인자로 전달하거나, 반환할 수 있음을 의미합니다.",code:"// 일급 함수 예시\n      const sayHello = () => 'Hello';\n      const greet = sayHello; // 함수를 변수에 할당\n      console.log(greet()); // 'Hello'"},{title:"Recursion (재귀)",content:"재귀는 함수가 자기 자신을 호출하는 방식입니다. 재귀는 반복문 대신 사용되기도 하며, 특히 재귀적 데이터 구조를 처리할 때 유용합니다.",code:"// 재귀 함수 예시 (팩토리얼 계산)\n      const factorial = (n) => {\n        if (n === 1) return 1;\n        return n * factorial(n - 1);\n      };\n      \n      console.log(factorial(5)); // 120"},{title:"Map, Filter, Reduce (맵, 필터, 리듀스)",content:"함수형 프로그래밍에서 자주 사용하는 배열 메서드입니다. 각 메서드는 배열을 순회하면서 새로운 배열이나 값을 반환하는 역할을 합니다.",code:"// map: 배열의 각 요소를 변환하여 새로운 배열 반환\n      const numbers = [1, 2, 3];\n      const doubled = numbers.map(n => n * 2);\n      console.log(doubled); // [2, 4, 6]\n      \n      // filter: 조건에 맞는 요소만 추출하여 새로운 배열 반환\n      const evenNumbers = numbers.filter(n => n % 2 === 0);\n      console.log(evenNumbers); // [2]\n      \n      // reduce: 배열을 하나의 값으로 합침\n      const sum = numbers.reduce((acc, curr) => acc + curr, 0);\n      console.log(sum); // 6"}]},{id:"2",title:"React Basics",content:"React의 기본 개념, JSX, 컴포넌트, Props, State, 이벤트 처리 및 리스트 렌더링에 대해 학습합니다.",depth:0},{id:"2.1",title:"JSX(Javascript Syntax eXtension)",content:"JSX는 JavaScript와 HTML을 결합한 문법입니다. React 컴포넌트에서 HTML을 정의할 때 사용하며, 실제 브라우저에서 실행되기 전에 Babel이 이를 JavaScript 코드로 변환합니다.",depth:1,sections:[{title:"JSX Basics",content:"JSX는 React에서 HTML을 정의하기 위한 문법입니다. JSX는 JavaScript 코드로 변환되므로 태그 내부에 JavaScript 표현식을 삽입할 수 있습니다.",code:"const element = <h1>Hello, world!</h1>;"},{title:"Attributes in JSX",content:"JSX에서 HTML 속성은 camelCase로 작성되며, JavaScript 값을 전달하려면 `{}`를 사용합니다.",code:'<img src={imageUrl} alt="Sample Image" />'},{title:"JSX Limitations",content:"JSX는 반드시 닫힌 태그를 사용해야 하며, 여러 요소를 반환할 때는 부모 요소로 감싸야 합니다.",code:"// 반드시 부모 요소로 감싸야 합니다\nreturn (\n  <>\n    <h1>Hello</h1>\n    <p>Welcome!</p>\n  </>\n);"}]},{id:"2.2",title:"Components and props",content:"React 컴포넌트는 재사용 가능한 UI 블록입니다. Props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하는 방법입니다.",depth:1,sections:[{title:"What is a Component?",content:"컴포넌트는 React의 기본 빌딩 블록입니다. UI를 작은 조각으로 나누고 각 조각을 독립적으로 관리할 수 있습니다.",code:"function Greeting() {\n  return <h1>Hello, World!</h1>;\n}"},{title:"Functional Components",content:"함수형 컴포넌트는 간단한 구조와 React Hooks를 사용할 수 있는 장점으로 가장 많이 사용됩니다.",code:"function Welcome(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}"},{title:"Class Components",content:"클래스형 컴포넌트는 ES6 클래스 문법으로 정의되며, 이전 React 버전에서 주로 사용되었습니다.",code:"class Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}!</h1>;\n  }\n}"},{title:"Props",content:"Props는 부모에서 자식 컴포넌트로 데이터를 전달하기 위한 방법입니다. 읽기 전용이며, 자식 컴포넌트에서 변경할 수 없습니다.",code:"<Greeting name=\"Alice\" /> // 'Hello, Alice!' 출력"},{title:"Default Props",content:"컴포넌트의 기본값을 설정하려면 defaultProps를 사용합니다.",code:'function Greeting({ name = "Guest" }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nGreeting.defaultProps = {\n  name: "Guest",\n};'},{title:"React란?",content:"React는 웹사이트를 만들 때 사용하는 도구예요. 마치 레고 블록처럼 작은 부품들(이걸 '컴포넌트'라고 해요)을 조립해서 웹사이트를 만듭니다.",code:""},{title:"Functional vs Class Components",content:"컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트로 나눌 수 있습니다. 함수형 컴포넌트는 함수 형태로 정의되며 주로 사용됩니다.",code:"//함수형 컴포넌트 (새로운 방식, 더 많이 사용됨)\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n//클래스형 컴포넌트 (예전 방식)\nclass Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}"},{title:"함수형 컴포넌트를 더 많이 쓰는 이유는?",content:"- 코드가 더 간단하고 읽기 쉬워요\n- Hooks라는 편리한 기능을 사용할 수 있어요\n- 성능이 더 좋아요\n- 테스트하기가 더 쉬워요",code:""}]},{id:"2.3",title:"State와 Lifecycle",content:"React에서 'State'는 컴포넌트의 내부 데이터나 속성을 나타내며, 시간이 지남에 따라 변경될 수 있는 값입니다.\nState를 통해 컴포넌트는 동적이고 상호작용적인 사용자 인터페이스를 생성할 수 있습니다.\nState 값은 컴포넌트 내에서 특정 메서드를 통해 업데이트할 수 있으며, state가 변경되면 컴포넌트가 다시 렌더링됩니다.\n'Lifecycle 메서드'는 컴포넌트의 생명주기를 제어하는 메서드로,\n컴포넌트가 생성되고 업데이트되고 삭제되는 각각의 단계에서 특정 작업을 수행할 수 있도록 해줍니다.",depth:1,sections:[{title:"State란 무엇인가?",content:"State는 컴포넌트의 동적인 데이터를 저장하며, 변경 시 컴포넌트를 다시 렌더링합니다.",code:"class Counter extends React.Component {\n  state = { count: 0 };\n\n  increment = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  render() {\n    return {this.state.count};\n  }\n}"},{title:"Lifecycle 메서드",content:"React 컴포넌트는 생성부터 제거까지 일련의 단계들을 거치며, 이 과정에서 특정 작업을 수행할 수 있도록 하는 라이프사이클 메서드가 있습니다. 라이프사이클 메서드는 컴포넌트의 초기화, 업데이트, 제거 과정에서 각각 호출되며, 각 메서드는 다양한 상황에서 필요한 작업을 수행하기에 적합합니다.",code:""},{title:"componentDidMount",content:"componentDidMount는 컴포넌트가 처음 화면에 렌더링된 직후에 호출됩니다. 이 메서드는 데이터 불러오기나 타이머 설정 등 초기화 작업을 수행하기에 적합합니다. 컴포넌트가 마운트될 때 한 번만 호출되기 때문에, 외부 API 호출이나 리소스 초기화 같은 비동기 작업을 여기서 처리할 수 있습니다.",code:"class DataFetcher extends React.Component {\n  componentDidMount() {\n    fetch('https://api.example.com/data')\n      .then(response => response.json())\n      .then(data => this.setState({ data }));\n  }\n\n  render() {\n    return {this.state.data};\n  }\n}"},{title:"shouldComponentUpdate",content:"shouldComponentUpdate는 컴포넌트가 업데이트될지 여부를 결정하는 메서드로, true나 false를 반환하여 렌더링을 최적화할 수 있습니다. 기본적으로 true를 반환하며, 특정 조건에서만 업데이트가 필요할 때 사용됩니다.",code:"class Counter extends React.Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextState.count % 2 === 0; // count가 짝수일 때만 업데이트\n  }\n\n  render() {\n    return {this.state.count};\n  }\n}"},{title:"componentDidUpdate",content:"componentDidUpdate는 컴포넌트가 업데이트된 직후에 호출되며, 이전 props와 state에 접근할 수 있습니다. 이 메서드는 외부 리소스를 다시 불러오거나 DOM 조작이 필요할 때 유용하며, props나 state 변화에 따른 추가 작업을 수행할 때 사용됩니다.",code:"class ColorChanger extends React.Component {\n  componentDidUpdate(prevProps) {\n    if (prevProps.color !== this.props.color) {\n      console.log('Color updated:', this.props.color);\n    }\n  }\n\n  render() {\n    return {this.props.color};\n  }\n}"},{title:"componentWillUnmount",content:"componentWillUnmount는 컴포넌트가 화면에서 제거되기 직전에 호출됩니다. 이 메서드는 타이머나 이벤트 리스너와 같은 리소스를 정리하여 메모리 누수를 방지하는 데 유용합니다. 컴포넌트가 언마운트될 때는 리소스를 정리하지 않으면 메모리 누수가 발생할 수 있으므로, 이 메서드에서 정리 작업을 수행하는 것이 중요합니다.",code:"class Timer extends React.Component {\n  componentDidMount() {\n    this.timerID = setInterval(() => this.tick(), 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.timerID);\n  }\n\n  tick() {\n    this.setState({ time: new Date() });\n  }\n\n  render() {\n    return {this.state.time.toLocaleTimeString()};\n  }\n}"},{title:"getDerivedStateFromProps",content:"getDerivedStateFromProps는 props에서 파생된 state를 컴포넌트의 상태로 가져와야 할 때 사용하는 메서드입니다. 이 메서드는 render 이전에 호출되어 새로운 props에 따라 state를 업데이트할 수 있습니다.",code:"class Example extends React.Component {\n  static getDerivedStateFromProps(nextProps, prevState) {\n    if (nextProps.value !== prevState.value) {\n      return { value: nextProps.value };\n    }\n    return null;\n  }\n\n  render() {\n    return {this.state.value};\n  }\n}"},{title:"getSnapshotBeforeUpdate",content:"getSnapshotBeforeUpdate는 업데이트되기 직전 DOM 상태를 캡처할 수 있는 메서드입니다. 반환된 값은 componentDidUpdate로 전달되어 추가적인 DOM 조작이 필요할 때 유용하게 사용됩니다.",code:"class ScrollTracker extends React.Component {\n  getSnapshotBeforeUpdate(prevProps, prevState) {\n    return this.div.scrollHeight;\n  }\n\n  componentDidUpdate(prevProps, prevState, snapshot) {\n    if (snapshot !== this.div.scrollHeight) {\n      this.div.scrollTop = this.div.scrollHeight;\n    }\n  }\n\n  render() {\n    return <div ref={div => this.div = div}>{/* content */}</div>;\n  }\n}"},{title:"useEffect와 Cleanup",content:"`useEffect` 훅을 사용하여 비동기 작업을 수행하거나, 컴포넌트가 제거될 때 리소스를 정리할 수 있습니다.",code:'useEffect(() => {\n  const interval = setInterval(() => {\n    console.log("Tick");\n  }, 1000);\n\n  return () => clearInterval(interval); // Cleanup\n}, []);'}]},{id:"2.4",title:"Handling events",content:"React에서 이벤트를 처리하는 방법에 대해 학습합니다. JSX에서 이벤트는 camelCase로 작성되며, 함수 참조를 통해 전달됩니다.",depth:1,sections:[{title:"Basic Event Handling",content:"이벤트 핸들러는 JSX에서 `{}`를 사용해 전달할 수 있으며, 함수 참조를 통해 전달됩니다.",code:'function App() {\n  const handleClick = () => console.log("Button clicked!");\n\n  return <button onClick={handleClick}>Click me</button>;\n}'},{title:"Passing Arguments to Event Handlers",content:"이벤트 핸들러에 인수를 전달하려면 람다 함수를 사용할 수 있습니다.",code:"<button onClick={() => this.handleClick(id)}>Click me</button>"}]},{id:"2.5",title:"Lists and keys",content:"React에서 리스트를 렌더링할 때는 고유한 키를 사용해야 합니다.",depth:1,sections:[{title:"Rendering Lists",content:"JavaScript의 `map` 메서드를 사용해 리스트를 렌더링합니다.",code:"const items = [1, 2, 3];\nconst list = items.map(item => <li key={item}>{item}</li>);\nreturn <ul>{list}</ul>;"},{title:"Keys의 중요성",content:"고유한 키는 React가 리스트 항목을 식별하고 성능을 최적화하는 데 사용됩니다.",code:"// 키를 사용하지 않을 경우\n<li>{item}</li>\n\n// 키를 사용할 경우\n<li key={item}>{item}</li>"}]},{id:"3",title:"React Hooks",content:"React Hooks는 함수형 컴포넌트에서도 상태와 생명주기 메서드를 사용할 수 있도록 도와주는 기능입니다. Hooks는 React 16.8에서 도입되었으며, 클래스형 컴포넌트의 대안으로 많이 사용됩니다.",depth:0},{id:"3.1",title:"useState and useEffect",content:"`useState`와 `useEffect`는 React에서 가장 기본적인 훅으로, 각각 컴포넌트의 상태를 관리하고 생명주기 이벤트를 처리하는 데 사용됩니다.",depth:1,sections:[{title:"useState",content:"`useState`는 함수형 컴포넌트에서 상태를 선언할 수 있도록 해줍니다. 배열 구조 분해를 통해 상태 값과 상태를 업데이트하는 함수를 얻을 수 있습니다.",code:"import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n    </div>\n  );\n}\n\nexport default Counter;"},{title:"useEffect",content:"`useEffect`는 React 컴포넌트가 마운트되거나 업데이트될 때 특정 작업을 수행하도록 해줍니다. 의존성 배열을 사용하여 실행 조건을 제어할 수 있습니다.",code:"import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const intervalId = setInterval(() => {\n      setSeconds(prev => prev + 1);\n    }, 1000);\n\n    // Cleanup: 컴포넌트 언마운트 시 타이머 정리\n    return () => clearInterval(intervalId);\n  }, []);\n\n  return <div>Elapsed Time: {seconds} seconds</div>;\n}\n\nexport default Timer;"},{title:"Dependency Array (의존성 배열)",content:"의존성 배열을 통해 `useEffect`가 실행될 조건을 제어할 수 있습니다. 배열이 비어 있으면 한 번만 실행되며, 배열에 값이 포함되면 해당 값이 변경될 때마다 실행됩니다.",code:'useEffect(() => {\n  console.log("Effect triggered!");\n\n  return () => {\n    console.log("Cleanup triggered!");\n  };\n}, [dependency]); // dependency가 변경될 때만 실행'}]},{id:"3.2",title:"Custom Hooks",content:"Custom Hooks는 로직을 재사용 가능하게 추상화한 훅입니다. React의 기본 훅을 조합하여 새로운 훅을 생성할 수 있습니다.",depth:1,sections:[{title:"Creating a Custom Hook",content:"Custom Hook은 이름이 `use`로 시작하는 함수입니다. 이를 통해 여러 컴포넌트에서 동일한 로직을 쉽게 공유할 수 있습니다.",code:"import { useState, useEffect } from 'react';\n\nfunction useWindowSize() {\n  const [windowSize, setWindowSize] = useState({\n    width: window.innerWidth,\n    height: window.innerHeight,\n  });\n\n  useEffect(() => {\n    const handleResize = () => {\n      setWindowSize({\n        width: window.innerWidth,\n        height: window.innerHeight,\n      });\n    };\n\n    window.addEventListener('resize', handleResize);\n\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return windowSize;\n}\n\n// 사용 예시\nimport React from 'react';\nimport useWindowSize from './useWindowSize';\n\nfunction App() {\n  const { width, height } = useWindowSize();\n\n  return (\n    <div>\n      <h1>Window Size</h1>\n      <p>Width: {width}px, Height: {height}px</p>\n    </div>\n  );\n}\n\nexport default App;"},{title:"Benefits of Custom Hooks",content:"Custom Hooks를 사용하면 중복된 로직을 줄이고, 코드의 가독성과 유지보수성을 높일 수 있습니다. 또한, 재사용성을 극대화할 수 있습니다.",code:"// 예: API 데이터 Fetching\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch(url)\n      .then(response => response.json())\n      .then(data => {\n        setData(data);\n        setLoading(false);\n      });\n  }, [url]);\n\n  return { data, loading };\n}"}]},{id:"3.3",title:"Context API with useContext",content:"Context API와 `useContext` 훅을 사용하면 전역 상태를 손쉽게 관리할 수 있습니다. 이를 통해 props를 계속 전달하는 'props drilling' 문제를 해결할 수 있습니다.",depth:1,sections:[{title:"Using Context API with useContext",content:"`useContext` 훅을 사용하여 Context 데이터를 쉽게 접근하고 사용할 수 있습니다. 아래는 테마 변경 기능을 예로 든 구현입니다.",code:"import React, { createContext, useContext, useState } from 'react';\n\n// 1. Context 생성\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n\n  const toggleTheme = () => {\n    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// 2. Context 사용\nfunction ThemeButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n\n  return (\n    <button\n      onClick={toggleTheme}\n      style={{\n        backgroundColor: theme === 'light' ? '#fff' : '#333',\n        color: theme === 'light' ? '#000' : '#fff',\n      }}\n    >\n      Toggle Theme\n    </button>\n  );\n}\n\nfunction App() {\n  return (\n    <ThemeProvider>\n      <div>\n        <h1>Context API and useContext Example</h1>\n        <ThemeButton />\n      </div>\n    </ThemeProvider>\n  );\n}\n\nexport default App;"},{title:"Nested Context Handling",content:"Context를 중첩해서 사용할 경우, 별도의 Custom Hook을 생성하여 복잡도를 줄일 수 있습니다.",code:"// 예: UserContext와 ThemeContext를 함께 사용\nfunction useCombinedContext() {\n  const user = useContext(UserContext);\n  const theme = useContext(ThemeContext);\n  \n  return { user, theme };\n}"}]},{id:"4",title:"State Management",content:"Detailed content about State Management",depth:0},{id:"4.1",title:"Redux basics",content:"Detailed content about Redux basics",depth:1},{id:"4.2",title:"React Redux hooks",content:"Detailed content about React Redux hooks",depth:1},{id:"4.3",title:"Alternative: Zustand or Recoil",content:"Detailed content about Zustand or Recoil",depth:1},{id:"5",title:"Routing",content:"Detailed content about React Router",depth:0},{id:"5.1",title:"React Router",content:"Detailed content about React Router",depth:1},{id:"6",title:"Testing",content:"Detailed content about Testing",depth:0},{id:"6.1",title:"Jest and React Testing Library",content:"Detailed content about Jest and React Testing Library",depth:1},{id:"7",title:"Build Tools and Development Environment",content:"Detailed content about Build Tools and Development Environment",depth:0},{id:"7.1",title:"Webpack or Create React App",content:"Detailed content about Webpack or Create React App",depth:1},{id:"7.2",title:"ESLint and Prettier",content:"Detailed content about ESLint and Prettier",depth:1},{id:"8",title:"Advanced Topics",content:"Detailed content about Advanced Topics",depth:0},{id:"8.1",title:"Server-Side Rendering (Next.js)",content:"Detailed content about Server-Side Rendering (Next.js)",depth:1},{id:"8.2",title:"Performance optimization",content:"Detailed content about Performance optimization",depth:1},{id:"8.3",title:"Code splitting",content:"Detailed content about Code splitting",depth:1},{id:"8.4",title:"Progressive Web Apps (PWAs)",content:"Detailed content about Progressive Web Apps (PWAs)",depth:1}];n(732),n(8452);var eo=n(5828);let es=e=>{let{title:t,sections:n}=e;return(0,o.jsxs)("div",{className:"detail-container",children:[(0,o.jsx)("h1",{children:t}),n.map((e,t)=>(0,o.jsxs)("section",{className:"feature-section",children:[(0,o.jsx)("h2",{children:e.title}),e.content.split("\n").map((e,t)=>(0,o.jsx)("p",{children:e},t)),e.code&&(0,o.jsx)(eo.A,{language:"typescript",children:e.code})]},t))]})},el=e=>{let{topicId:t}=e,n=en.find(e=>e.id===t);return console.log("Found topic:",n),(0,o.jsx)(o.Fragment,{children:n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(et.m,{children:[(0,o.jsxs)("title",{children:[n.title," - React Study"]}),(0,o.jsx)("meta",{name:"description",content:"".concat(n.title)}),(0,o.jsx)("meta",{name:"keywords",content:"React, ".concat(n.title)})]}),(0,o.jsx)(es,{title:n.title,sections:n.sections||[]})]}):(0,o.jsx)("p",{children:"Topic not found."})})},ei=()=>{let[e,t]=(0,s.useState)(null),n=e=>{t(e)};return(0,o.jsxs)("div",{className:"content-wrapper",children:[(0,o.jsxs)("div",{className:"left-panel",children:[(0,o.jsx)("h1",{className:"title",children:"React Study"}),(0,o.jsxs)(et.m,{children:[(0,o.jsx)("title",{children:"React Study"}),(0,o.jsx)("meta",{name:"description",content:"soohyeon-won react study"}),(0,o.jsx)("meta",{name:"keywords",content:"react, soohyeon-won, study"})]}),(0,o.jsx)("ul",{className:"list",children:en.map(t=>(0,o.jsx)("li",{className:"list-item ".concat(e===t.id?"selected":""," ").concat(0===t.depth?"no-hover":""),onClick:1===t.depth?()=>n(t.id):void 0,children:0===t.depth?(0,o.jsxs)("h2",{children:[t.id,". ",t.title]}):(0,o.jsxs)("span",{children:["- ",t.title]})},t.id))})]}),(0,o.jsx)("div",{className:"right-panel",children:e?(0,o.jsx)("div",{className:"component-item",children:(0,o.jsx)(el,{topicId:e})}):(0,o.jsx)("p",{children:"Select a topic to view its preview here."})})]})};var ec=n(6874),er=n.n(ec),ea=n(8001);let ed=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:"/",children:"WEB"}),(0,o.jsx)("h2",{children:"Next Practice Comp"}),(0,o.jsxs)("ol",{children:[(0,o.jsx)("img",{src:"/next.svg",width:100,height:100}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/read/1",children:"html"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/read/2",children:"css"})})]}),(0,o.jsxs)("ol",{children:[(0,o.jsx)(ea.Control,{}),(0,o.jsx)("li",{children:(0,o.jsx)(er(),{href:"/delete",children:"Nextjs Link"})})]})]}),eu=()=>{var e;let[t,n]=(0,s.useState)(1),l=e=>{n(e)},c=(0,s.useMemo)(()=>[{title:"study",Component:(0,o.jsx)(ei,{})},{title:"practice",Component:(0,o.jsx)(Q,{})},{title:"next",Component:(0,o.jsx)(ed,{})}],[]);return(0,o.jsxs)("div",{className:"app-container",children:[(0,o.jsx)("div",{className:"top-tabs",children:c.map((e,n)=>(0,o.jsx)(i,{to:e.title,label:e.title,$isActive:n===t,onClick:()=>l(n)},n))}),null===(e=c.at(t))||void 0===e?void 0:e.Component]})}},2750:()=>{},3114:(e,t,n)=>{Promise.resolve().then(n.bind(n,2001)),Promise.resolve().then(n.t.bind(n,8751,23))},8001:(e,t,n)=>{"use strict";n.d(t,{Control:()=>i});var o=n(5155),s=n(5695),l=n(1890);function i(){let e=(0,s.useParams)();console.log("test",e);let t=e.id;return console.log("API_URL",l.env.API_URL),console.log("NEXT_PUBLIC_API_URL","http://localhost:9999"),(0,o.jsx)(o.Fragment,{children:t?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/create",children:"create"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/update/"+t,children:"update"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/delete",children:"delete"})})]}):null})}},8116:()=>{},8751:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[292,40,441,684,358],()=>t(3114)),_N_E=e.O()}]);