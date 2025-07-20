import { CartItemCollectionType } from "@/types/cart";
import Model from "./Model";

class CartModel extends Model{
async addCart(customer_id:string,product_id:number,quantity:number){
    const currentCart=await this.db.cart.findFirst({where:{customer_id,product_id}})
    if(!currentCart){
        return await this.db.cart.create({data:{customer_id,product_id,quantity}})
    }
    const current_quantity=currentCart?.quantity as number
    return await this.db.cart.update({where:{id:currentCart?.id},data:{quantity:current_quantity+quantity}})
}
async getCarts(customer_id:string){
return await this.db.cart.findMany({where:{customer_id},select:{product:{select:{id:true,thumbnail:true,quantity:true,title:true,slug:true,price:true,discount:true}},quantity:true,id:true}}) as CartItemCollectionType|null
}
}
export default new CartModel();