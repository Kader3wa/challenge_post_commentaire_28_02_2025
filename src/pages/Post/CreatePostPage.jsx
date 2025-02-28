import NavComponent from "../../component/Nav/NavComponent";
import PostCreateComponent from "../../component/Post/PostCreateComponent";

const CreatePostPage = () => {
    return (
        <>
            <header>
                <NavComponent />
            </header>
            <PostCreateComponent />
        </>
    );
}

export default CreatePostPage;