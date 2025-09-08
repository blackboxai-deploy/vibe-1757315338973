'use client';

import { useRpg } from '../hooks/use-rpg';
import { CategoryCard } from './CategoryCard';
import { Quests } from './Quests';
import { Rewards } from './Rewards';
import { CompletedTasksLog } from './CompletedTasksLog';
import { Leaderboard } from './Leaderboard';
import { useState } from 'react';

export const Dashboard = () => {
  const rpg = useRpg();
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="p-4 md:p-8">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img src="https://placehold.co/100x100?text=Avatar" alt="Avatar" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h1 className="text-2xl font-bold">Level {rpg.level}</h1>
            <p className="text-gray-400">Novice Adventurer</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg">Streak: {rpg.streak} days</p>
          <div className="w-48 bg-gray-700 rounded-full h-4 mt-1">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${(rpg.xp / rpg.xpToNextLevel) * 100}%` }}></div>
          </div>
          <p className="text-sm text-gray-400">{rpg.xp} / {rpg.xpToNextLevel} XP</p>
        </div>
      </header>

      <div className="mb-8">
        <div className="flex border-b border-gray-700">
          <button onClick={() => setActiveTab('dashboard')} className={`py-2 px-4 ${activeTab === 'dashboard' ? 'border-b-2 border-blue-500' : ''}`}>Dashboard</button>
          <button onClick={() => setActiveTab('leaderboard')} className={`py-2 px-4 ${activeTab === 'leaderboard' ? 'border-b-2 border-blue-500' : ''}`}>Leaderboard</button>
        </div>
      </div>

      {activeTab === 'dashboard' ? (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <CategoryCard title="Health & Fitness" />
            <CategoryCard title="Work & Productivity" />
            <CategoryCard title="Learning & Growth" />
            <CategoryCard title="Social" />
          </div>
          <div className="space-y-8">
            <Quests />
            <Rewards />
            <CompletedTasksLog />
          </div>
        </main>
      ) : (
        <Leaderboard />
      )}
    </div>
  );
};
