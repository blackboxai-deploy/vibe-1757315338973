'use client';

export const Leaderboard = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <img src="https://placehold.co/100x100?text=Avatar" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
            <span>Player 1</span>
          </div>
          <span>Level 8</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <img src="https://placehold.co/100x100?text=Avatar" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
            <span>You</span>
          </div>
          <span>Level 5</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center">
            <img src="https://placehold.co/100x100?text=Avatar" alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
            <span>Player 3</span>
          </div>
          <span>Level 4</span>
        </div>
      </div>
    </div>
  );
};
