import { Route, Routes } from 'react-router-dom'

import UsersComponent from '../components/users/UsersComponent'
import HomeComponent from '../components/home/HomeComponent'
import LoginComponent from '../components/login/LoginComponent'
import RegisterComponent from '../components/register/RegisterComponent'
import { UserContext } from '../components/context/UserContext'
import AccountComponent from '../components/account/AccountComponent'
import RolesComponent from '../components/roles/RolesComponent'
import LayoutComponent from '../components/layouts/layoutComponent'
import ToheComponent from '../components/ve-tohe/tohe.component'
import PartnerShipModelLayout from '../components/partnership-model/partnership-model-layout'
import PartnerShipModelSt1 from '../components/partnership-model/partnership-model-st1.component'
import PartnerShipModelNd2 from '../components/partnership-model/partnership-model-nd2.component'
import PartnerShipModelTh3 from '../components/partnership-model/partnership-model-th3.component'
import PartnerShipModelTh4 from '../components/partnership-model/partnership-model-th4.component'


const AppRouter = () => {
        return(
            <>
                <Routes>
                    <Route path='/' element={ <LayoutComponent/>} >
                        <Route index element={ <HomeComponent/>} ></Route>
                        <Route path='tohe' element={ <ToheComponent/>} ></Route>
                        <Route path='partnership-model' element={ <PartnerShipModelLayout/>} >
                            <Route index element={ <PartnerShipModelSt1/>} ></Route>
                            <Route path='page2' element={ <PartnerShipModelNd2/>} ></Route>
                            <Route path='page3' element={ <PartnerShipModelTh3/>} ></Route>
                            <Route path='page4' element={ <PartnerShipModelTh4/>} ></Route>
                        </Route>
        
                        <Route path='*' element={<div>404 not found</div>}></Route>
                    </Route>
                </Routes>
            </>
        )


}

export default AppRouter