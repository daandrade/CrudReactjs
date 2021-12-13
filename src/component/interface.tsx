export interface IBaseUser {
  name: string;
  profission: string;
  Age: number | string;
}
export interface IUser extends IBaseUser {
  id: number;
}
