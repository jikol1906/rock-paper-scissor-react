import { GameButtonTypes } from './Components/GameButton/Options';
import { GameResult } from './App';

export function determineGameResult(
  playerSelected: GameButtonTypes,
  houseSelected: GameButtonTypes) {
  if (playerSelected === houseSelected)
    return GameResult.TIE;
  if ((playerSelected === GameButtonTypes.Paper &&
    houseSelected === GameButtonTypes.Scissor) ||
    (playerSelected === GameButtonTypes.Rock &&
      houseSelected === GameButtonTypes.Paper) ||
    (playerSelected === GameButtonTypes.Scissor &&
      houseSelected === GameButtonTypes.Rock)) {
    return GameResult.HOUSE_WON;
  }

  return GameResult.PLAYER_WON;
}
