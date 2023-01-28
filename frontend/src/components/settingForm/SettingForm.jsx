import React, { useState } from "react";
import style from "./SettingForm.module.css";

const SettingForm = () => {

    const initialInput = {
        image: 'https://images7.alphacoders.com/714/thumb-1920-714040.jpg',
        name: 'Nahuel',
        lastName: 'Alesso',
        mail: 'nahuelalesso19@gmail.com',
        password: '1234',
        adress: 'Avenida Falsa 123',
        age: '03/10/1998',
        phoneNumber: 1159051914
    }

    const [input, setInput] = useState(initialInput);

    const handleOnChange = (event) => {
        const obj = {
            ...input,
            [event.target.name]: event.target.value
        }
        setInput(obj);
    }

    return (
        <form className={style.divform}>
            <div>
                <div>
                    <legend htmlFor="name">Name</legend>
                    <input type='text' name="name" value={input.name} onChange={handleOnChange}/>
                </div>
                <div>
                    <legend htmlFor="lastName">Last Name</legend>
                    <input type='text' name="lastName" value={input.lastName} onChange={handleOnChange}/>                        
                </div>
            </div>
            
        </form>
    )
}

export default SettingForm;