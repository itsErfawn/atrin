import CookieStore from "@/libs/cookies/CookieStore"
import { tokenVerifier } from "@/libs/token/Token"
import CartModel from "@/models/CartModel"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const data=await req.json()
    const cookie=await CookieStore.get("user_token") || await CookieStore.get("geust_token")
    const verify=tokenVerifier((cookie?.value as string))
    if(verify===true){
        return NextResponse.json({message:"forbidden"},{status:403})
    }
    const result=await CartModel.addCart(verify.id,data.id,data.quantity)    
    // if(!result){

    // }
    return NextResponse.json(data,{status:201})
}