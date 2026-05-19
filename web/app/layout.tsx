import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atomy PDP Generator",
  description:
    "Atomy 스타일 제품상세페이지(PDP)를 자동 생성하는 사내 도구",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AntdRegistry>
          <ConfigProvider
            locale={koKR}
            theme={{
              token: {
                colorPrimary: "#0064b5",
                fontFamily:
                  '"Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',
                borderRadius: 8,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
