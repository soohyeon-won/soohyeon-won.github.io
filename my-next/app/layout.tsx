import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Control } from "@/next-page/src/components/next/Control";
import { Topic } from "@/next-page/src/components/data";

{
  /* 
  layouyt.tsx 안에 page.tsx가 있는 구조임 
  layouyt.tsx 안에는 <head>나 상단메뉴 등 공통 구조 넣기도 함
  */
}

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// 서버 컴포넌트에서만 사용가능함
export const metadata: Metadata = {
  title: "Soohyeon's Blog",
  description: "Generated by soooh",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 서버에서 실행 됨
  // Javascript disable처리해도 데이터가 노출됨
  // 정적 페이지 로드가 되었기 떄문
  // 서버 컴포넌트에서만 process.env 사용가능
  console.log('process.env.API_URL',process.env.API_URL);
  const response = await fetch(process.env.API_URL+'/topics');
  const topics = await response.json();

  return (
    <html>
      <body>
        {topics.map((topic: Topic) => (
          <div key={topic.id}>
            <h2>{topic.title}</h2>
            <p>{topic.content}</p>
          </div>
        ))}
        <Control></Control>
        {children}
      </body>
    </html>
  );
}
