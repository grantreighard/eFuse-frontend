import profilePic from '../assets/profile-picture.jpeg';
import convertTimestamp from '../util/time';

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
                <img src={profilePic} alt={`profile icon for ${post.user}`} className={styles.profilePic} width="60" height="60" />
                <div>
                    <h2>{post.user}</h2>
                    <p>{convertTimestamp(post.timestamp)} ago</p>
                </div>
            </div>
        </div>
    )
}

export default Post;