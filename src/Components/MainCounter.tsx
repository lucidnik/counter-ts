import React, {useEffect, useState} from "react";
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import s from './MainCounter.module.css';

export const MainCounter = () => {

    let [startState, setStartState] = useState(0);

    let [maxState, setMaxState] = useState(5);

    let [resetDisabled, setResetDisabled] = useState(true);

    let [incDisabled, setIncDisabled] = useState(false);

    let [error, setError] = useState(false);

    const increase = () => {
        setResetDisabled(false);
        setStartState(startState + 1);
        if (startState + 1 === maxState) {
            setIncDisabled(true);
        }
        console.log(startState);
    };

    const reset = () => {
        setResetDisabled(true);
        setIncDisabled(false);
        let currentMaxValueString = localStorage.getItem('startValue');
        if (currentMaxValueString) {
            let currentMaxValue = JSON.parse(currentMaxValueString);
            setStartState(currentMaxValue);
        }
    };

    const setSettings = (startValue: number, maxValue: number) => {
        if (startValue >= maxValue) {
            setError(true);
        }
        setStartState(startValue);
        setMaxState(maxValue);

    };

    useEffect(() => {
        let startValueString = localStorage.getItem('startValue');
        let maxValueString = localStorage.getItem('maxValue');
        if (startValueString && maxValueString) {
            let newStartValue = JSON.parse(startValueString);
            let newMaxValue = JSON.parse(maxValueString);
            if(newStartValue >= newMaxValue) {

            }
            setStartState(newStartValue);
            setMaxState(newMaxValue);
        }
    }, []);

    useEffect(() => {
        startState > maxState ? setError(true) : setError(false);
    }, [maxState, startState]);


    return (
        <div>
            {!error ? <Counter state={startState} maxState={maxState} increase={increase} reset={reset} resetDisabled={resetDisabled}
                               incDisabled={incDisabled}/> :
                <div className={s.error}>Incorrect Value</div>}
            <Settings setSettingsCallback={setSettings}/>
        </div>
    );
};

