import { BoardContext } from "@/context/BoardContext";
import { useContext, useEffect, useState } from "react";
import BoardCell from "./BoardCell";
import AspectList from "./AspectList";

const Board = () => {
  const { setBoard } = useContext(BoardContext);
  const boardSize = 6;
  const [boardAspects, setBoardAspects] = useState([]);
  const boardCells = Array(boardSize * boardSize).fill(0);

  let once = true;

  useEffect(() => {
    randomizeGame();
  }, []);

  const randomizeGame = () => {
    if (once) {
      const randomQuantity = Math.floor((Math.random() * (5 - 3)) + 3);
      const initialBoard: any = {}
      for (let i = 0; i < randomQuantity; i++) {
        initialBoard[`${2},${2}`] = {
          aspect: AspectList[Math.floor(Math.random() * AspectList.length)]
        }
      }

      setBoard(initialBoard);
      once = false;
    }
  };

  return (
    <div className="w-1/2 bg-yellow-100 mr-96 flex justify-center items-center">
      <div>
        <div
          style={{
            gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
            display: "grid",
          }}
        >
          {boardCells.map((_, index) => (
            <BoardCell
              key={index}
              x={index % boardSize}
              y={Math.floor(index / boardSize)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
