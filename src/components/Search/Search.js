import React from 'react'
import { Button, Form, Input} from 'reactstrap'

const Search = props => {
  return (
    <>
      <Form inline>
          <Input
            type="user"
            name="user"
            id="user"
            placeholder="Enter Search Criteria..."
            onChange={props.handleInput}
            value={props.first_name}
          />
        <Button onClick={props.handleSubmit}>Search</Button>
      </Form>
    </>
  )
}

export default Search
