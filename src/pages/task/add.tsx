import React from 'react'
import Layout from '../../components/layout'
import AddTask from '../../components/task/add'

function AddTaskPage() {
    return (
        <Layout>
            <div className="add-task h-screen">
                <div className='container mx-auto p-5'>
                    <AddTask />
                </div>
            </div>
        </Layout >
    )
}

export default AddTaskPage