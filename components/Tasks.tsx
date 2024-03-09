'use client'
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { updateTaskStatus } from './updateTask';
import Deletebtn from "./Deletebtn"


interface Task {
  id: number,
  task: string,
  completed: boolean 
}

const schema = z.object({
  task: z.string()
})

export default function Tasks() {
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
    });
    const [taskList, setTaskList] = useState<any[]>([]);

    const fetchData = async () => {
      try {
          const res = await fetch("/api/task", {
              method: "GET", 
              headers: {
                  "Content-Type": "application/json"
              }
          });
          if (!res.ok){
              throw new Error('failed to create task')
          } 
          const tasks = await res.json();
          setTaskList(tasks);
      } catch (err){
          console.error('Error fetching tasks: ', err);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const removePost = async (id: any) => {
      const confirmed = confirm('Are you sure?');

      if (confirmed) {
          const res = await fetch(`/api/task?id=${id}`, {
              method: "DELETE",
          });

          if (res.ok){
              setTaskList(prevTasks => prevTasks.filter(task => task.id !== id));
          }
      }
    }

    const handleCheckboxChange = async (taskId: string, checked: boolean) => {
      try {
          await updateTaskStatus(taskId, checked);
          const updatedTaskList = taskList.map(task => {
              if (task.id === taskId) {
                  return { ...task, completed: checked };
              }
              return task;
          });
          setTaskList(updatedTaskList);
      } catch (error) {
          console.error('Error updating task status:', error);
      }
    };

    const handleSubmit = async (data: z.infer<typeof schema>) => {
      if (!data){
        alert("all fields are required.");
        return;
      }

      try {
        const res = await fetch("/api/task", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (!res.ok){
          throw new Error('failed to create task')
        } 
      
        await fetchData();

      } catch (error){
        console.error("Error adding task: ", error);
      }
    }

    return (
        <div>
            <Card className='w-[350px] h-[250px] bg-base-300 border-base-300 rounded-xl pb-5'>
              <CardContent>
                <Form {...form}>
                  <form className='mt-5 space-y-6 w-full' onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className='flex w-full max-w-md items-center gap-2'>
                      <FormField 
                        control={form.control}
                        name="task"
                        render={({ field }) => (
                          <FormItem>
                            <Input {...field} className='w-full' maxLength={25}/>
                          </FormItem>
                        )}
                      />
                      <Button type='submit' className="w-1/3 bg-base-content text-base-300">Add</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className='flex flex-col w-full gap-2 items-start text-base-content overflow-auto' style={{ maxHeight: '150px'}}>
                <div>
                {taskList.map((p:any) => (
                    <div key={p.id} className="w-full gap-12 justify-between flex text-left">
                        <div>
                          <input type="checkbox" className="checkbox inline align-middle rounded-full mr-2"
                             onChange={(e) => handleCheckboxChange(p.id, e.target.checked)}/> {p.task}  
                        </div> 
                        <Deletebtn id={p.id} onRemove={removePost}/>
                    </div>
                ))} 
                </div>
              </CardFooter>
            </Card>
        </div>
    )
}