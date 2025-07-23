import { NextResponse } from "next/server";
import CookieStore from "@/libs/cookies/CookieStore";
import tokenGenerator from "@/libs/token/Token";
import CustomerModel from "@/models/CustomerModel";

export async function GET(request: Request) {
  if (await CookieStore.get("session")) {
    return NextResponse.json({ success: true }, { status: 200 });
  }
  const data = await CustomerModel.addGeust();
  const userToken = tokenGenerator({ id: data.id });

  const response = NextResponse.json({ success: true }, { status: 200 });
  
  response.cookies.set("session", userToken, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30 * 3,
  });

  return response;
}
