import { useMemo, useState } from "react";
import { useUsers } from "./hooks/useUsers.js";
import SearchBar from "./components/SearchBar.jsx";
import UserList from "./components/UserList.jsx";

export default function App() {
  // Get data + loading/error state from the custom hook
  const { users, isLoading, error } = useUsers();

  // This state lives HERE, in the parent — not inside SearchBar.
  // That's what makes SearchBar "controlled" from the outside.
  const [searchTerm, setSearchTerm] = useState("");

  // useMemo re-runs the filter ONLY when "users" or "searchTerm" change —
  // not on every unrelated re-render.
  const filteredUsers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return users;

    return users.filter((user) => user.name.toLowerCase().includes(query));
  }, [users, searchTerm]);

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">User Directory</h1>

      {/* Passing state DOWN as a value, and a setter function DOWN as a callback.
       */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {isLoading && <p className="text-gray-500">Loading users...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {/* Only render the list once loading is done and there's no error */}
      {!isLoading && !error && <UserList users={filteredUsers} />}
    </main>
  );
}
