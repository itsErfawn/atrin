import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
class Model{
protected db=prisma;

}
export default Model;