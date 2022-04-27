import { useContext, useEffect } from 'react';
import Post from './post';
import { PostsContext } from '../contexts/postContext';

import styles from './postList.module.css';

const PostList = () => {
    const { posts, fetchPosts } = useContext(PostsContext);

    useEffect(() => {
        fetchPosts();
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