import React from 'react'
import Layout from '../../components/layout'
import EditTask from '../../components/task/edit'

function EditTaskPage() {
    return (
        <Layout>
            <div className="edit-task h-screen">
                <div className='container mx-auto p-5'>
                    <EditTask />
                </div>
            </div>
        </Layout>
    )
}

export default EditTaskPage