# User Directory

A small React app that fetches a list of users from a public API and lets you
search through them by name, live, with no page refresh.

Built with **React + Vite** and styled with **Tailwind CSS**.

## Features

- Fetches users from [jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Displays each user's **name**, **email**, and **company name**
- Controlled search input that filters by name as you type
- Shows `No users found.` when the search has no matches
- Loading and error states while the fetch is in flight

## Tech stack

React 18 
Vite 
Tailwind CSS 
javascript

## How it works

- **`useUsers.js`** fetches the user list once on mount (`useEffect` with an
  empty dependency array) and exposes `{ users, isLoading, error }`.
- **`App.jsx`** holds the `searchTerm` state and derives `filteredUsers` with
  `useMemo`, filtering by a case-insensitive match on `user.name`.
- **`SearchBar.jsx`** is a controlled input — it has no state of its own;
  `value` and `onChange` are passed down from `App`.
- **`UserList.jsx`** decides whether to render a list of `UserCard`s or the
  `No users found.` message, depending on whether `filteredUsers` is empty.
- **`UserCard.jsx`** is a plain presentational component: one user in, one
  card out.

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL in your browser
```

### Other scripts

```bash
npm run build     # production build, output to /dist
npm run preview   # preview the production build locally
```

Vercel link
https://user-directory-app-ebon.vercel.app/

## Styling notes

All styling is done with Tailwind utility classes directly in JSX
(`className="..."`) — there are no custom CSS rules beyond the three
Tailwind directives in `src/index.css`.

The page background is set on the `<body>` tag in `index.html`, not on
`<main>` in `App.jsx`, so it fills the entire viewport regardless of how much
content is on the page:

```html
<body class="bg-grey-400">
```

`bg-grey-400` is Tailwind's `sky-500` blue at 60% opacity. To change it,
swap the class for any other `bg-{color}-{shade}` value (optionally with a
`/{opacity}` suffix), for example `bg-gray-100` or `bg-slate-50`.

## Possible next steps

- Debounce the search input for larger user lists
- Add sorting (by name, company)
- Add a details view per user (address, phone, website)
- Write component tests with Vitest + React Testing Library