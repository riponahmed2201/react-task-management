import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import storage from 'redux-persist/lib/storage';

function PrivateRoutes({ children }: any) {

    const navigate = useNavigate();

    let { user }: any = useSelector((state: any) => state.authSlice);

    if (user?.exp * 1000 > Date.now()) {
        return children;
    } else {
        storage.removeItem("persist:root");
        navigate("/");
    }
    <></>;
}

export default PrivateRoutes