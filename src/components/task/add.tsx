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
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="task_name" type="text" placeholder="Enter task name" />

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
            <div className="grid grid-cols-2 gap-4">
                <div className="single mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Start Date
                    </label>

                    <Controller
                        name="start_date"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="start_date" type="text" placeholder="Enter start date" />

                        )}
                    />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="single mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        End Date
                    </label>

                    <Controller
                        name="end_date"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="end_date" type="text" placeholder="Enter end date" />

                        )}
                    />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="single mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Team Name
                    </label>

                    <Controller
                        name="team_members"
                        control={control}
                        render={({ field }) => (
                            <input
                                {...field}
                                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="team_members" type="text" placeholder="Enter team member" />

                        )}
                    />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
                <div className="single mb-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Description
                    </label>

                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => (

                            <textarea
                                {...field}
                                id="description" className="appearance-none block w-full bg-gray-100 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Enter description..."></textarea>
                        )}
                    />
                    {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="single mb-5">
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddTask