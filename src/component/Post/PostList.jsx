import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector/post-selector.js";
import PostItem from "./PostItem.jsx";

const PostList = () => {

    const posts = useSelector(selectPosts);

    return (
        <div>
            {
                posts.length ?
                    [...posts].map(post => <PostItem key={post.id} post={post} />)
                    :
                    <p>Aucune post à afficher</p>
            }
        </div>
    )
}

export default PostList