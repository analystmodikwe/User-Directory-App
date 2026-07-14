// passing value  and onChange as props  to make it a controlled input
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search users by name..."
      // input always shows the parent's state
      value={value}
      // every keystroke reports back up
      onChange={(event) => onChange(event.target.value)}
      // accessibility: screen readers announce this
      aria-label="Search user by name"
      className="w-full px-4 py-2.5 text-base border border-gray-300 rounded-lg mb-6
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 placeholder:text-gray-400"
    />
  );
}
