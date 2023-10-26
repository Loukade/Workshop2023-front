import Direction from "../components/admin/Direction";
import Sensibilisation from "../components/user/Sensibilisation";
import NotFound from "../404";
import Questionnaire from "../components/user/Questionnaire";
import Eau from "../components/user/Eau";
import Accueil from "../components/user/Accueil";

let dashboardRoutes = [];
sessionStorage.getItem('isConnected') === "Connecté" ?
    sessionStorage.getItem("Roles") === "1" ?
        dashboardRoutes = [
            {
                path: "/Accueil",
                name: "Accueil",
                icon: "nc-icon nc-bell-55",
                component: Accueil,
                layout: "/admin"
            },
            {
                path: "/direction",
                name: "Direction",
                icon: "nc-icon nc-bell-55",
                component: Direction,
                layout: "/admin"
            },
        ] : dashboardRoutes = [
            {
                path: "/Accueil",
                name: "Accueil",
                icon: "nc-icon nc-bell-55",
                component: Accueil,
                layout: "/user"
            },
            {

                path: "/sensibilisation",
                name: "Sensibilisation",
                icon: "nc-icon nc-bell-55",
                component: Sensibilisation,
                layout: "/user"
            },
            {
                invisible:true,
                path: "/sensibilisation/eau",
                name: "Sensibilisation",
                icon: "nc-icon nc-bell-55",
                component: Eau,
                layout: "/user"
            },
        ] : ""

export default dashboardRoutes;
