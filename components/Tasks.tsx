import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"

export default function Tasks() {
    const task_list = [
        {
            id:1,
            task: "do laundary",
        },
        {
            id:2,
            task: "do laundary",
        },
        {
            id:3,
            task: "do laundary",
        },
        
    ]
    return (
        <div>
            <Card className='w-[350px] bg-base-300 border-base-300 rounded-xl'>
              <CardContent className=''>
                <form className='mt-5'>
                  <div className='flex w-full max-w-sm items-center space-x-2'>
                    <Input id="task"/>
                    <Button type='submit'>Add</Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex flex-col w-full gap-2 items-start text-base-content overflow-auto' style={{ maxHeight: '150px'}}>
                {task_list.map((p:any) => (
                    <div key={p.id} className="w-full justify-between flex">
                        {p.id}. {p.task} <span>x</span>
                    </div>
                ))}       
              </CardFooter>
            </Card>
        </div>
    )
}