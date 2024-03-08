'use client'
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import TaskList from "./TaskList"
import { useRouter } from "next/navigation"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

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
    const router = useRouter();

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

        if (res.ok){
          router.refresh();
        } else {
          throw new Error('failed to create task')
        }
        
        router.refresh();
      } catch (error){
        console.error("Error adding task: ", error);
      }
    }

    // const handleChange = (e: any) => {
    //   const {name, value} = e.target;
    //   formData.set(name, value);
    // }

    return (
        <div>
            <Card className='w-[350px] h-[250px] bg-base-300 border-base-300 rounded-xl pb-5'>
              <CardContent className=''>
                <Form {...form}>
                  <form className='mt-5 space-y-6 w-full' onSubmit={form.handleSubmit(handleSubmit)}>
                    <div className='flex w-full max-w-md items-center space-x-2'>
                      <FormField 
                        control={form.control}
                        name="task"
                        render={({ field }) => (
                          <FormItem>
                            <Input {...field} className='w-full' maxLength={25}/>
                          </FormItem>
                        )}
                      />
                      <Button type='submit' >Add</Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className='flex flex-col w-full gap-2 items-start text-base-content overflow-auto' style={{ maxHeight: '150px'}}>
                <TaskList />
              </CardFooter>
            </Card>
        </div>
    )
}