import { useState, useEffect } from "react";

export default function UserList() {
    const [ users, setUsers ] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => setUsers(data.results));
    }, []);

    return (
        <ol>
            {
                users && users.map((user) => (
                    <li>
                        {user.name}
                    </li>
                ))
            }
        </ol>
    )
}