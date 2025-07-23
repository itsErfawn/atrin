import CookieStore from "@/libs/cookies/CookieStore";
import { tokenVerifier } from "@/libs/token/Token";
import { JwtPayload } from "jsonwebtoken";

export async function GetCustomerIdByToken(): Promise<{ id: string } | false> {
    const cookie = await CookieStore.get('session');
    if (!cookie || !cookie.value) return false;
  
    const verify = tokenVerifier(cookie.value);
  
    if (verify === false) return false;  
  
    const customerId = (verify as JwtPayload).id;
  
    if (!customerId) return false;
  
    return { id: customerId };
  }
  