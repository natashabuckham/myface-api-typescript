import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserModel } from "../Interfaces";

export default function UserDetail() {
    const [user, setUser ] = useState<UserModel>();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => {console.log(error.message);});
    }, []);

    if (!user) {
        return <div>Loading user...</div>;
    }

    return (
        <div>
            <h1>User Detail</h1>
            <img src={user.coverImageUrl} alt="Cover image" />
            <img src={user.profileImageUrl} alt="Profile image" />
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}