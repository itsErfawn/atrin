import Model from "./Model";
class CustomerModel extends Model{
     async addGeust(){
        const id = this.CreateId()
        
        const data = {
          id,
          geust:true
        }
        
        return await this.db.customer.create({ data })
    }
    async validateCustomer(id:string){
      const data=await this.db.customer.findFirst({where:{id}})
      if(!data){return false};return true
    }
}
export default new CustomerModel();