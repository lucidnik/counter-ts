import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    setSettingsCallback: (startValue: number, maxValue: number) => void
}

export const Settings = (props: PropsType) => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    const currentStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber);
    };

    const currentMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber);
    };

    const setSettings = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        props.setSettingsCallback(startValue, maxValue);

    };

    useEffect(() => {
        let startValueString = localStorage.getItem('startValue');
        let maxValueString = localStorage.getItem('maxValue');
        if (startValueString && maxValueString) {
            let newStartValue = JSON.parse(startValueString);
            let newMaxValue = JSON.parse(maxValueString);
            setStartValue(newStartValue);
            setMaxValue(newMaxValue);
        }
    }, []);

    return (
        <div>
            <div> START VALUE
                <input type="number" value={startValue} onChange={currentStartValue}/>
            </div>
            <div> MAX VALUE
                <input type="number" value={maxValue} onChange={currentMaxValue}/>
            </div>

            <button onClick={setSettings}>SET</button>
        </div>
    );
};