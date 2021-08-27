import { useContext } from "react";
import { useQuery } from "react-query";

import { PostIDContext } from "../context/PostIDContext";

import API_URL from "../API_URL";

const getPostDetails = async postID => {
    const response = await fetch(API_URL + `${postID}/comments`);

    if (!response.ok) {
        throw new Error("Something's wrong with the data. I could not fetch the data from that resource.");
    }

    const postDetails = await response.json();

    return postDetails;
};

const usePostDetails = () => {
    const { postID } = useContext(PostIDContext);

    return useQuery(["post", postID], () => getPostDetails(postID));
};

export default usePostDetails;
