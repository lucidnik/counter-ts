import React from "react";
import {Button} from "./Button";

type PropsType = {
    state: number
    increase: () => void
    reset: () => void
}


export const Counter = (props: PropsType) => {
    return (
        <div>
            <div>{props.state}</div>
            <Button btnName={'+'} function={props.increase} />
            <Button btnName={'reset'} function={props.reset} />
        </div>
    );
};

