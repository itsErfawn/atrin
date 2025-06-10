import prisma from "@/lib/db"; 

export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function createUser(data: { name: string; email: string }) {
  return prisma.user.create({ data });
}
