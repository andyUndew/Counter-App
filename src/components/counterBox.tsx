// カウンターごとの機能

import { SetStateAction, useState } from "react";

interface NameProps {
    counterName : string,
    nameArray:string[],
    setNameArray:React.Dispatch<SetStateAction<string[]>>,
    setButtonText:React.Dispatch<SetStateAction<string>>,
    setButtonState:React.Dispatch<SetStateAction<boolean>>,
    setNameText:React.Dispatch<SetStateAction<string>>,
    openModal:() => void,
}

export const CounterBox = ({counterName,nameArray,setNameArray,setButtonText,setButtonState,setNameText,openModal}:NameProps) =>{
    const [count,setCount] = useState<number>(0);
    const addCount = () => {
        setCount(count + 1);
    }
    const downCount = () => {
        setCount(count - 1);
    }
    const resetCount = () =>{
        setCount(0);
    }
    const removeCounter = () => {
        const newNameArray = [...nameArray];
        newNameArray.forEach((item,index) => {
            if(item === counterName) {
                newNameArray.splice(index, 1);
            }
        })
        setNameArray(newNameArray);
    }
    const changeName = () => {
        setButtonText('Change Counter')
        setButtonState(false);
        setNameText(counterName)
        openModal();
    }
    return (
        <section className="counter-box column is-4" data-name={counterName}>
            <div className="box">
            <div className="block is-flex is-justify-content-space-between is-align-items-center">
                <p className="counter-name">
                    {counterName}
                </p>
                <div className="is-flex">
                <h1 className="tag is-white is-large"><span className="counter">{count}</span></h1>
                <button className="countUp button is-primary increment ml-4" onClick={addCount}>+</button>
                <button className="button is-light decrement ml-2" onClick={downCount}>-</button>
                </div>
            </div>
            <div className="is-flex is-justify-content-space-between">
                <button className="button is-warning is-light change-name" onClick={changeName}>change name</button>
                <div className="is-flex is-justify-content-right">
                <button className="button is-primary is-light reset" onClick={resetCount}>Reset</button>
                <button className="button is-danger is-light remove ml-4" onClick={removeCounter}>Remove</button>
                </div>
            </div>
            </div>
        </section>
    )
}