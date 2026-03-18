import { useState } from "react";
import { InputField } from "../components/inputField/InputField";

import { register } from "../services/register";

export function RegisterPage() {
    const [form, setForm] = useState({
        fi: "",
        dateOfBirth: "",
        gender: "",
        citizenship: "",
        passport: "",
        phone: 0,
    })

    return (
        <div className="register-page">
            <div className="register-form">
                <h2>Регистрация</h2>
                <InputField
                    text="Имя Фамилия"
                    id="fi"
                    value={(value) => setForm({
                        ...form,
                        fi: value.target.value
                    })}
                ></InputField>

                <InputField
                    text="Дата рождения"
                    id="dateOfBirth"
                    inputType="date"
                    value={(value) => setForm({
                        ...form,
                        dateOfBirth: value.target.value
                    })}
                ></InputField>

                <InputField
                    text="Пол"
                    id="gender"
                    value={(value) => setForm({
                        ...form,
                        gender: value.target.value
                    })}
                ></InputField>

                <InputField
                    text="Гражданство"
                    id="citizenship"
                    value={(value) => setForm({
                        ...form,
                        citizenship: value.target.value
                    })}
                ></InputField>

                <InputField
                    text="Паспорт"
                    id="passport"
                    value={(value) => setForm({
                        ...form,
                        passport: value.target.value
                    })}
                ></InputField>

                <InputField
                    text="Номер телефона"
                    id="phone"
                    value={(value) => setForm({
                        ...form,
                        phone: value.target.value
                    })}
                ></InputField>

                <button 
                    className="submit-btn"
                    onClick={() => register(form)}
                >Создать</button>
            </div>
        </div>
    );
};
