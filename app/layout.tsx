import type { Metadata } from "next";
import "./globals.css";

import yekanBakh from "@/fonts/yekanBakh";
import Header from "@/components/template/Header/Header";
import Footer from "@/components/template/Footer/Footer";
import CookieStore from "@/libs/cookies/CookieStore";
import GeustAuth from "@/components/template/geust_auth/GeustAuth";

export const metadata: Metadata = {
  title: "فروشگاه اینترنتی آترین",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie=await CookieStore.get('token')||await CookieStore.get('geust_token')
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.variable}`}>
      {!cookie&&<GeustAuth/>}
        <Header />
        <main className="bg-body">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
