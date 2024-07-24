import { useState, useEffect } from "react";


export default function Post() {
    const [ post, setPost ] = useState({
        postedBy: {username: undefined},
        imageUrl: undefined,
        message: undefined,
        createdAt: undefined
    });

    return (
        <div>
            <h2>Username: {post.postedBy.username}</h2>
            <img src={post.imageUrl} alt="User-uploaded image" />
            <p>{post.message}</p>
            <p>{post.createdAt}</p>
        </div>
    )
}