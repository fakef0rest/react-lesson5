import { useEffect, useState } from "react"
import { PostItem } from "../../components";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </ul>
        </div>
    )
}