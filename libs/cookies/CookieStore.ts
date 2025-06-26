import { cookies } from "next/headers";
type CookieType={
    name:string,
    value:string
}
type CookieCollection=CookieType[];
class CookieStore {
    cookie = cookies
    
    async get(name: string) :Promise<CookieType | undefined>{
        return (await this.cookie()).get(name) as CookieType|undefined
    }

    async getAll():Promise<CookieCollection> {
        return (await this.cookie()).getAll() 
    }

    async set(name: string, value: string){
        const date = new Date()
        const maxAge = 60 * 60 * 24 * 30 * 2;
        date.setMonth(date.getMonth() + 2)
        return (await this.cookie()).set(name, value, {
            secure: true,
            httpOnly: true,
            path: '/',
            maxAge,
        }) 
    }

    async delete(name: string) {
        (await this.cookie()).set(name, '', { maxAge: 0 })
    }

}
export default new CookieStore();