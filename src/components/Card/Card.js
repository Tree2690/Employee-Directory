// bring in React package
import React from 'react'
// bring in components form Reactstrap
import {Card,CardBody,ListGroup,ListGroupItem} from 'reactstrap'

const UserCard = props => {
  // console log props to confirm the key values on object
  console.log(props)

  return (
    <div>
      <Card>
        <h1>Employee Data</h1>
        <CardBody>
          <ListGroup>
            <ListGroupItem>ID:{props.user.id}</ListGroupItem>
            <ListGroupItem> Last Name:{props.user.last_name}</ListGroupItem>
            <ListGroupItem> First Name:{props.user.first_name} </ListGroupItem>
            <ListGroupItem>Job Title:{props.user.job_title} </ListGroupItem>
            <ListGroupItem>Email:{props.user.email} </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </div>
  )
}

export default UserCard