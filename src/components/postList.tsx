import { useState, useEffect } from 'react';
import Post from './post';
import STARTER_POSTS from "../constants/starterPosts";

const PostList = () => {
    const [posts, setPosts] = useState(STARTER_POSTS);

    useEffect(() => {
        const localPosts = JSON.parse(localStorage.getItem("eFusePosts") || "{}");
        if (localPosts.length) {
            setPosts(STARTER_POSTS.concat(localPosts))
        }
    }, [])

    return (
        <div>
            {posts.map(post => {
                return <Post post={post} />
            })}
        </div>
    )
}

export default PostList;