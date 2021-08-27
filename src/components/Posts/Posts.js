import SinglePost from "./SinglePost/SinglePost";

import useFetchedPosts from "../../hooks/useFetchedPosts";

const Posts = () => {
    const { status, data } = useFetchedPosts();

    return <div>{status === "loading" ? "Loading" : <SinglePost posts={data} />}</div>;
};

export default Posts;
