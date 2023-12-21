import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 rounded-lg dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4 mb-4">

                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-rose-600">
                        <p className="text-2xl text-white">
                            Total Task
                        </p>
                    </div>

                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-amber-600">
                        <p className="text-2xl text-white">
                            Total User
                        </p>
                    </div>

                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-green-600">
                        <p className="text-2xl text-white">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard