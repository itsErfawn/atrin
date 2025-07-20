import CookieStore from "@/libs/cookies/CookieStore";
import { tokenVerifier } from "@/libs/token/Token";

export async function GetCustomerIdByToken(): Promise<{ id: string } | false> {
    const cookie=await CookieStore.get("user_token")||await CookieStore.get("geust_token")
    if(!cookie||!cookie.value)return false
    const verify=tokenVerifier(cookie.value)
    if(verify===true)return false
    return verify
}