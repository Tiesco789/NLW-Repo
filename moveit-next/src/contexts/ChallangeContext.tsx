import { createContext, useState, ReactNode, useEffect } from 'react';

import Cookies from 'js-cookie';

import challanges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challange {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallangesContextData {
  level: number;
  currentExp: number;
  challangesCompleted: number;
  experienceToNextLevel: number;
  activeChallange: Challange;
  levelUp: () => void;
  startNewChallange: () => void;
  resetChallange: () => void;
  completeChallange: () => void;
  closeLevelUpModal: () => void;
}

interface ChallangesProviderProps {
  children: ReactNode;
  level: number;
  currentExp: number;
  challangesCompleted: number;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({ children, ...rest }: ChallangesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0);
  const [challangesCompleted, setChallangesCompleted] = useState(rest.challangesCompleted ?? 0);
  const [activeChallange, setActiveChallange] = useState(null);
  const [isLevelUpModalOpen, SetIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExp', String(currentExp));
    Cookies.set('challangesCompleted', String(challangesCompleted));
  }, [level, currentExp, challangesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    SetIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    SetIsLevelUpModalOpen(false);
  }

  function startNewChallange() {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
    const challange = challanges[randomChallangeIndex];

    setActiveChallange(challange);

    new Audio('/notification.mp3').play;

    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio 🎉', {
        body: `Valendo ${challange.amount}xp!`
      })
    }
  }

  function resetChallange() {
    setActiveChallange(null)
  }

  function completeChallange() {
    if (!activeChallange) {
      return;
    }

    const { amount } = activeChallange;

    let finalExperience = currentExp + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExp(finalExperience);
    setActiveChallange(null);
    setChallangesCompleted(challangesCompleted + 1);
  }

  return (
    <ChallangesContext.Provider value={{
      level,
      currentExp,
      challangesCompleted,
      levelUp,
      startNewChallange,
      activeChallange,
      resetChallange,
      experienceToNextLevel,
      completeChallange,
      closeLevelUpModal
    }}>
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallangesContext.Provider>
  )
}
