import { useQuery } from "react-query";
import { PostIDContext } from "../context/PostIDContext";
import { useContext } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts/";

const getPostDetails = async postID => {
    const response = await fetch(API_URL + `${postID}/comments`);

    if (!response.ok) {
        throw new Error("Something's wrong with the data. I could not fetch the data from that resource.");
    }

    const posts = await response.json();

    return posts;
};

const usePostDetails = () => {
    const { postID } = useContext(PostIDContext);

    return useQuery(["post", postID], () => getPostDetails(postID));
};

export default usePostDetails;
