import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import AddUserForm from "./component/addUserForm";
import EditUserForm from "./component/editUserForm";
import UserTable from "./component/userTable";
import { IBaseUser, IUser } from "./component/interface";

import "./styles.css";

const defaultUsers: Array<IUser> = [
  { profission: "lily", name: "lily hh", id: 1, Age: 18 },
  { profission: "bob", name: "bob haha", id: 2, Age: 19 }
];
const initCurrentUser: IUser = { profission: "", name: "", Age: 10, id: null };

function App() {
  const [users, setUsers] = useState(defaultUsers);
  const [editUser, setEditUser] = useState(initCurrentUser);
  const [editing, setEdit] = useState(false);
  const onAddUser = (newUser: IBaseUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };
  const onCurrentUser = (user: IUser) => {
    setEditUser(user);
    setEdit(true);
  };
  const onUpdateUser = (id: number, newUser: IUser) => {
    setEdit(false);
    setUsers(users.map(i => (i.id === id ? newUser : i)));
  };
  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter(i => i.id !== currentUser.id));
  };
  return (
    <div className="App">
      <h1>CRUD-App</h1>
      <div className="user-flex-wrapper">
        {editing ? (
          <EditUserForm
            user={editUser}
            onUpdateUser={onUpdateUser}
            setEdit={setEdit}
          />
        ) : (
          <AddUserForm onAddUser={onAddUser} />
        )}
        <UserTable
          users={users}
          onEdit={onCurrentUser}
          onDelete={onDeleteUser}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
