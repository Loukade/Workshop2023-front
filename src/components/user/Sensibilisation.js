import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";


const Sensibilisation = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    function Goto_theme(theme) {
        const themeEco = theme;
        navigate('/user/sensibilisation/' + themeEco);
    }

    return(
        <><Button style={{width:'10%' , marginLeft:'1%'}} onClick={()=>Goto_theme('Eau')}>Eau</Button>
        <Button style={{width:'10%', marginLeft:'1%'}} onClick={()=>Goto_theme('Theme2')}>Theme2</Button>
        <Button style={{width:'10%', marginLeft:'1%'}} onClick={()=>Goto_theme('Theme3')}>Theme3</Button>
            </>
    )
}
export default Sensibilisation