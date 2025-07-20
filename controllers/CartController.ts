import { forbidden } from "next/navigation";
import { GetCustomerIdByToken } from "./CustomerController";
import CartModel from "@/models/CartModel";

export async function GetCarts() {
    const customer=await GetCustomerIdByToken()
    if(!customer){forbidden()}
    return await CartModel.getCarts(customer.id)
}