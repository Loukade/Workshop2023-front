import React from "react";
import "./App.css";
import {DashBoardLayout} from "Components/admin/DashboardLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
/*import "./assets/css/demo.css";*/
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  const token = sessionStorage.getItem("token") != null;
  const isConnected = sessionStorage.getItem("isConnected") != null;
  return <>
    <DashBoardLayout token={token} isConnected={isConnected}/>
  </>

}

export default App;
