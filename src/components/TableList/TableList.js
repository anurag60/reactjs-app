import React from 'react';
import _ from 'lodash'
import { Button, Icon, Table } from 'semantic-ui-react';
import "./TableList.css";

const userData = [
  {
      "id":"1",
      "name":{
          "firstName":"Anurag",
          "lastName":"Sarkar"
      },
      "email":"anurag.sarkar@gmail.com",
      "contact":"8017120080",
      "address":"Kolkata",
      "role":"admin"
  },
  {
      "id":"2",
      "name":{
          "firstName":"Amit",
          "lastName":"Dey"
      },
      "email":"amit.dey@gmailc.om",
      "contact":"9823086745",
      "address":"Nagpur",
      "role":"user"
  },
  {
      "id":"3",
      "name":{
          "firstName":"Avik",
          "lastName":"Sen"
      },
      "email":"avik.sen@gmail.com",
      "contact":"8701986754",
      "address":"Kolkata",
      "role":"tester"
  },
  {
      "id":"4",
      "name":{
          "firstName":"Nikita",
          "lastName":"Sharma"
      },
      "email":"nikita.sharma@gmail.com",
      "contact":"8017238756",
      "address":"Pune",
      "role":"tester"
  },
  {
      "id":"5",
      "name":{
          "firstName":"Sheela",
          "lastName":"Verma"
      },
      "email":"sheela.verma@gmail.com",
      "contact":"6509123654",
      "address":"Bhopal",
      "role":"user"
  }
]

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function TableList() {
    const [state, dispatch] = React.useReducer(exampleReducer, {
      column: null,
      data: userData,
      direction: null,
    })
    const { column, data, direction } = state
    console.log(state);

    return (
        <Table celled sortable definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'id' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'id' })}
        textAlign='center'
        >ID</Table.HeaderCell>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'firstName' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'firstName' })}
        textAlign='center'
        >First Name</Table.HeaderCell>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'lastName' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'lastName' })}
        textAlign='center'
        >Last Name</Table.HeaderCell>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'email' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'email' })}
        textAlign='center'
        >Email ID</Table.HeaderCell>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'contact' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'contact' })}
        textAlign='center'
        >Contact Number</Table.HeaderCell>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'address' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'address' })}
        textAlign='center'
        >Address</Table.HeaderCell>
        <Table.HeaderCell 
        className="table-header"
        sorted={column === 'role' ? direction : null}
        onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'lastName' })}
        textAlign='center'
        >Role</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {data && data.map((user)=> (        
      <Table.Row key={user.id}>
        <Table.Cell textAlign='center'>{user.id}</Table.Cell>
        <Table.Cell textAlign='center'>{user.name.firstName}</Table.Cell>
        <Table.Cell textAlign='center'>{user.name.lastName}</Table.Cell>
        <Table.Cell textAlign='center'>{user.email}</Table.Cell>
        <Table.Cell textAlign='center'>{user.contact}</Table.Cell>
        <Table.Cell textAlign='center'>{user.address}</Table.Cell>
        <Table.Cell textAlign='center'>{user.role}</Table.Cell>
        <Table.Cell textAlign='center'>
        <Button
            icon
            labelPosition='left'
            primary
            size='small'
          ><Icon name='edit' />Edit</Button>
            <Button
            icon
            labelPosition='left'
            primary
            size='small'>
              <Icon name='delete' />Delete</Button>
        </Table.Cell>
      </Table.Row>
      ))}
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell colSpan='8'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'>
            <Icon name='user' /> Add User
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    )
}

export default TableList
