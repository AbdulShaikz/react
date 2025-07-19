const UserStatus = ({ loggedIn, isAdmin }) => {
    return (
        <>
            {loggedIn && isAdmin && <p>Welcome Admin</p>}
            {loggedIn && !isAdmin && <p>Welcome User</p>}
        </>
    );
}

export default UserStatus;