import UsersHeader from './UsersHeader';
import UsersBody from './UsersBody';
const UsersContainer = (props) => {
  const { users } = props; // Destructuring users= props.users
  const { removeUser } = props; // Destructuring removeUser= props.removeUser
  return (
    <div className='container'>
      <UsersHeader />
      <UsersBody users={users} removeUser={removeUser} />
    </div>
  );
};

export default UsersContainer;
