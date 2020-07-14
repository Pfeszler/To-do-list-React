import React from "react";
import "./style.css"


const Form = () =>
    (
        <form className="form__form">
            <input className="form__input" placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj Zadanie</button>
        </form>
    );
export default Form


