'use client';

export const Quests = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Quests</h2>
      <div className="space-y-3">
        <div className="bg-gray-700 p-3 rounded-lg">Complete 3 health tasks for a 50 XP bonus!</div>
        <div className="bg-gray-700 p-3 rounded-lg">Read for 1 hour for a 100 XP bonus!</div>
      </div>
    </div>
  );
};
