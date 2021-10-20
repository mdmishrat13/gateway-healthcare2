import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";


function PrivateRoute({ children, ...rest }) {
    let { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="primary"></Spinner>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;