import {
  fetchUsersController,
  createUserController,
} from "@/controllers/usersController";
import UserListView from "@/components/users/UserListView";

export default async function UsersPage() {
  const users = await fetchUsersController();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">لیست کاربران</h1>

      <UserListView users={users} />
      <form action={createUserController} className="mt-6 space-y-2">
        <input
          name="name"
          placeholder="نام"
          className="border p-2 w-full"
          required
        />
        <input
          name="email"
          placeholder="ایمیل"
          type="email"
          className="border p-2 w-full"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          افزودن کاربر
        </button>
      </form>
    </div>
  );
}
