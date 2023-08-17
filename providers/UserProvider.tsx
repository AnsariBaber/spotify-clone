"use client";

import { MyUserContextProvider } from "@/Hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserPovider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserPovider;
