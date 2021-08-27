import { useState, createContext } from "react";

export const PostIDContext = createContext();

const PostIDProvider = ({ children }) => {
    const [postID, setPostID] = useState(0);

    return <PostIDContext.Provider value={{ postID, setPostID }}>{children}</PostIDContext.Provider>;
};

export default PostIDProvider;
