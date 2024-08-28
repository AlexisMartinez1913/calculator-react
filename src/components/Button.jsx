import React from 'react';
import "../styles/Button.css";

function Button(props) {

    const isOperator = value => {
        //si no es un número
        return isNaN(value) && (value != ".") && (value != "=")
    };

    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator': ''}`.trimEnd()}>
            {props.children}

        </div>
    )
}

export default Button;
