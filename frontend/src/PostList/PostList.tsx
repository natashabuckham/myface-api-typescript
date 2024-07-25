import { useState, useEffect } from "react";
import Post from "../Post/Post";
import { PostModel } from "../Interfaces";
import './PostList.scss';

export default function PostList() {
    const [ posts, setPosts ] = useState<PostModel[]>();
    
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(data => setPosts(data.results));
    }, []);

    return (
        <div>
            {
              posts && posts.map((post, index) => (
                <div key={index}>
                    <Post 
                    username={post.postedBy.username} 
                    imageUrl={post.imageUrl} 
                    message={post.message} 
                    createdAt={post.createdAt}
                    />
                </div>
              ))
            }
        </div>
    )
}

