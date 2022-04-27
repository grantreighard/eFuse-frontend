import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostsContext } from '../contexts/postContext';

import styles from './createPost.module.css';

const CreatePost = () => {
    const [post, setPost] = useState("");
    const { fetchPosts } = useContext(PostsContext);

    const createPost = () => {
        if (post) {
            const localPosts = JSON.parse(localStorage.getItem("eFusePosts") || "[]");
        
            const newPost = {
                id: localPosts.length,
                timestamp: Date.now(),
                content: post,
                user: "Nickmercs",
                stats: {
                    hypes: 0,
                    comments: 0,
                    shares: 0,
                    views: 0
                },
                comments: []
            }

            localPosts.push(newPost);

            localStorage.setItem("eFusePosts", JSON.stringify(localPosts));

            fetchPosts();
            setPost("");
        }
    }

    return (
        <div className={styles.createPost}>
            <input placeholder="What's on your mind?" className={styles.postInput} value={post} onChange={e => setPost(e.target.value)} />
            <div className={styles.postBottom}>
                <div className={styles.mediaButtons}>
                    <div>
                        <FontAwesomeIcon icon={["fal", "camera"]} />
                        <span className={styles.buttonLabel}>Add Media</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={["fal", "video"]} />
                        <span className={styles.buttonLabel}>Go Live</span>
                    </div>
                </div>
                <div className={styles.postButton} onClick={createPost}>Post</div>
            </div>
        </div>
    )
}

export default CreatePost;