import { useContext } from "react";
import { Box, Button, Container, List, ListItem, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { PostIDContext } from "../../../context/PostIDContext";
import { PostInfoContext } from "../../../context/PostInfoContext";

import useSinglePostStyles from "./useSinglePostStyles";

const SinglePost = ({ posts }) => {
    const {
        listElementStyles,
        postTitleStyles,
        postBodyStyles,
        showFullVersionButtonContainerStyles,
        showFullVersionButtonStyles,
    } = useSinglePostStyles();

    const { setPostID } = useContext(PostIDContext);
    const { setPostName, setPostBody } = useContext(PostInfoContext);

    const handleShowPostDetails = (id, title, body) => {
        setPostID(id);
        setPostName(title);
        setPostBody(body);
    };

    const showSinglePost = posts.map(({ id, title, body }) => (
        <ListItem key={id} className={listElementStyles}>
            <Typography variant="h2" className={postTitleStyles}>
                {title}
            </Typography>
            <Typography variant="body1" className={postBodyStyles}>
                {body}
            </Typography>
            <Box component="div" className={showFullVersionButtonContainerStyles}>
                <Link to={`/posts/${id}/comments`}>
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
        <Container maxWidth="md">
            <List>{showSinglePost}</List>
        </Container>
    );
};

export default SinglePost;
