import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComponent from '../navigation/NavComponent'
import FooterComponent from '../footer/footer.component'


const LayoutComponent: React.FC = () => {
    return (
        <>
            <NavComponent/>
            <div className="">
                <div className="">
                    <main>
                        <Outlet/>
                    </main>
                    <FooterComponent/>
                </div>
            </div>
        </>

    )
}

export default LayoutComponent