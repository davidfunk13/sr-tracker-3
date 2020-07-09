import React, { FunctionComponent } from 'react';
import RoleTypes from './Role.View.Types';
import { useLocation } from 'react-router-dom';

const Role: FunctionComponent<RoleTypes> = () => {
    const location = useLocation();
    
    const role = location.state;

    console.log(role);

    return (
        <div>

        </div>
    )
}

export default Role;