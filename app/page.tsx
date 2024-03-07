'use client'
import Image from 'next/image'
import Tasks from '@/components/Tasks';
import Timer from '@/components/Timer';

export default function Home() {
  const username = "username";
  const isUser = false;

  return (
    <main data-theme="" className="flex flex-col items-center justify-between p-10">
      <h1 className='font-semibold text-4xl mb-12 text-center'>Pomodoro</h1>

      <div className='flex flex-col items-center justify-center w-full text-center gap-8 lg:grid xl:grid-cols-3 lg:gap-12'>
          <div>
            {isUser ? 
              <div className='text-2xl'>Welcome, <span className='font-bold'>@{username}</span></div> : 
              <div></div>}
          </div>
          
          {/* acutal clock */}
          <div className='flex flex-col items-center justify-center'>
            <Timer />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <Tasks />
          </div>
      </div>
    </main>
  )
}
