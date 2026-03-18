import "./InputField.css"

export function InputField({text, id, inputType = "text", value}) {
    return (
        <label className="InputField" htmlFor={id}>
            <span>{text}</span>
            <input 
                type={inputType}
                id={id}
                onChange={value}
            />
        </label>
    )
}