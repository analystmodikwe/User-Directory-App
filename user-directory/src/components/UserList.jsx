// the components that decides "show cards" vs "show empty message" — that logic lives here and nowhere else.

import UserCard from "./UserCard.jsx";

export default function UserList({ users }) {
  // Early return: if the filtered array is empty, skip the list entirely
  // and show the empty-state message instead.
  if (users.length === 0) {
    return <p className="text-red-500 text-center py-10">No users found.</p>;
  }

  //.map() turns each user object into a <UserCard>.
  return (
    <ul className="flex flex-col gap-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
