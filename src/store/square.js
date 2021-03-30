//Action Types
const PLAY = "PLAY";
const WINNER = "WINNER";
const RESET = "RESET";

//Action Creatores
export const playCreator = (number) => ({
  type: PLAY,
  payload: {
    number
  }
});
export const winnerCreator = (winner) => ({
  type: WINNER,
  payload: {
    winner
  }
});
export const resetCreator = () => ({
  type: RESET
});

//Initial State

const initialState = {
  squares: new Array(9).fill(null),
  isXPlaying: true,
  winner: null,
  winningConfig: []
};

//Reducer
export default function reducer(state = initialState, action) {
  if (action.type === PLAY) {
    const squares = state.squares.slice();
    if (!state.winner) {
      if (state.isXPlaying) {
        squares[action.payload.number] = "X";
      } else {
        squares[action.payload.number] = "O";
      }
    }

    return {
      //Question: is this the right way to update state? How to handle nested objects here?
      ...state,
      squares,
      isXPlaying: !state.isXPlaying
    };
  }
  if (action.type === WINNER) {
    const winner = action.payload.winner.winner;
    const winningConfig = action.payload.winner.winningConfig;

    return {
      ...state,
      winner,
      winningConfig
    };
  }
  if (action.type === RESET) {
    const squares = new Array(9).fill(null);
    return {
      ...state,
      isXPlaying: true,
      winner: null,
      winningConfig: [],
      squares
    };
  }
  return state;
}
