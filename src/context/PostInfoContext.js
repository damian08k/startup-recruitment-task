import { useState, createContext } from "react";

export const PostInfoContext = createContext();

const PostInfoProvider = ({ children }) => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    return (
        <PostInfoContext.Provider value={{ postTitle, postBody, setPostTitle, setPostBody }}>
            {children}
        </PostInfoContext.Provider>
    );
};

export default PostInfoProvider;
