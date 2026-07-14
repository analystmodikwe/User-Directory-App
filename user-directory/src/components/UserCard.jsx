
export default function UserCard({ user }) {
//    take a user object and turn it into markup.
  return (
    <li className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <p className="font-semibold text-gray-900">{user.name}</p>
      <p className="text-sm text-gray-600 mt-0.5">{user.email}</p>
      {/* Optional chaining (?.) guards against a missing "company" field
          so the app doesn't crash if the API data is incomplete. */}
      <p className="text-sm text-gray-600 mt-0.5">{user.company?.name}</p>
    </li>
  );
}