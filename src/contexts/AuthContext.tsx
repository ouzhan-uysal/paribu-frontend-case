import { FC, createContext, useContext, useMemo, useState } from "react";
import { IAuthContext, IAuthContextProvider } from "../types/auth.interface";
import { IUser } from "../types/auth.interface";

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => false,
});

export const AuthContextProvider: FC<IAuthContextProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const value = useMemo(() => ({
    user, setUser
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within a AuthContextProvider!"
    );
  }
  return context;
};
