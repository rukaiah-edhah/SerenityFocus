// taskAPI.js

export const updateTaskStatus = async (taskId: any, completed: any) => {
    try {
      const response = await fetch(`/api/task?id=${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update task status');
      }
      
      // Assuming the backend returns updated task data
      const updatedTask = await response.json();
      return updatedTask;
    } catch (error) {
      console.log('Error updating task status: ', error);
    }
  };
  