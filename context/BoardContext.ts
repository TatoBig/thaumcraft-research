import { User, User } from "firebase/auth";
import { createContext } from "react";

export type BoardPositions = {
  [key: string]: {
    aspect: string,
    initial?: boolean
    valid?: boolean 
  }
}

type BoardContextType = {
  activeAspect: string
  currentUser: User | null
  setCurrentUser: (user: User) => void
  setActiveAspect: (aspect: string) => void
  board: BoardPositions
  setBoard: (board: BoardPositions) => void
  completed: boolean,
  setCompleted: (completed: boolean) => void
}

export const BoardContext = createContext<BoardContextType>({} as BoardContextType);
