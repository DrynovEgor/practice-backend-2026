import "./App.css";

import { RegisterPage } from "./pages/RegisterPage";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AutoPage } from "./pages/AutoPage";
import { ReservationPage } from "./pages/ReservationPage";

function App() {
    

    return (
        <div className="app">
            <Header></Header>

            <Routes>
                <Route
                    path="/"
                    element={<MainPage></MainPage>}
                ></Route>

                <Route
                    path="/register"
                    element={<RegisterPage></RegisterPage>}
                ></Route>

                <Route
                    path="/reservation"
                    element={<ReservationPage></ReservationPage>}
                ></Route>

                <Route
                    path="/auto"
                    element={<AutoPage></AutoPage>}
                ></Route>
            </Routes>
            
        </div>
    );
};

export default App;
