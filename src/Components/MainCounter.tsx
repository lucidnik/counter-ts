import React, {useEffect, useState} from "react";
import {Counter} from "./Counter";
import {Settings} from "./Settings";

export const MainCounter = () => {

    let [state, setState] = useState(0);

    let [resetDisabled, setResetDisabled] = useState(true);

    let [incDisabled, setIncDisabled] = useState(false);

    const increase = () => {
        setResetDisabled(false);
        setState(state + 1);
        if (state === 5) {
            setIncDisabled(true);
        }
        console.log(state);
    };

    const reset = () => {
        setResetDisabled(true);
        setIncDisabled(false);
        setState(0);
    };

    return (
        <div>
            <Counter state={state} increase={increase} reset={reset} resetDisabled={resetDisabled} incDisabled={incDisabled}/>
            <Settings/>
        </div>
    );
};

