"use server"

import { PrismaClient } from "@prisma/client";
// یه نمونه تستیه برای اینکه ببینم کجاهاش مشکل داره . فلن داخل صفحات ازش استفاده نکن

const prisma = new PrismaClient();
export async function GetProductsByCategory(slug:string) {
    const category=await prisma.category.findFirst({where:{slug},include:{children:true}});
    return category
}
export async function GetCategoryMetaData(slug:string) {
    const category=await prisma.category.findFirst({where:{slug},include:{meta_data:true}});
    if(!category) return null;
    return category.meta_data;
}