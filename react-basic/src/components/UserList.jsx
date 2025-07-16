const UserList = () => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  return (
    <div>
      {users.map(({id,name}) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
}

export default UserList;