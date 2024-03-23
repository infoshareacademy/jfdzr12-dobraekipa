import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate( "/register" );
    };


    return (
        <header className="header">
            
            <span className="hotel_name">Sol Hotel</span>

            <div className="navigation">
            <button className="navi_button">Book Now</button>
            <button className="navi_button">Our Rooms</button>
            <button className="navi_button">Contact Us</button>
            <button onClick={handleRegister} className="navi_button">Login/Register</button>
            </div>
        </header>
    );
}

export default Header;