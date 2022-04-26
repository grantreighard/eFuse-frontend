import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './createPost.module.css';

const CreatePost = () => {
    return (
        <div className={styles.createPost}>
            <input placeholder="What's on your mind?" className={styles.postInput} />
            <div>
                <div>
                    <FontAwesomeIcon icon={["fas", "camera"]} />
                    Add Media
                </div>
            </div>
        </div>
    )
}

export default CreatePost;