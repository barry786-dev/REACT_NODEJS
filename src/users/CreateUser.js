import React, { Component } from 'react';

class CreateUser extends Component {
  state = {
    name: '',
    age: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age } = this.state;
    const id = Math.floor(Math.random() * 1000);
    const user = { id, name, age };
    this.props.addUser(user);
    this.setState({
      name: '',
      age: '',
    });
  };
  render() {
    return (
      <div className='container p-4'>
        <form onSubmit={this.handleSubmit}>
          <h2>Add User</h2>
          <div className='mb-3 form-group'>
            <label htmlFor='name' className='form-label'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
              className='form-control'
            />
          </div>
          <div className='mb-3 form-group'>
            <label htmlFor='age' className='form-label'>
              Age:
            </label>
            <input
              type='text'
              id='age'
              name='age'
              onChange={this.handleChange}
              value={this.state.age}
              className='form-control'
            />
          </div>
          <button className='btn btn-primary' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
