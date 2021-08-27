import { ListItem, Typography } from "@material-ui/core";

import useSinglePostDetailsStyles from "./useSinglePostDetailsStyles";

const PostDetails = ({ comments }) => {
    const { listElementStyles } = useSinglePostDetailsStyles();

    const postDetails = comments.map(({ id, name, body }) => (
        <ListItem key={id} className={listElementStyles}>
            <Typography variant="h3" className="name">
                {name}
            </Typography>
            <Typography variant="body1" className="body">
                {body}
            </Typography>
        </ListItem>
    ));

    return postDetails;
};

export default PostDetails;
