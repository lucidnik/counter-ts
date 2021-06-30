import React from "react";

type PropsType = {
    btnName: string
    function: () => void
    resetDisabled?: boolean
    incDisabled?: boolean
    state: number
}

export const Button = (props: PropsType) => {

    const callback = () => {
        props.function();
    };

    return (
        <button onClick={callback} disabled={props.resetDisabled || props.incDisabled} >{props.btnName}  </button>
    );
};