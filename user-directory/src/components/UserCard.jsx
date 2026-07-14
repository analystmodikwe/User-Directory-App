
export default function UserCard({ user }) {
//    take a user object and turn it into markup.
  return (
    <li className="">
      <p className="">{user.name}</p>
      <p className="">{user.email}</p>
      {/* Optional chaining (?.) guards against a missing "company" field
          so the app doesn't crash if the API data is incomplete. */}
      <p className="">{user.company?.name}</p>
    </li>
  );
}