import { Button } from "@/7_shared/ui/button";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/home");
  const navigateToEntries = () => navigate("/entries");
  const navigateToSettings = () => navigate("/settings");
  const navigateToAccount = () => navigate("/account");

  return (
    <div className="max-w-64 w-full">
      <div className="max-w-64 w-full h-full fixed">
        <nav className="flex flex-col">
          <Button
            onClick={navigateToHome}
            className="justify-start"
            variant="ghost"
          >
            Home
          </Button>
          <Button
            onClick={navigateToEntries}
            className="justify-start"
            variant="ghost"
          >
            Entries
          </Button>
          <Button
            onClick={navigateToSettings}
            className="justify-start"
            variant="ghost"
          >
            Settings
          </Button>
          <Button
            onClick={navigateToAccount}
            className="justify-start"
            variant="ghost"
          >
            Account
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default SidebarMenu;
