// interface PostProps {
//     username: string,
//     imageurl: string,
//     message: string,
//     createdAt: string,
//     likedBy: UserProps[],
// }

export default function Post(postData) {
    
    return (
        <div>
            <h2>Username: {postData.postedBy.username}</h2>
            <img src={postData.imageUrl} alt="User-uploaded image" />
            <p>{postData.message}</p>
            <p>{postData.createdAt}</p>
        </div>
    )
}