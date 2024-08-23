import { Button } from "@/7_shared/ui/button"
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {

    const navigate = useNavigate()

    const navigateToEntries = () => navigate('/entries')
    const navigateToSettings = () => navigate('/settings')
    const navigateToAccount = () => navigate('/account')

    return (
    <div className="max-w-64 h-screen bg-gray-50 p-1">
        <nav className="flex flex-col">
            <Button onClick={navigateToEntries} className="justify-start" variant='ghost'>Entries</Button>
            <Button onClick={navigateToSettings} className="justify-start" variant='ghost'>Settings</Button>
            <Button onClick={navigateToAccount} className="justify-start" variant='ghost'>Account</Button>
        </nav>
    </div>
    );
}

export default SidebarMenu