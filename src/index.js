import "./styles/global.scss";
import getHome from "./pages/Home/Home";
import get500 from "./pages/500/500";
import get404 from "./pages/404/404";
import getLogIn from "./pages/Login/Login";
import getRegister from "./pages/Register/Register";
import getProfile from "./pages/Profile/Profile";
import getChangePassword from "./pages/ChangePassword/ChangePassword";
import getChangeProfile from "./pages/ChangeProfile/ChangeProfile";
import getMessenger from "./pages/Messenger/Messenger";

import { 
    HOME,
    ERROR_404,
    ERROR_500,
    LOGIN,
    REGISTER,
    PROFILE,
    CHANGE_PASSWORD,
    MESSENGER,
    CHANGE_PROFILE
 } from './routes/routes';


 const routes = {
    [HOME]: getHome,
    [ERROR_500]: get500,
    [ERROR_404]: get404,
    [LOGIN]: getLogIn,
    [REGISTER]: getRegister,
    [PROFILE]: getProfile,
    [CHANGE_PASSWORD]: getChangePassword,
    [MESSENGER]: getMessenger,
    [CHANGE_PROFILE]: getChangeProfile
}

const app = document.getElementById("root");
app.innerHTML = routes[window.location.pathname]?.();