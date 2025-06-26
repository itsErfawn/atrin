import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid"
const prisma = new PrismaClient();
class Model {
    protected CreateId() {
        return uuid()
    }
    protected db = prisma;

}
export default Model;