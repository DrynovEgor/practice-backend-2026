import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className="Header">
            <button 
                className={`Header-btn ${location.pathname == "/" ? "Hedaer-active-btn" : ""}`}
                onClick={() => navigate("/")}
            >Главная</button>
            <button 
                className={`Header-btn ${location.pathname == "/register" ? "Hedaer-active-btn" : ""}`}
                onClick={() => navigate("/register")}
            >Регистрация</button>
            <button 
                className={`Header-btn ${location.pathname == "/reservation" ? "Hedaer-active-btn" : ""}`}
                onClick={() => navigate("/reservation")}
            >Бронь</button>
            <button 
                className={`Header-btn ${location.pathname == "/auto" ? "Hedaer-active-btn" : ""}`}
                onClick={() => navigate("/auto")}
            >Вход в личный кабинет</button>
        </header>
    );
};
