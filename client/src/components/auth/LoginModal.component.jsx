import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap';

import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class LoginModal extends Component {
  state = {
    model: false,
    email: '',
    password: '',
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If Authenticated, close modal
    if (this.state.model && isAuthenticated) {
      this.toggle();
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      model: !this.state.model,
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    // Attempt to login
    this.props.login(this.state);
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          Login
        </NavLink>

        <Modal isOpen={this.state.model} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  className='mb-3'
                  placeholder='Email'
                  onChange={this.onChange}
                />

                <Label for='password'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  className='mb-3'
                  placeholder='Password'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated, // getting from ../../reducers/index.js
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
