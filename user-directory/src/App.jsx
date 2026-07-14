// import { useState } from 'react';



// function App() {
//    return(
//     <div>
//       <useUsers />
//     </div>
//    )
// }

// export default App

// testing the API
import { useUsers } from "./hooks/useUsers.js";

export default function App() {
  const { users, isLoading, error } = useUsers();

  // Temporary — just to prove the fetch works.
  console.log("users:", users);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  return <h1>Check the console</h1>;
}
