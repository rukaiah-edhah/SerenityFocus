'use client'
import {useState, useEffect} from 'react';
import { Button } from "@/components/ui/button"


export default function Timer(){
    const initialTime = 24 * 60 + 59;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft])

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedMinutes = { '--value': minutes} as React.CSSProperties;
    const formattedSeconds = { '--value': seconds} as React.CSSProperties;

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
                        <Button type='button' className='w-full bg-base-content text-base-300'>+5</Button>
                    </div>
                    <div>
                        <Button type='button' className='w-full bg-base-content text-base-300'>-5</Button>
                    </div>
                </div>
                <div className='items-center justify-center grid grid-cols-3 gap-4 lg:gap-6 w-full'>
                    <div>
                        <Button type='button' className='w-full bg-base-content text-base-300'>Start</Button>
                    </div>
                    <div>
                        <Button type='button' className='w-full bg-base-content text-base-300'>Pause</Button>
                    </div>
                    <div>
                        <Button type='button' className='w-full bg-base-content text-base-300'>Reset</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}