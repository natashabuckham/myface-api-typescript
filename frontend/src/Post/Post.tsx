interface PostProps {
    username: string,
    imageUrl: string,
    message: string,
    createdAt: string,
}

export default function Post(props: PostProps) {
    
    return (
        <div>
            <h2>Username: {props.username}</h2>
            <img src={props.imageUrl} alt="User-uploaded image" />
            <p>{props.message}</p>
            <p>{props.createdAt}</p>
        </div>
    )
}