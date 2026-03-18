import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { testServer } from "../../services/testServer";

export function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className="Header">
            <div className="route-container-Header">
                <button 
                    className={`Header-btn ${location.pathname == "/" ? "Hedaer-active-btn" : ""}`}
                    onClick={() => navigate("/")}
                >Главная</button>
                <button 
                    className={`Header-btn ${location.pathname == "/register" ? "Hedaer-active-btn" : ""}`}
                    onClick={() => navigate("/register")}
                >Регистрация</button>
                <button 
                    className={`Header-btn ${location.pathname == "/checkIn" ? "Hedaer-active-btn" : ""}`}
                    onClick={() => navigate("/checkIn")}
                >Заселение</button>
                <button 
                    className={`Header-btn ${location.pathname == "/history" ? "Hedaer-active-btn" : ""}`}
                    onClick={() => navigate("/history")}
                >История</button>
                <button 
                    className={`Header-btn ${location.pathname == "/search" ? "Hedaer-active-btn" : ""}`}
                    onClick={() => navigate("/search")}
                >Поиск</button>
            </div>
            
            <button 
                // style={{marginLeft: "auto"}}
                onClick={() => testServer()}
            >Проверить сервер</button>
        </header>
    );
};
