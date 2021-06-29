import React, {useState} from "react";
import {Counter} from "./Counter";

export const MainCounter = () => {

    let [state, setState] = useState(0)

    const increase = () => {
        setState(state + 1)
    }

    const reset = () => {
        setState(0)
    }

    return (
        <Counter state={state} increase={increase} reset={reset} />
    );
};

