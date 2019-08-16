import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchBar = ({ handleFormSubmit, handleInputChange, searchTerm }) => {
    return (
        <Form inline onSubmit={handleFormSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="search" className="mr-sm-2" hidden>Weather Search</Label>
          <Input 
            type="text" 
            name="search" 
            id="search" 
            placeholder="City, State or Zip Code" 
            value={searchTerm}
            onChange={handleInputChange}
        />
        </FormGroup>
        <Button onClick={handleFormSubmit}>Search</Button>
      </Form>
    )
}

export default SearchBar;