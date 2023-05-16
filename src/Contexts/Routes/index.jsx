import { Home } from "../../Screens/home"
import { Icons } from "../../Components/Icon"
//import { Login } from "../../Screens/login";
//import { Register } from "../../Screens/register";
//import { Logoff } from "../../Screens/logoff";

export const ScreenArray = [
    {
        route: 'Home',
        label: 'Home',
        typeIcon: Icons.Feather,
        icon: 'home',
        component: Home,
        notification: 0
    }
]