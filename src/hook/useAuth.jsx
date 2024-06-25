import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  console.log(all);
  return all;
};

export default useAuth;
