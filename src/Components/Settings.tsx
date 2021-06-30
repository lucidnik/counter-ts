import React, {ChangeEvent, useEffect, useState} from "react";

export const Settings = () => {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    const currentStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber);
    };

    const currentMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber);
    };

    const setSettings = () => {};



    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [startValue, maxValue] )


    useEffect(() =>{

    },[] )

    return (
        <div>
            <div> MAX VALUE
                <input type="number" value={maxValue} onChange={currentMaxValue}/>
            </div>
            <div> START VALUE
                <input type="number" value={startValue} onChange={currentStartValue}/>
            </div>
            <button onClick={setSettings}>SET</button>
        </div>
    );
};