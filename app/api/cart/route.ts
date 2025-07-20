import { GetCustomerIdByToken } from "@/controllers/CustomerController"
import CartModel from "@/models/CartModel"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const data = await req.json()
    const customer=await GetCustomerIdByToken()
    if (!customer) {
        return NextResponse.json({ message: "درحال حاضر امکان اضافه کردن محصول به سبد خرید نمیباشد!" }, { status: 403 })
    }
    const result = await CartModel.addCart(customer.id, data.id, data.quantity)
    if (!result) {
        return NextResponse.json({ message: "خطا در برقراری ارتباط با سرور" }, { status: 500 })
    }
    return NextResponse.json({ message: "محصول با موفقیت به سبد خرید اضافه شد" }, { status: 201 })
}