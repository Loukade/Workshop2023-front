import React from "react";
import { useNavigate} from 'react-router-dom';
const WithRouter = WrappedComponent => props => {
    const navigate = useNavigate();

    return (
        <WrappedComponent
            {...props}
            {...{ navigate }}
        />
    );
};

export default WithRouter;