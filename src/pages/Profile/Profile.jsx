import { useEffect, useState } from "react"

export const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/2')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h1>{user.name}</h1>
            <strong>{user.username ? `@${user.username}` : null}</strong>
            <p>{user.email}</p>
            <span>{user.website}</span>
        </div>
    )
}