import { Box, Button, Container, List, ListItem, Typography } from "@material-ui/core";
import useSinglePostStyles from "./useSinglePostStyles";

const SinglePost = () => {
    const {
        listElementStyles,
        postTitleStyles,
        postBodyStyles,
        showFullVersionButtonContainerStyles,
        showFullVersionButtonStyles,
    } = useSinglePostStyles();

    return (
        <Container maxWidth="md">
            <List>
                <ListItem className={listElementStyles}>
                    <Typography variant="h2" className={postTitleStyles}>
                        Title
                    </Typography>
                    <Typography variant="body1" className={postBodyStyles}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe velit vel ducimus necessitatibus
                        numquam quasi, aliquid aut pariatur dolorem eos obcaecati, dicta nesciunt adipisci ullam, porro
                        alias? Deleniti, doloremque blanditiis!
                    </Typography>
                    <Box component="div" className={showFullVersionButtonContainerStyles}>
                        <Button variant="outlined">
                            <Typography variant="button" className={showFullVersionButtonStyles}>
                                Full Version
                            </Typography>
                        </Button>
                    </Box>
                </ListItem>
            </List>
        </Container>
    );
};

export default SinglePost;
