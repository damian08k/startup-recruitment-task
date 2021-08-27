import { useQuery } from "react-query";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Fetched Posts error!");
    }

    const posts = await response.json();

    return posts;
};

const useFetchedPosts = () => useQuery("posts", getPosts);

export default useFetchedPosts;
