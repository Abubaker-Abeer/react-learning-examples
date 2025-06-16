import { createContext ,useState} from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
 const [userName, setUserName] = useState("soso");
    const [isLogin, setIsLogin] = useState(localStorage.getItem("userToken") ? true : false);
  return (
    <UserContext.Provider value={{ isLogin,setIsLogin}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;