'use client'
import Tasks from '@/components/Tasks';
import Timer from '@/components/Timer';


export default function HomePage({children}: {children: React.ReactNode}) {

  return (
    <main data-theme="" className="flex flex-col items-center justify-between p-10">
      <h1 className='font-semibold text-4xl mb-12 text-center'>Pomodoro</h1>

      <div className='flex flex-col items-center justify-center w-full text-center gap-8 lg:grid xl:grid-cols-3 lg:gap-12'>
          <div>
            {children}
          </div>
          
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
