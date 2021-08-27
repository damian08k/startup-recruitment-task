import { useContext } from "react";
import { Link } from "react-router-dom";

import { PostIDContext } from "../../../context/PostIDContext";
import { PostInfoContext } from "../../../context/PostInfoContext";

import { Box, Button, Container, List, ListItem, Typography } from "@material-ui/core";

import useSinglePostStyles from "./useSinglePostStyles";

const SinglePost = ({ posts }) => {
    const { setPostID } = useContext(PostIDContext);
    const { setPostTitle, setPostBody } = useContext(PostInfoContext);

    const {
        listElementStyles,
        postTitleStyles,
        postBodyStyles,
        showFullVersionButtonContainerStyles,
        linkStyles,
        showFullVersionButtonStyles,
        postsContainerStyles,
    } = useSinglePostStyles();

    const handleShowPostDetails = (postID, postTitle, postBody) => {
        setPostID(postID);
        setPostTitle(postTitle);
        setPostBody(postBody);
    };

    const showPost = posts.map(({ id, title, body }) => (
        <ListItem key={id} className={listElementStyles}>
            <Typography variant="h2" className={postTitleStyles}>
                {title}
            </Typography>
            <Typography variant="body1" className={postBodyStyles}>
                {body}
            </Typography>
            <Box component="div" className={showFullVersionButtonContainerStyles}>
                <Link to={`/posts/${id}/comments`} className={linkStyles}>
                    <Button variant="outlined" onClick={() => handleShowPostDetails(id, title, body)}>
                        <Typography variant="button" className={showFullVersionButtonStyles}>
                            Full Version
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </ListItem>
    ));

    return (
        <Container maxWidth="md" className={postsContainerStyles}>
            <List>{showPost}</List>
        </Container>
    );
};

export default SinglePost;
