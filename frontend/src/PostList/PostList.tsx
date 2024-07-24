import { useState, useEffect } from "react";
import Post from "../Post/Post";

export default function PostList() {
    const [ posts, setPosts ] = useState(null);

    // interface PostUserModel {
    //     id: number;
    //     name: string;
    //     username: string;
    //     email: string;
    // }

    // interface PostModel {
    //     id: number;
    //     message: string;
    //     imageUrl: string;
    //     createdAt: moment.Moment;
    //     postedBy: PostUserModel;
    //     likedBy: PostUserModel[];
    //     dislikedBy: PostUserModel[];
    // }
    // useState<PostModel[] | null>(null)
    
    
    // {[{post 1}, {post 2}, {post 3}]}
    
    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => response.json())
        .then(data => setPosts(data.results));
    }, []);

    return (
        <div>
            {
              posts && posts.map((post) => (
                <div>
                    <h2>Username: {post.postedBy.username}</h2>
                    <img src={post.imageUrl} alt="User-uploaded image" /> 
                    <p>{post.message}</p>
                    <p>{post.createdAt}</p>
                </div>
              ))
            }
        </div>
    )
}

