import { forbidden } from "next/navigation";
import { GetCustomerIdByToken } from "./CustomerController";
import WishListModel from "@/models/WishListModel";

export async function GetWishLists() {
    const customer=await GetCustomerIdByToken()
    if(!customer){forbidden()}
    const data=await WishListModel.getWishLists(customer.id)
    return data
}