import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../5_features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

interface DecodedAccessToken {
  accessToken: string;
}

const useAuth = () => {
  const accessToken = useSelector(selectCurrentToken);

  if (accessToken) {
    const decoded = jwtDecode(accessToken);

    return { accessToken, id: decoded.sub };
  }

  return { accessToken };
};
export default useAuth;
