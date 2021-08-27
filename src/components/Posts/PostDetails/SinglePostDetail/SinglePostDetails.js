import { ListItem, Typography } from "@material-ui/core";

import useSinglePostDetailsStyles from "./useSinglePostDetailsStyles";

const PostDetails = ({ comments }) => {
    const { listElementStyles, commentNameStyles, commentBodyStyles } = useSinglePostDetailsStyles();

    const postDetails = comments.map(({ id, name, body }) => (
        <ListItem key={id} className={listElementStyles}>
            <Typography variant="h3" className={commentNameStyles}>
                {name}
            </Typography>
            <Typography variant="body1" className={commentBodyStyles}>
                {body}
            </Typography>
        </ListItem>
    ));

    return postDetails;
};

export default PostDetails;
