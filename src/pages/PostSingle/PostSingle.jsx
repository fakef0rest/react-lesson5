import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const PostSingle = () => {
    const { postId } = useParams()
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
    }, [postId])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
    }, [post])

    return (
        <div>
            <h1>PostSingle</h1>
            <Link to={`/user/${user.id}`} style={{ 
                display: 'block',
                paddingBottom: '10px'}}
            >{user.name}</Link>
            <strong>{user.username ? `@${user.username}` : null}</strong>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    )
}