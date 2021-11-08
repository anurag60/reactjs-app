import React, {useEffect} from 'react';
// import { useSelector, useDispatch} from 'react-redux';
import { BasicTable } from '../components/Table/Table'
import { connect } from 'react-redux';
import { loadRoles } from '../redux/actions'
import { ROLES_COLUMNS } from '../components/Table/columns'

function Roles({rolesData, loadRoles }) {

    useEffect(() => {
        loadRoles()
    }, [])
    console.log(rolesData);
    return (
        
        // <div>
        //    {rolesData && rolesData.map((role)=> (
        //        <p key={role.id}>{role.roleName}</p>
        //    ))}
        // </div>
        <BasicTable data={rolesData} column={ROLES_COLUMNS}/>
    )
}

const mapStateToProps = state => {
    return {
        rolesData: state.data.roles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadRoles: () => dispatch(loadRoles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roles)
