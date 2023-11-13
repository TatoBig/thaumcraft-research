import "@/styles/globals.css";
import { BoardContext } from "@/context/BoardContext";
import { useState } from "react";
import type { AppProps } from "next/app";
import { User } from "firebase/auth";

export default function App({ Component, pageProps }: AppProps) {
  const [activeAspect, setActiveAspect] = useState("");
  const [board, setBoard] = useState({});
  const [completed, setCompleted] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <div>
      <BoardContext.Provider
        value={{
          activeAspect,
          currentUser,
          setCurrentUser,
          setActiveAspect,
          board,
          setBoard,
          completed,
          setCompleted,
        }}
      >
        <Component {...pageProps} />
      </BoardContext.Provider>
    </div>
  );
}
