import { Link } from 'react-router-dom';

export const PostItem = ({post}) => {
    return (
        <Link to={`/posts/${post.id}`} style={{
            textDecoration: 'none',
            border: '2px solid #efefef',
            padding: '15px 10px',
            display: 'inline-block'
        }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </Link>
    )
}