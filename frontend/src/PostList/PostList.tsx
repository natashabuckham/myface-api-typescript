import { useState, useEffect } from "react";

export default function PostList() {
    const [ posts, setPosts ] = useState({results: []});
    
    // {[{post 1}, {post 2}, {post 3}]}
    
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(data => setPosts(data));
    }, [])

    return (
        <div>
            {
                posts.results.map((post) => {
                    return (<p>Hello World</p>)
                })
            }
        </div>

    )
}

