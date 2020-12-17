import { useEffect, useState } from 'react';


function getPersistedScore() {
    const score = localStorage.getItem('score');
    return score ? parseInt(score) : 0
    
}


export const useScore = () => {
  const [score, setScore] = useState<number>(getPersistedScore);

  //Save score in localStorage
  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  return { score, setScore };
};
