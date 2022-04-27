import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../assets/profile-picture.jpeg';
import convertTimestamp from '../util/time';
import Comment from './comment';
import { IPostProps, IPost, IComment } from '../types/posts';
import { PostsContext } from '../contexts/postContext';

import styles from './post.module.css';

const Post: React.FC<IPostProps> = ({ post }: IPostProps) => {
    const { posts, fetchPosts } = useContext(PostsContext);
    const [comment, setComment] = useState("");

    const addComment = () => {
        if (comment) {
            const newComment: IComment = {
                id: 0,
                title: "Hello, world",
                subtitle: "A new comment",
                content: comment,
                stats: {
                    hypes: 0,
                    shares: 0,
                    replies: 0
                }
            }
    
            if (post.id < 2) {
                const localCommentsForStarterPosts = JSON.parse(localStorage.getItem("eFuseCommentsForStarters") || '[{"id":0,"comments":[]},{"id":1,"comments":[]}]');
                newComment.id = localCommentsForStarterPosts[post.id].comments.length;
                localCommentsForStarterPosts[post.id].comments.push(newComment);
                localStorage.setItem("eFuseCommentsForStarters", JSON.stringify(localCommentsForStarterPosts));
            } else {
                const localPosts: IPost[] = JSON.parse(localStorage.getItem("eFusePosts") || "[]");
                const correctIndex = localPosts.findIndex(postObj => postObj.id === post.id);
                const correctPost = localPosts[correctIndex];
                newComment.id = correctPost.comments.length;
                correctPost.comments.push(newComment);
                localPosts.splice(correctIndex, 1, correctPost);
                localStorage.setItem("eFusePosts", JSON.stringify(localPosts));
            }
    
            fetchPosts();
            setComment("");
        }
    }

    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.leftGroup}>
                    <img src={profilePic} alt={`profile icon for ${post.user}`} className={styles.profilePic} width="60" height="60" />
                    <div className={styles.userAndTime}>
                        <h2 className={styles.user}>{post.user}</h2>
                        <p className={styles.time}>{convertTimestamp(post.timestamp)} ago</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={["fas", "ellipsis"]} className={styles.ellipsis} />
            </div>
            <div className={styles.content}>
                {post.content}
            </div>
            <div className={styles.statBar}>
                <div className={styles.singleStat}>
                    <FontAwesomeIcon icon={["fal", "droplet"]} className={styles.statIcon} />
                    <span className={styles.stat}>{post.stats.hypes}</span>
                    <span className={styles.statLabel}>Hypes</span>
                </div>
                <div className={styles.singleStat}>
                    <FontAwesomeIcon icon={["fal", "message"]} className={styles.statIcon}  />
                    <span className={styles.stat}>{post.stats.comments}</span>
                    <span className={styles.statLabel}>Comments</span> 
                </div>
                <div className={styles.singleStat}>
                    <FontAwesomeIcon icon={["fal", "share-nodes"]} className={styles.statIcon}  />
                    <span className={styles.stat}>{post.stats.shares}</span>
                    <span className={styles.statLabel}>Shares</span> 
                </div>
                <div className={styles.singleStat}>
                    <span className={styles.stat}>{post.stats.views}</span>
                    <span className={styles.statLabel}>Views</span> 
                </div>
            </div>
            <div className={styles.commentBar}>
                <FontAwesomeIcon icon={["fal", "message"]} className={styles.commentLeftIcon}  />
                <input className={styles.addComment} placeholder="Add comment" value={comment} onChange={e => setComment(e.target.value)} />
                <FontAwesomeIcon icon={["fal", "circle-plus"]} className={styles.commentRightIcon} onClick={addComment}  />
            </div>

            { post.comments.length ? <div className={styles.commentSeparator}/> : null }

            { post.comments.map((comment, i) => {
                return <Comment comment={comment} key={i} />
            })}
        </div>
    )
}

export default Post;