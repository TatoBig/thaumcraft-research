import Aspects from "@/components/Aspects";
import Board from "@/components/Board";
import { BoardContext } from "@/context/BoardContext";
import { auth } from "@/services/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Index = () => {
  const [boardSize, setBoardSize] = useState(
    Math.floor(Math.random() * (10 - 5) + 5)
  );
  const { currentUser, setCurrentUser, setCompleted } =
    useContext(BoardContext);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        router.push("/login");
      } else {
        setCurrentUser(user);
      }
    });
  }, [currentUser]);

  return (
    <div className="w-screen h-screen bg-yellow-50 p-20 flex justify-between">
      {currentUser?.uid && <Aspects id={currentUser.uid} />}
      {boardSize && <Board boardSize={boardSize} />}
      <button
        className="absolute top-20 right-20 flex rounded-full p-4 bg-yellow-500"
        onClick={() => signOut(auth)}
      >
        Salir
      </button>
      
    </div>
  );
};

export default Index;
