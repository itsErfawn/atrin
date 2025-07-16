import Model from "./Model";

class CategoriesModel extends Model{
async get(slug:string){
const category=await this.db.category.findFirst({where:{slug},include:{productCategories:true}})
return category
}
async getMeta(slug:string){
    const category=await this.db.category.findFirst({where:{slug},select:{meta_data:true}})
    return category
}
async getCategories(take:number=8){
const category=await this.db.category.findMany({select:{id:true,name:true}});
return category
}
}
export default new CategoriesModel();