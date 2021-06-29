import React from "react";

type PropsType = {
    btnName: string
    function: () => void
}

export const Button = (props: PropsType) => {

    const callback = () => {
        props.function();
    };

    return (
        <button onClick={callback}>{props.btnName}</button>
    );
};