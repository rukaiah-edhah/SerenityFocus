'use client'
import { useState, useEffect } from 'react';
import Deletebtn from "./Deletebtn"
// import { getTasks } from '@/actions/addTask';
import { updateTaskStatus } from './updateTask';

export default function TaskList(){
    const [taskList, setTaskList] = useState<any[]>([]);

    useEffect(() => {
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

        fetchData();
    }, []);

    const handleCheckboxChange = async (taskId: string, checked: boolean) => {
        try {
            await updateTaskStatus(taskId, checked);
            const updatedTaskList = taskList.map(task => {
                if (task._id === taskId) {
                    return { ...task, completed: checked };
                }
                return task;
            });
            setTaskList(updatedTaskList);
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    return (
        <>
            {taskList.map((p:any) => (
                <div key={p.id} className="w-full gap-12 justify-between flex">
                    <div>
                      <input type="checkbox" className="checkbox inline align-middle rounded-full mr-2"
                         onChange={(e) => handleCheckboxChange(p.id, e.target.checked)}/> {p.task || ''}  
                    </div> 
                    <Deletebtn id={p.id}/>
                </div>
            ))} 
        </>
    )
}