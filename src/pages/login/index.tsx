import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from "react-toastify";

import { loginApi } from '../../api/authentication';
import { login } from '../../store/slices/authSlice';
import { LoginDto } from '../../dto/login';
import ErrorMessage from '../../components/error-message';

function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [getError, setError] = useState<any>(undefined);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm();

    // Login submit handler
    const onSubmit: any = async (data: LoginDto) => {

        if (data && data?.email && data?.password) {
            try {
                setLoading(true);
                await loginApi({ email: data?.email, password: data?.password })
                    .then((res: any) => res.json())
                    .then((res: any) => {
                        if (res?.statusCode === 200) {

                            setLoading(true);
                            setError("");

                            dispatch(login(res?.token));

                            toast.success(res?.message);

                            navigate("/dashboard");

                        } else if (res?.statusCode === 400) {
                            setLoading(false);
                        } else if (res?.statusCode === 500) {
                            setLoading(false);
                            setError(res?.message);
                        }
                    });
            } catch (e: any) {
                console.error(e);
            }
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

                        {getError !== "" && <ErrorMessage message={getError} />}

                        <button className="bg-indigo-500 w-full hover:bg-indigo-600 text-white rounded-md px-7 py-[6px] text-md">
                            {loading ? (
                                <span className="loading-spinner inline-block">Please wait...</span>
                            ) : 'Login'}
                        </button>

                        <div className="w-full gap-1 mt-5 text-center">
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