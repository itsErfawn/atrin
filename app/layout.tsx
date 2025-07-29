import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/template/Header/Header";
import Footer from "@/components/template/Footer/Footer";
import CookieStore from "@/libs/cookies/CookieStore";
import SessionAuth from "@/components/template/SessionAuth/SessionAuth";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی آترین",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie=await CookieStore.get('session')
  return (
    <html lang="fa" dir="rtl">
      <body>
      {!cookie&&<SessionAuth/>}
        <Header />
        <main className="bg-body">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
