import React, {useEffect} from 'react';
import TableList from '../components/TableList/TableList';
import { USER_COLUMNS } from '../components/Table/columns';
import {loadUsers} from './../redux/actions'
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { BasicTable } from '../components/Table/Table';

const Users = ({userData, loadUsers}) => {
    useEffect(() => {
        loadUsers()
    }, [])
    
    return (
        <div>
            <Segment>
            {/* <TableFilter /> */}
           {/* <TableList users={users}/> */}
        <BasicTable data={userData} column={USER_COLUMNS}/>
           </Segment>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.data1.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(loadUsers())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps )(Users)
