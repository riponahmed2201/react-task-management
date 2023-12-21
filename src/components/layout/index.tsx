import React from 'react'
import Header from './header'
import Footer from './footer'
import SideNavbar from './sidebar'

function Layout({ children }) {
    return (
        <div>
            {/* <Header /> */}
            <SideNavbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout