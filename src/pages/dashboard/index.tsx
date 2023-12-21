import React from 'react'
import Layout from '../../components/layout'
import Dashboard from '../../components/dashboard'

function DashboardPage() {
    return (
        <Layout >
            <div className="dashboard h-screen">
                <Dashboard />
            </div>
        </Layout>
    )
}

export default DashboardPage 