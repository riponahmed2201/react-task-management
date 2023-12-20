import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm();

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTM0MzgsIm5hbWUiOiJNaWx0b24iLCJlbWFpbCI6Im1pbHRvbi51aWduQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6bnVsbCwiaXNfYWN0aXZlIjp0cnVlLCJpc19zdGFmZiI6dHJ1ZSwicHJvZmlsZV92ZXJpZmllZCI6ZmFsc2UsInVzZXJfdHlwZSI6NCwiam9iX3NlZWtlcl9pZCI6IkUzTlRTWVFaQ00iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJwYWNrYWdlX2V4cGlyZWRfYXQiOm51bGwsImlhdCI6MTcwMjg5NzkwOCwiZXhwIjoxNzAzNTAyNzA4fQ.TiL7YATAc4miPq5zWm4qRFXDTaN6O-0n5hHTRfSwSEo';

    const onSubmit = async (data: any) => {
        console.log("Data: ", data);

        try {
            //   const { data } = await axios.post(
            //     `${base_url}/api/auth/user/login`,
            //     state
            //   );

            //   console.log(data);
            dispatch(login(token));

            navigate("/dashboard")

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="w-[370px] text-slate-600">
                <div className="bg-white h-full shadow-sm px-7 py-8 rounded-md">
                    <h2 className="text-2xl font-semibold text-center">Login</h2>
                    <p className="text-sm text-center mt-2 mb-4">
                        Please login to your account and start the advanture
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        id="email"
                                        placeholder="email"
                                        required
                                        className="px-3 py-[6px] outline-none border border-slate-200 bg-transparent rounded-md focus:border-indigo-500 overflow-hidden"
                                    />
                                )}
                            />

                        </div>

                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Password</label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="password"
                                        id="password"
                                        placeholder="password"
                                        required
                                        className="px-3 py-[6px] outline-none border border-slate-200 bg-transparent rounded-md focus:border-indigo-500 overflow-hidden"
                                    />
                                )}
                            />
                        </div>

                        <button className="bg-indigo-500 w-full hover:bg-indigo-600 text-white rounded-md px-7 py-[6px] text-md">
                            Login
                        </button>

                        <div className="w-full gap-1 mt-5">
                            Don't have account? Please{" "}
                            <a
                                href="/register"
                                className="text-blue-600 visited:text-purple-600"
                            >
                                Register
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login