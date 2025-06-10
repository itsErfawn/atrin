"use server";

import { getAllUsers, createUser } from "@/models/userModel";

export async function fetchUsersController() {
  return getAllUsers();
}

export async function createUserController(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  if (!name || !email) throw new Error("اطلاعات ناقص");

  return createUser({ name, email });
}
