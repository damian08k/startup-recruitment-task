import { Box, Button, Container, List, ListItem, Typography } from "@material-ui/core";

import useSinglePostStyles from "./useSinglePostStyles";

const SinglePost = ({ posts }) => {
    const {
        listElementStyles,
        postTitleStyles,
        postBodyStyles,
        showFullVersionButtonContainerStyles,
        showFullVersionButtonStyles,
    } = useSinglePostStyles();

    const showSinglePost = posts.map(({ id, title, body }) => (
        <ListItem key={id} className={listElementStyles}>
            <Typography variant="h2" className={postTitleStyles}>
                {title}
            </Typography>
            <Typography variant="body1" className={postBodyStyles}>
                {body}
            </Typography>
            <Box component="div" className={showFullVersionButtonContainerStyles}>
                <Button variant="outlined">
                    <Typography variant="button" className={showFullVersionButtonStyles}>
                        Full Version
                    </Typography>
                </Button>
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
