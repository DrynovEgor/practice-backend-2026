import { InputField } from "../components/inputField/InputField";
import { useState } from "react";

import { auto } from "../services/auto";

export function AutoPage() {
    const [form, setForm] = useState({
            phone: "",
            password: ""
        })

    return (
        <div className="register-page">
            <div className="register-form">
                <h2>Авторизация</h2>
                <InputField
                    text="Номер телефона"
                    id="phone"
                    value={(value) => setForm({
                        ...form,
                        phone: value.target.value
                    })}
                ></InputField>

                <InputField
                    text="Пароль"
                    id="password"
                    value={(value) => setForm({
                        ...form,
                        password: value.target.value
                    })}
                ></InputField>

                <button 
                    className="submit-btn"
                    onClick={() => auto(form)}
                >Создать</button>
            </div>
        </div>
    )
}