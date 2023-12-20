import React from 'react'
import Layout from '../../components/layout'
import Dashboard from '../../components/dashboard'

function DashboardPage() {
    return (
        <Layout >
            <div className="dashboard h-screen">
                <div className='container mx-auto p-5'>
                    <div className='grid grid-cols-3 gap-4'>
                        <Dashboard />
                        <Dashboard />
                        <Dashboard />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DashboardPage 