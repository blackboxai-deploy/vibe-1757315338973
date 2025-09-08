'use client';

import { useState, useEffect } from 'react';

export const useRpg = () => {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [tasks, setTasks] = useState<any[]>([]);
  const [quests, setQuests] = useState<any[]>([]);
  const [milestones, setMilestones] = useState<any[]>([]);
  const [rewards, setRewards] = useState<any[]>([]);
  const [streak, setStreak] = useState(0);

  const xpToNextLevel = level * 100;

  const addTask = (task: any) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const completeTask = (taskId: number, xpValue: number) => {
    setXp(xp + xpValue);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  useEffect(() => {
    if (xp >= xpToNextLevel) {
      setLevel(level + 1);
      setXp(xp - xpToNextLevel);
    }
  }, [xp, level, xpToNextLevel]);

  return {
    level,
    xp,
    xpToNextLevel,
    tasks,
    quests,
    milestones,
    rewards,
    streak,
    addTask,
    completeTask,
  };
};
