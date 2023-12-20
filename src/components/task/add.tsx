import React from 'react'
import { Controller, useForm } from 'react-hook-form'

function AddTask() {

    const { control, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log("Data: ", data);

        try {
            //   const { data } = await axios.post(
            //     `${base_url}/api/auth/user/login`,
            //     state
            //   );

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <div className="single mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Task Name
                    </label>

                    <Controller
                        name="task_name"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="task_name" type="text" placeholder="Enter task name" />

                        )}
                    />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="single mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Project Name
                    </label>

                    <Controller
                        name="project_name"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="project_name" type="text" placeholder="Enter project name" />

                        )}
                    />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
            </div>
        </form>
    )
}

export default AddTask