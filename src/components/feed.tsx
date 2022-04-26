import CreatePost from './createPost';
import styles from './feed.module.css';

const Feed = () => {
    return (
        <div className={styles.container}>
            <div className={styles.feed}>
                <CreatePost />
            </div>
        </div>
    )
}

export default Feed;