type Props = {
    users: { id: number; name: string; email: string }[];
  };
  
  export default function UserListView({ users }: Props) {
    return (
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <strong>{user.name}</strong>
            <div className="text-sm text-gray-500">{user.email}</div>
          </li>
        ))}
      </ul>
    );
  }
  