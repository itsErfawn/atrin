import { WishListCollectionType } from "@/types/wishlist";
import Model from "./Model";

class WishListModel extends Model{
async addWish(customer_id:string,product_id:number){
const current_wish=await this.db.wishList.findFirst({where:{customer_id,product_id}})
if(current_wish){
    await this.db.wishList.delete({where:{id:current_wish.id}})
    return {state:false,status:200}
}
await this.db.wishList.create({data:{customer_id,product_id}})
return {state:true,status:200}
}
async getWishLists(customer_id:string){
    return await this.db.wishList.findMany({where:{customer_id},select:{product:{select:{id:true,thumbnail:true,title:true,slug:true,price:true,discount:true}},id:true}}) as WishListCollectionType|null
}
}
export default new WishListModel()