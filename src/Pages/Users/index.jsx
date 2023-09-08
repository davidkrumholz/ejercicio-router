import React, { useEffect, useState } from "react";
import UserItem from "../../Components/UserItem";

const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const getAllUsers = async () => {
            const response = await fetch(
                "https://randomuser.me/api/?inc=name,picture,login&results=20"
              );
              const data = await response.json();
              setUsers(data.results);
        }
        getAllUsers();
    }, []);
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <ul className="list-group">
        {users && users.map((user) => {
            return (
             <UserItem key={user.login.uuid} userObject={user} />
            )
        })}
      </ul>
    </>
  );
};

export default Users;
