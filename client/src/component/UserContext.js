import { createContext } from "react";

const UserContext = createContext({
    login:false,
    userId: null,
    user: null
  });

export default UserContext;