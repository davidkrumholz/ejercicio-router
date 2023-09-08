const UserItem = (props) => {
    const user = props.userObject; 
    console.log(user);
    return(
        <li className="list-group-item">{user.name.first} {user.name.last}</li>
    )
}

export default UserItem;