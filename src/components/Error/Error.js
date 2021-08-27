import { Alert, AlertTitle } from "@material-ui/lab";

const Error = ({ message }) => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {message}
        </Alert>
    );
};

export default Error;
