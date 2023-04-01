import { ReactNode } from "react";

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IAuthContextProvider {
  children: ReactNode;
}

export interface IUser {
  fullName: string;
  email: string;
}