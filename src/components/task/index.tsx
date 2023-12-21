import React from 'react'
import { Link } from 'react-router-dom'

function Task() {
    return (
        <div className="p-4 sm:ml-64">
            <div className="grid grid-cols-3 gap-4 ">
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <h3>Task Name</h3>
                        </div>
                        <div className="font-bold text-md mb-2">
                            <h4>Project Name</h4>
                        </div>
                        <p className="text-gray-700 text-base">
                            Team Name
                        </p>
                        <p className="text-gray-700 text-base">
                            Start Date
                        </p>
                        <p className="text-gray-700 text-base">
                            End Date
                        </p>
                        <p className="text-gray-700 text-base">
                            Task Description
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/task/edit"> <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Edit</span></Link>
                        <button><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">Delete</span></button>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <h3>Task Name</h3>
                        </div>
                        <div className="font-bold text-md mb-2">
                            <h4>Project Name</h4>
                        </div>
                        <p className="text-gray-700 text-base">
                            Team Name
                        </p>
                        <p className="text-gray-700 text-base">
                            Start Date
                        </p>
                        <p className="text-gray-700 text-base">
                            End Date
                        </p>
                        <p className="text-gray-700 text-base">
                            Task Description
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/task/edit"> <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Edit</span></Link>
                        <button><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">Delete</span></button>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <h3>Task Name</h3>
                        </div>
                        <div className="font-bold text-md mb-2">
                            <h4>Project Name</h4>
                        </div>
                        <p className="text-gray-700 text-base">
                            Team Name
                        </p>
                        <p className="text-gray-700 text-base">
                            Start Date
                        </p>
                        <p className="text-gray-700 text-base">
                            End Date
                        </p>
                        <p className="text-gray-700 text-base">
                            Task Description
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to="/task/edit"> <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Edit</span></Link>
                        <button><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">Delete</span></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Task