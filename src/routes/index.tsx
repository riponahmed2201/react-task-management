import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoutes from './private';
import PublicRoutes from './public';
import NotFound from '../pages/not-found';

import Login from '../pages/login';
import DashboardPage from '../pages/dashboard';
import AddTaskPage from '../pages/task/add';
import EditTaskPage from '../pages/task/edit';
import TaskPage from '../pages/task';

function AllRoutes() {

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

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoutes>
                            <DashboardPage />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="/tasks"
                    element={
                        <PrivateRoutes>
                            <TaskPage />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="/add-task"
                    element={
                        <PrivateRoutes>
                            <AddTaskPage />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/edit-task/:id"
                    element={
                        <PrivateRoutes>
                            <EditTaskPage />
                        </PrivateRoutes>
                    }
                />

                <Route path='*' element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    )
}

export default AllRoutes