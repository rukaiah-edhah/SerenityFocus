'use client'
import {useState, useEffect} from 'react';
import { Button } from "@/components/ui/button"


export default function Timer(){
    let countdownInterval: any;
    let paused = false;
    const [timeLeft, setTimeLeft] = useState(1500);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const updateTime = (increment: number) => {
        if (!paused && !countdownInterval && totalSeconds < 3600){
            setTotalSeconds((prevSeconds) => prevSeconds + increment);
        }
    }

    const formatTime = (time: number) => ({
        '--value': time,
    }) as React.CSSProperties;

    const addFive = () => setTimeLeft((prevTime) => {
        if (prevTime < 3600){
            return prevTime + 300;
        }
        return prevTime;
    });
    const subFive = () => setTimeLeft((prevTime) => Math.max(0, prevTime - 300));

    const startCountdown = () => setIsRunning(true);
    const pauseCountdown = () => setIsRunning(false);

    const resetCountdown = () => {
        clearInterval(countdownInterval);
        setTotalSeconds(0);
        paused = false;
        setTimeLeft(0);
    }

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning, timeLeft])

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedMinutes = formatTime(minutes);
    const formattedSeconds = formatTime(seconds);



    return(
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mb-24">
                <div className="flex flex-col">
                    <span className="countdown font-mono text-8xl">
                        <span style={formattedMinutes}>{String(minutes).padStart(2, '0')}</span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-8xl">
                        <span style={formattedSeconds}>{String(seconds).padStart(2, '0')}</span>
                    </span>
                    min
                </div>
            </div>


            <div className='flex flex-col items-center justify-center'>
                <div className='items-center justify-center grid grid-cols-2 gap-5 lg:gap-6 w-full mb-5'>
                    <div>
                        <Button type='button' onClick={() => addFive()} className='w-full bg-base-content text-base-300 hover:text-base-content'>+5</Button>
                    </div>
                    <div>
                        <Button type='button' onClick={() => subFive()} className='w-full bg-base-content text-base-300 hover:text-base-content'>-5</Button>
                    </div>
                </div>
                <div className='items-center justify-center grid grid-cols-3 gap-4 lg:gap-6 w-full'>
                    <div>
                        <Button type='button' onClick={() => startCountdown()} className='w-full bg-base-content text-base-300 hover:text-base-content'>Start</Button>
                    </div>
                    <div>
                        <Button type='button' onClick={() => pauseCountdown()} className='w-full bg-base-content text-base-300 hover:text-base-content'>Pause</Button>
                    </div>
                    <div>
                        <Button type='button' onClick={() => resetCountdown()} className='w-full bg-base-content text-base-300 hover:text-base-content'>Reset</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}