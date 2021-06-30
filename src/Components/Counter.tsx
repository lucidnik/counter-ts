import React from "react";
import {Button} from "./Button";
import s from './Button.module.css'

type PropsType = {
    state: number
    increase: () => void
    reset: () => void
    resetDisabled?: boolean
    incDisabled?: boolean
}


export const Counter = (props: PropsType) => {
    return (

        <div>
            <div className={props.state === 5 ? s.error : '' } >{props.state}</div>
            <Button btnName={'+'} function={props.increase} incDisabled={props.incDisabled} state={props.state} />
            <Button btnName={'reset'} function={props.reset} resetDisabled={props.resetDisabled} state={props.state} />
        </div>
    );
};

