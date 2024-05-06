import { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';

import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Flex,
  Input,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'


// --> class component
export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service method will resolve to the user object 
      // included in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred --> Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;


    return (
      <>
      <Box
        // border={'3px solid black'}  
        rounded={'xl'}
        boxShadow={'xl'}
        bg='gray.300'
        p={4}
      >
        <form autoComplete="off" onSubmit={this.handleSubmit}>
        <FormControl isRequired mb='10px'>
          <FormLabel>name</FormLabel>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              bg="white"
            />
          </FormControl>

          <FormControl isRequired mb='10px'>
            <FormLabel>email</FormLabel>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              bg="white"
            />
          </FormControl>

          <FormControl isRequired mb='10px'>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              bg="white"
            />
          </FormControl>

          <FormControl isRequired mb='10px'>
            <FormLabel>confirm password</FormLabel>
            <Input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
              bg="white"
            />
          </FormControl>

          <Flex justify="flex-end">
            <Button type="submit" disabled={disable} colorScheme="yellow" rounded={'full'} px={6}>
              sign up
            </Button>
          </Flex>
        </form>
        <p>{this.state.error}</p>
      </Box>

      <br />
      <Text>already on pan de city? <ChakraLink as={RouterLink} to={`/login`}><strong>log in</strong></ChakraLink></Text>

      </>
    );
  }
}

