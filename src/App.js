import React, {Component} from 'react';

import users from './Users.json'
import Card from './components/Card'
import Search from './components/Search'
import UserTable from './components/UserTable'



class App extends Component
{
  state =
  {
    users
  }

  handleInput = event => {this.setState({ [event.target.name]: event.target.value })}

  // grab value from text input and create card
  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      users: {
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        job_title: this.state.job_title,
        email: this.state.email,
      }
    })
  }

  render()
  {
    return
    (
      <>
      <h1>Employee Directory</h1>
      <Search
      id={this.state.id}
      last_name={this.state.last_name}
      first_name={this.state.first_name}
      job_title={this.state.job_title}
      email={this.state.email}
      handleInput={this.handleInput}
      handleSubmit={this.handleSubmit} />
      <Card
      userCard = {this.state.first_name} />
      <UserTable />
      </>
    )
  }
}

export default App
