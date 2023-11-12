import "@/styles/globals.css";
import { BoardContext } from "@/context/BoardContext";
import { useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [activeAspect, setActiveAspect] = useState("");
  const [board, setBoard] = useState({});

  return (
    <div>
      <BoardContext.Provider value={{ activeAspect, setActiveAspect, board, setBoard }}>
        <Component {...pageProps} />
      </BoardContext.Provider>
    </div>
  );
}
