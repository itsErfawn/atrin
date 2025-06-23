"use server"

import { PrismaClient } from "@prisma/client";
// it's just a sample .don't use it now

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