import { useEffect, useState } from 'react';


function getScore() {
    const score = localStorage.getItem('score');
    return score ? parseInt(score) : 0
    
}


export const useScore = () => {
  const [score, setScore] = useState<number>(getScore);

  //Save score in localhost
  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  return { score, setScore };
};
