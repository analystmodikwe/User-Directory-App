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

       
    })

}