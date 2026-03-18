import "./App.css";

import { RegisterPage } from "./pages/RegisterPage";
import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { HistoryPage } from "./pages/HistoryPage";
import { SearchPage } from "./pages/SearchPage";
import { CheckInPage } from "./pages/CheckInPage";

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
                    path="/history"
                    element={<HistoryPage></HistoryPage>}
                ></Route>

                <Route
                    path="/search"
                    element={<SearchPage></SearchPage>}
                ></Route>

                <Route
                    path="/checkIn"
                    element={<CheckInPage></CheckInPage>}
                ></Route>
            </Routes>
            
        </div>
    );
};

export default App;
