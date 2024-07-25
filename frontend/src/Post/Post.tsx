import './Post.scss';

interface PostProps {
    username: string,
    imageUrl: string,
    message: string,
    createdAt: string,
}

export default function Post(props: PostProps) {
    
    return (
        <div className="post">
            <div className="img-placeholder">
            <img src={props.imageUrl} alt="User-uploaded image" />
            </div>
            <div className="credits">
            <h2>Username: {props.username}</h2>
            <p>{props.message}</p>
            <p>{props.createdAt}</p>
            </div>
        </div>
    )
}