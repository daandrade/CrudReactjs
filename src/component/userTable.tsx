import React from "react";
import { IUser } from "./interface";

interface IProps {
  users: Array<IUser>;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

const UserTable: React.FunctionComponent<IProps> = props => {
  return (
    <div className="user-table">
      <h1>Ver usuários</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Profissão</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map(i => (
              <tr key={i.id}>
                <td>{i["name"]}</td>
                <td>{i["Age"]}</td>
                <td>{i["profission"]}</td>
                <td>
                  <button onClick={() => props.onEdit(i)}>editar</button>
                  <button onClick={() => props.onDelete(i)}>deletar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>nenhum usuário</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
