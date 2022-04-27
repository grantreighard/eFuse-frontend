import profilePic from '../assets/profile-picture.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './comment.module.css';

interface ICommentStats {
    hypes: number,
    shares: number,
    replies: number
}

interface IComment {
    comment: {
        id: number,
        title: string,
        subtitle: string,
        content: string,
        stats: ICommentStats
    }
}

const Comment: React.FC<IComment> = ({ comment }: IComment) => {
    return (
        <div className={styles.comment}>
            <div className={styles.header}>
                <img src={profilePic} alt={`profile icon for ${comment.title}`} className={styles.profilePic} width="40" height="40" />
                <div className={styles.titles}>
                    <div className={styles.title}>{comment.title}</div>
                    <div className={styles.subtitle}>{comment.subtitle}</div>
                </div>
            </div>
            <div className={styles.content}>
                {comment.content}
            </div>
            <div className={styles.statBar}>
                <div className={styles.singleStat}>
                    <FontAwesomeIcon icon={["fal", "droplet"]} className={styles.statIcon} />
                    <span className={styles.stat}>{comment.stats.hypes}</span>
                    <span className={styles.statLabel}>Hypes</span>
                </div>
                <div className={styles.singleStat}>
                    <FontAwesomeIcon icon={["fal", "message"]} className={styles.statIcon}  />
                    <span className={styles.stat}>{comment.stats.replies}</span>
                    <span className={styles.statLabel}>Replies</span> 
                </div>
                <div className={styles.singleStat}>
                    <FontAwesomeIcon icon={["fal", "share-nodes"]} className={styles.statIcon}  />
                    <span className={styles.stat}>{comment.stats.shares}</span>
                    <span className={styles.statLabel}>Shares</span> 
                </div>
            </div>
        </div>
    )
}

export default Comment;