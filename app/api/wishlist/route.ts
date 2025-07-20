import { GetCustomerIdByToken } from "@/controllers/CustomerController"
import WishListModel from "@/models/WishListModel"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const request_body=await req.json()
    const customer=await GetCustomerIdByToken()
    if(!customer){
        return NextResponse.json({ message: "درحال حاضر امکان اضافه کردن محصول به لیست علاقه مندی نمیباشد!" }, { status: 403 })
    }
    const data=await WishListModel.addWish(customer.id,request_body.product_id)
    return NextResponse.json({state:data.state},{status:data.status})
}