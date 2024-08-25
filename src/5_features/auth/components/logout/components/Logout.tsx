import React from "react";
import { Button } from "@/7_shared/ui/button";
import { useSendLogoutMutation } from "@/5_features/auth/api/authApiSlice";

const Logout: React.FC = () => {
  const [sendLogout] = useSendLogoutMutation();

  const onSendLogout = () => sendLogout();

  return (
    <div>
      <Button variant="destructive" onClick={onSendLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
