import { useContext } from "react";

import { PostInfoContext } from "../../../context/PostInfoContext";

import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import SinglePostDetails from "./SinglePostDetail/SinglePostDetails";
import { Container, List, Typography } from "@material-ui/core";

import usePostDetails from "../../../hooks/usePostDetails";

import usePostDetailsStyles from "./usePostDetailsStyles";

const Posts = () => {
    const { postTitle, postBody } = useContext(PostInfoContext);

    const { isLoading, isSuccess, isError, error, data } = usePostDetails();

    const { containerStyles, postTitleStyles, postBodyStyles, commentsStyles } = usePostDetailsStyles();

    const postInformation = (
        <Container maxWidth="md" className={containerStyles}>
            <Typography variant="h2" className={postTitleStyles}>
                {postTitle}
            </Typography>
            <Typography variant="body1" className={postBodyStyles}>
                {postBody}
            </Typography>
            <Typography className={commentsStyles}>Comments:</Typography>
            <List>
                <SinglePostDetails comments={data} />
            </List>
        </Container>
    );

    if (postTitle.length === 0) {
        const message =
            'There is no data here. If you want to show the comments, go back to "Posts" page by using navigation.';
        return <Error message={message} />;
    } else if (isLoading) {
        return <Loader />;
    } else if (isError) {
        return <Error message={error.message} />;
    } else if (isSuccess) {
        return postInformation;
    }
};

export default Posts;
