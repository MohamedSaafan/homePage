import React from 'react';
import isAdmin from '../components/isAdmin';
import Styles from './AdminPannel.module.css'
import SideBar from '../components/AdminPannel/SideBar'
import Pannel from '../components/AdminPannel/Pannel';

const AdminPannel = props => {

    return <div className = {`${Styles.admin}`} >
       <SideBar />
       <Pannel />
    </div>
}

export default isAdmin(AdminPannel);

