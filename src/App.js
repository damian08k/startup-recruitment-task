import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import PostIDProvider from "./context/PostIDContext";
import PostInfoProvider from "./context/PostInfoContext";

import Error from "./components/Error/Error";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/Posts/PostDetails/PostDetails";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

import { Box } from "@material-ui/core";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Box width="100%" display="flex" justifyContent="center" flexWrap="wrap">
                <PostIDProvider>
                    <PostInfoProvider>
                        <Router>
                            <Breadcrumb />
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/posts" />
                                </Route>
                                <Route exact path="/posts">
                                    <Posts />
                                </Route>
                                <Route path="/posts/:id/comments">
                                    <PostDetails />
                                </Route>
                                <Route path="*">
                                    <Error message="Page not found." />
                                </Route>
                            </Switch>
                        </Router>
                    </PostInfoProvider>
                </PostIDProvider>
            </Box>
        </QueryClientProvider>
    );
};

export default App;
