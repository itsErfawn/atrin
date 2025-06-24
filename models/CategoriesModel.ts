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
}
export default new CategoriesModel();