import { useContext } from "react";

import { Container, List, Typography } from "@material-ui/core";

import { PostInfoContext } from "../../../context/PostInfoContext";

import usePostDetails from "../../../hooks/usePostDetails";

import Error from "../../Error/Error";
import Loader from "../../Loader/Loader";
import SinglePostDetails from "./SinglePostDetail/SinglePostDetails";

const Posts = () => {
    const { postName, postBody } = useContext(PostInfoContext);
    const { isLoading, isSuccess, isError, error, data } = usePostDetails();

    if (isLoading) {
        return <Loader />;
    } else if (isError) {
        return <Error message={error.message} />;
    } else if (isSuccess) {
        return (
            <Container maxWidth="md">
                <Typography variant="h2">{postName}</Typography>
                <Typography variant="body1">{postBody}</Typography>
                <List>
                    <SinglePostDetails comments={data} />
                </List>
            </Container>
        );
    }
};

export default Posts;
