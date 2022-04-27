import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePic from '../assets/profile-picture.jpeg';
import convertTimestamp from '../util/time';
import Comment from './comment';

import styles from './post.module.css';

interface IPostStats {
    hypes: number,
    comments: number,
    shares: number,
    views: number,
}

interface ICommentStats {
    hypes: number,
    shares: number,
    replies: number
}

interface IComment {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    stats: ICommentStats
}

interface IPost {
    post: {
        id: number,
        user: string,
        timestamp: number,
        content: string,
        stats: IPostStats,
        comments: IComment[]
    }
}

const Post: React.FC<IPost> = ({ post }: IPost) => {
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
                <input className={styles.addComment} placeholder="Add comment" />
                <FontAwesomeIcon icon={["fal", "circle-plus"]} className={styles.commentRightIcon}  />
            </div>

            { post.comments.length && <div className={styles.commentSeparator}/> }

            { post.comments.map(comment => {
                return <Comment comment={comment} />
            })}
        </div>
    )
}

export default Post;