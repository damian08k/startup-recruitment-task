import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import SinglePost from "./SinglePost/SinglePost";

import useFetchedPosts from "../../hooks/useFetchedPosts";

const Posts = () => {
    const { isLoading, isSuccess, isError, error, data } = useFetchedPosts();

    if (isLoading) {
        return <Loader />;
    } else if (isError) {
        return <Error message={error.message} />;
    } else if (isSuccess) {
        return <SinglePost posts={data} />;
    }
};

export default Posts;
