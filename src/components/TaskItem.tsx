'use client';

import { useRpg } from '../hooks/use-rpg';

export const TaskItem = ({ task }: { task: any }) => {
  const rpg = useRpg();

  return (
    <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
      <span>{task.name}</span>
      <div className="flex items-center space-x-4">
        <span className="text-yellow-400">{task.xp} XP</span>
        <button onClick={() => rpg.completeTask(task.id, task.xp)} className="bg-green-500 p-2 rounded-lg">Complete</button>
      </div>
    </div>
  );
};
