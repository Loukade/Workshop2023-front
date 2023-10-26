import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import sidebarImage from "../../public/images/sidebar-4.jpg";
import Footer from "../components/Footer/Footer";
import routes from "./routes.js";
import Navbar from "../components/NavBars/Navbar";


export function ConnectedLayout(props) {
    const [image, setImage] = React.useState(sidebarImage);
    const [color, setColor] = React.useState("black");
    const [hasImage, setHasImage] = React.useState(true);
    const location = useLocation();
    const mainPanel = React.useRef(null);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if(props.layout !== "") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        element={props.isLogin ? <prop.component/> : <Navigate replace to="/"/>}
                        key={key}
                    />
                );
            }
        });
    };
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
        if (
            window.innerWidth < 993 &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            var element = document.getElementById("bodyClick");
            element.parentNode.removeChild(element);
        }
    }, [location]);
    return (
        <>
            <div className="wrapper">
                <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
                <div className="main-panel" ref={mainPanel}>
                    <Navbar />
                    <div className="content">
                        <Routes>{getRoutes(routes)}</Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}