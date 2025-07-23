import jwt, { JwtPayload } from "jsonwebtoken"
import { Secret, verify } from "jsonwebtoken"
export default function tokenGenerator(data:object){
    const token=jwt.sign(data,(process.env.privateKey as string),{algorithm:"HS256"})
    const encodedToken = Buffer.from(token).toString('base64');
    return encodedToken
}
export function tokenVerifier(data: string): JwtPayload | false {
    try {
      const decodedToken = Buffer.from(data, 'base64').toString('utf-8');
      const validation = verify(decodedToken, process.env.privateKey as Secret);
      
      return validation as JwtPayload;
    } catch (err) {
      return false;
    }
  }