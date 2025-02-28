import { useSelector } from "react-redux";
import PostDetail from "../../component/Post/PostDetail";
import { selectIsLoading } from "../../store/selector/post-selector";
import LoadingComponent from "../../component/Loading/LoadingComponent";

const DetailPostPage = () => {

    const isLoading = useSelector(selectIsLoading);

    if (isLoading) {
        return (
            <LoadingComponent />
        );
    }

    return (
        <>
            <PostDetail />
        </>
    );
}

export default DetailPostPage;