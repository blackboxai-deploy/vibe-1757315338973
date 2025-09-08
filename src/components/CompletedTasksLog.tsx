'use client';
import { useRpg } from '../hooks/use-rpg';


export const CompletedTasksLog = () => {
  const rpg = useRpg();
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Completed Tasks</h2>
      <div className="space-y-3">
        {/* This would be populated from the hook in a real app */}
        <div className="bg-gray-700 p-3 rounded-lg">- Completed 'Workout'</div>
      </div>
    </div>
  );
};
