import { useSelector } from "react-redux";
import PostList from "../../component/Post/PostList";
import LoadingComponent from "../../component/Loading/LoadingComponent";

const HomePage = () => {

    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);

    if (isLoading) {
        return (
            <LoadingComponent />
        );
    }

    return (
        <>
            {error && <p className={"error"}>{error}</p>}
            <PostList />
        </>
    );
}

export default HomePage;