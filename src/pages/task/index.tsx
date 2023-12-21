import React from 'react'
import Layout from '../../components/layout'
import Task from '../../components/task'

function TaskPage() {
    return (
        <Layout>
            <div className="add-task h-screen">
                <div className='container mx-auto p-5'>
                    <Task />
                </div>
            </div>
        </Layout >
    )
}

export default TaskPage