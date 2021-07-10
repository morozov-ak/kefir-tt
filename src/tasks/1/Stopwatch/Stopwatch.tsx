import React, {useState,useEffect} from "react";
import {ILap} from "./interfaces"
import List from "./List";

let timer_id: any;
let START_TIME: number



const Stopwatch: React.FC=()=> {
    useEffect(()=>{
        console.log("render")
        return function cleanup() {clearInterval(timer_id)};
    },[])

    const [time,setTime]=useState(0)
    const [status,setStatus]=useState(false)
    const [list,setlist]=useState<ILap[]>([])


    function getUnits(time: number) {
        const seconds = time / 1000;

        const min = Math.floor(seconds / 60).toString();
        const sec = Math.floor(seconds % 60).toString();
        const msec = (seconds % 1).toFixed(3).substring(2);

        return `${min}:${sec}:${msec}`;
    }
    


    const handleClick = () => {
        if(status){
            clearInterval(timer_id);
            setStatus(false)
        }else{

            setStatus(status=>!status)
            START_TIME = Date.now()
            timer_id = setInterval(() => {
                setTime(Date.now() - START_TIME);
            });
            setStatus(true)
        }
    }

    const handleReset = () => {
        START_TIME = Date.now()
        setTime(Date.now() - START_TIME);
    };

    const handleLap = () => {
        let lap = {key:Date.now(),time:Date.now() - START_TIME}
        setlist(prev=>{return [lap, ...prev]})
    };

    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }

    return(
        <>
            <div>
                <p>{getUnits(time)}</p>
                <button onClick={handleClick}>
                {status ? "Stop" : "Start"}
                </button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleLap}>Lap</button>
            </div>
            <div>
                <List list={list} getUnits={getUnits}/>
            </div>
        </>
        ) 
}

export default Stopwatch;
