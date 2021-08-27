import { useQuery } from "react-query";

import API_URL from "../API_URL";

const getPosts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Something's wrong with the data. I could not fetch the data from that resource.");
    }

    const postsList = await response.json();

    return postsList;
};

const useFetchedPosts = () => useQuery("posts", getPosts);

export default useFetchedPosts;
