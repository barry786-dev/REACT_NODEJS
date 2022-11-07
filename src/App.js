import React from 'react';
import UsersContainer from './users/UsersContainer';
import CreateUser from './users/CreateUser';

class App extends React.Component {
  state = {
    userData: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/api')
      .then((result) => result.json())
      .then((data) => this.setState({ userData: data }));
  }

  removeUser = (id) => {
    const { userData } = this.state;
    const updatedUsers = userData.filter((user) => user.id !== id);
    this.setState({ userData: updatedUsers });
  };
  addUser = (user) => {
    const { userData } = this.state;
    const updatedUsers = [...userData, user];
    this.setState({ userData: updatedUsers });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className='container'>
        <UsersContainer users={userData} removeUser={this.removeUser} />
        <CreateUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
