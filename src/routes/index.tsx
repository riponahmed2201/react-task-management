import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home';
import PrivateRoutes from './private';
import PublicRoutes from './public';
import NotFound from '../pages/not-found';
import { useSelector } from 'react-redux';
import AdminDashboard from '../pages/dashboard';
import Login from '../pages/login/Login';

function AllRoutes() {

    const { name } = useSelector((state: any) => state.authSlice);

    console.log(name);


    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={
                        <PublicRoutes>
                            <Login />
                        </PublicRoutes>
                    }
                />
                {/* <Route
                    path="/"
                    element={
                        <PublicRoutes>
                            <Home />
                        </PublicRoutes>
                    }
                /> */}

                <Route
                    path="/admin/dashboard"
                    element={
                        <PrivateRoutes>
                            <AdminDashboard />
                        </PrivateRoutes>
                    }
                />

                <Route path='*' element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    )
}

export default AllRoutes