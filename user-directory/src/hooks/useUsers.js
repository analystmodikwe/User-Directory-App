import { useState, useEffect } from 'react'; 

// the API
const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";


export function useUsers() {
    // this will hold the array of the user once fetched, its going to start empty
    const [users, setUsers] = useState([]);

    // tracking whether the fetch is still in progress, so that the UI can show a loading message
    const [isLoading, setIsLoading] = useState(true);

    // holds an error message if the fetch fails
    const [error, setError] = useState(null);

    // use useEffect that has an empty [], this is where the fetching happens
    useEffect(() =>{

        // Flag used to avoid updating state if the component unmounts mid-fetch
        let isCancelled = false;

        async function fetchUsers() {
            try {
                // mark as loading before the request starts
                setIsLoading(true); 

                // the actual network call
                const response = await fetch(USERS_ENDPOINT); 

                // check response.ok and throw if it's a bad status
                if (!response.ok) {
                    throw new Error (`Request failed with status ${response.status}`)
                }

                // parrsing the JSON body
                const data = await response.json();

                // store the users and clear previous error
                if (!isCancelled) {
                    setUsers(data);
                    setError(null);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err.message || "Failed to fetch users.");
                }
            }finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }  

        fetchUsers();
        // the cleanup function that will run if the component unmounts before the fetch resolves.
        return() => {
            isCancelled = true;
        };

        // an empty array that will run once not on every re-render
    }, []);

    return{ users, isLoading, error };
}