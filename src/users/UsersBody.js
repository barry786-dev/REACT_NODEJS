const UserBody = (props) => {
  const {removeUser} = props;
  const usersTemplate = props.users.map((user, index) => {
    const { id, name, age } = user;
    return (
      <div key={id} className='row border-bottom  p-2'>
        <div className='col'>{name}</div>
        <div className='col'>{age}</div>
        <div className='col'>
          <button onClick={()=>removeUser(id)} className='btn btn-primary'>
            Delete
          </button>
        </div>
      </div>
    );
  });
  return <div>{usersTemplate}</div>;
};
export default UserBody;
