import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../pages/Home/HomePage";
import DetailPostPage from "../pages/Post/DetailPostPage";
import CreatePostPage from "../pages/Post/CreatePostPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail-post/:id" element={<DetailPostPage />} />
                <Route path="/create-post" element={<CreatePostPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;