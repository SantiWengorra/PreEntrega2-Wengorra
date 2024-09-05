import {Outlet} from "react-router-dom";
import NavBar from "../Components/NavBar/Navbar";
import Titulo from "../Components/Titulo";
function Layout(){
    return(
        <div>
            <Titulo/>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
export default Layout;