import jwt from "jsonwebtoken"
import { Secret, verify } from "jsonwebtoken"
export default function tokenGenerator(data:object){
    const token=jwt.sign(data,(process.env.privateKey as string),{algorithm:"HS256"})
    return token
}
export function tokenVerifier(data:string){
    try{
        const validation=verify(data,(process.env.privateKey as Secret))
        return validation
    }catch(err){
        return false
    }
}