import CreatePost from './createPost';
import styles from './feed.module.css';
import PostList from './postList';

const Feed = () => {
    return (
        <div className={styles.container}>
            <div className={styles.feed}>
                <CreatePost />
                <PostList />
            </div>
        </div>
    )
}

export default Feed;