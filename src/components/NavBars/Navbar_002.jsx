import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../../css/NavBars/Navbar_001.css'

export const Navbar_002 = ({widthNavBar}) => {
    return (
    <div className="contentNavigators" style={{width: widthNavBar}}>
        <div className="contentLinkNav">
            <h2>Menú</h2>
            <nav>
                <ul className="dflex ddirection-column">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/shop">Tienda</Link></li>
                </ul>
            </nav>
        </div>
    </div>
    );
};
