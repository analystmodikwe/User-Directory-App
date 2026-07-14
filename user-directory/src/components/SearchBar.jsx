// passing value  and onChange as props  to make it a controlled input
export default function SearchBar({ value, onChange }) {
  return (
    <input
    
      type="text"

      className="search-bar"

      placeholder="Search users by name..."

      // input always shows the parent's state
      value={value}

      // every keystroke reports back up
      onChange={(event) => onChange(event.target.value)}

      // accessibility: screen readers announce this
      aria-label="Search user by name"
    />
  );
}
