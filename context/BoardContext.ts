import { createContext } from "react";

export type BoardPositions = {
  [key: string]: {
    aspect: string
  }
}

type BoardContextType = {
  activeAspect: string
  setActiveAspect: (aspect: string) => void
  board: BoardPositions
  setBoard: (board: BoardPositions) => void
}

export const BoardContext = createContext<BoardContextType>({} as BoardContextType);
