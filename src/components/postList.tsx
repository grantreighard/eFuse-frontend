import { useState, useEffect } from 'react';
import Post from './post';
import STARTER_POSTS from "../constants/starterPosts";

import styles from './postList.module.css';

interface IComment {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    stats: {
        hypes: number,
        shares: number,
        replies: number
    }
}

interface IPost {
    id: number,
    user: string,
    timestamp: number,
    content: string,
    stats: {
        hypes: number,
        comments: number,
        shares: number,
        views: number,
    },
    comments: IComment[]
}

const PostList = () => {
    const [posts, setPosts] = useState(STARTER_POSTS);

    useEffect(() => {
        const localCommentsForStarterPosts: IComment[] = JSON.parse(localStorage.getItem("eFuseCommentsForStarters") || "[]")
        const localPosts: IPost[] = JSON.parse(localStorage.getItem("eFusePosts") || "[]");
        
        const starterPosts: IPost[] = STARTER_POSTS.map((post, i) => {
            const localComments = localCommentsForStarterPosts.filter(commentObj => commentObj.id === i)[0];
            post.comments.concat(localComments);
            return post;
        })

        if (localPosts.length) {
            setPosts(starterPosts.concat(localPosts))
        }
    }, [])

    return (
        <div className={styles.postList}>
            {posts.map(post => {
                return <Post post={post} />
            })}
        </div>
    )
}

export default PostList;