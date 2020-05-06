import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { addItem } from '../actions/itemActions';

class ItemModel extends Component {
  state = {
    model: false,
    name: '',
  };

  toggle = () => {
    this.setState({
      model: !this.state.model,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.model} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add shopping item'
                  onChange={this.onChange}
                />
                <Button 
                color='dark'
                style={{marginTop: '2rem'}}
                block
                >Add Item</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect()(ItemModel);
