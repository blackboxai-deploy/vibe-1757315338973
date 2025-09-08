'use client';

import { useState } from 'react';
import { useRpg } from '../hooks/use-rpg';
import { TaskItem } from './TaskItem';

export const CategoryCard = ({ title }: { title: string }) => {
  const rpg = useRpg();
  const [task, setTask] = useState('');
  const [xp, setXp] = useState(10);

  const handleAddTask = () => {
    rpg.addTask({ category: title, name: task, xp });
    setTask('');
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {rpg.tasks.filter(t => t.category === title).map(t => (
          <TaskItem key={t.id} task={t} />
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="New Task" 
          className="bg-gray-700 p-2 rounded-lg flex-grow"
        />
        <input 
          type="number" 
          value={xp} 
          onChange={(e) => setXp(Number(e.target.value))} 
          className="bg-gray-700 p-2 rounded-lg w-20"
        />
        <button onClick={handleAddTask} className="bg-blue-500 p-2 rounded-lg">Add</button>
      </div>
    </div>
  );
};
