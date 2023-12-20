import React from 'react'
import { logout } from '../../utils/logout'

function AdminDashboard() {
    return (
        <div>AdminDashboard

            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default AdminDashboard 