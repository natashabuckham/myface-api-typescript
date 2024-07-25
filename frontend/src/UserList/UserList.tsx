import { useState, useEffect } from "react";
import { UserModel } from "../Interfaces";

export default function UserList() {
    const [ users, setUsers ] = useState<UserModel[]>();

    useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => setUsers(data.results));
    }, []);

    return (
        <ol>
            {
                users && users.map((user, index) => (
                    <li key={index}>
                        <a href={`/users/${user.id}`}>{user.name}</a>
                        {/* <Link to= */}
                    </li>
                ))
            }
        </ol>
    )
}