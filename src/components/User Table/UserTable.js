// bring in React package
import React, { Component } from 'react'
// bring in Table component form Reactstrap
import { Table } from 'reactstrap'
import mockData from '../../Users.json'

class UserTable extends Component {

    render() {
      return (
        <Table>
          {mockData.map((users, index) => {
            return
              <tr>
                <th scope="row"></th>
                <td>{users.id}</td>
                <td>{users.last_name}</td>
                <td>{users.first_name}</td>
                <td>{users.job_title}</td>
                <td>{users.email}</td>
              </tr>
          })}
        </Table>
      )
    }
  }
  
  export default UserTable