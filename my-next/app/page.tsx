import RootApp from "@/next-page/src/App";

export default function Home() {
  return (
    <div>
      {/* 
      class를 넣고 싶으면 className, 
      style속성은 {{color:red, fontSize:'10px'}} 열고 넣어줘야함 -(대시) 기호는 제거하고 카멜케이스로 작성하면됨
      */}
      <RootApp />
    </div>
  );
}