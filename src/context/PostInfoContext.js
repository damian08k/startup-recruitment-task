import { useState, createContext } from "react";

export const PostInfoContext = createContext();

const PostInfoProvider = ({ children }) => {
    const [postName, setPostName] = useState("");
    const [postBody, setPostBody] = useState("");

    return (
        <PostInfoContext.Provider value={{ postName, postBody, setPostName, setPostBody }}>
            {children}
        </PostInfoContext.Provider>
    );
};

export default PostInfoProvider;
