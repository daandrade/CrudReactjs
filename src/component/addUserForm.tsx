import React, { useState } from "react";
import { IBaseUser } from "./interface";
import validator, { noErrors, FormErrors } from "../validator";

interface IProps {
  onAddUser: (user: IBaseUser) => void;
}
const initUser = { profission: "", name: "", Age: "" };
const AddUserForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initUser);
  const [errors, setErrors] = useState<FormErrors>({});
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      { key: "name", required: true, label: "Name" },
      { key: "profission", required: true, label: "profission" },
      { key: "Age", required: true, label: "Age" },
      { key: "name", maxLength: 16, label: "name" },
      { key: "name", minLength: 4, label: "name" },
      { key: "Age", minValue: 18, label: "Age" },
      { key: "Age", maxValue: 60, label: "Age" }
    ];
    validator(
      formValue,
      rules,
      (errors: any): any => {
        if (noErrors(errors)) {
          props.onAddUser(formValue);
          setFormValue(initUser);
          return false;
        }
        setErrors(errors);
      }
    );
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="user-form">
      <h1>Inserir novo</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Nome</label>
          <input
            type="text"
            placeholder="Insira nome"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          {errors["name"] && errors["name"].length > 0 && (
            <div className="form-error">{errors["name"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Profissão</label>
          <input
            type="text"
            placeholder="Insira profission"
            name="profission"
            value={formValue.profission}
            onChange={onInputChange}
          />
          {errors["profission"] && errors["profission"].length > 0 && (
            <div className="form-error">{errors["profission"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Idade</label>
          <input
            type="number"
            placeholder="Insira a Idade"
            name="Age"
            value={formValue.Age}
            onChange={onInputChange}
          />
          {errors["Age"] && errors["Age"].length > 0 && (
            <div className="form-error">{errors["Age"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <button>Adicionar novo</button>
        </div>
      </form>
    </div>
  );
};
export default AddUserForm;
