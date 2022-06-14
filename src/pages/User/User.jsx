import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const User = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [userId])

    return (
        <div>
            <h1>{user.name}</h1>
            <strong>{user.username ? `@${user.username}` : null}</strong>
            <p>{user.email}</p>
            <span>{user.website}</span>
        </div>
    )
}