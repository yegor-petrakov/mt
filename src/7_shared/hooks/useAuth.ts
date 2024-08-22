import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../5_features/auth/authSlice";

const useAuth = () => {
  const accessToken = useSelector(selectCurrentToken);
  let res = null;

  if (accessToken) {
    return { res: accessToken };
  }

  return { res };
};
export default useAuth;
