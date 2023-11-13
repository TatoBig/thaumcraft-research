import { BoardContext, BoardPositions } from "@/context/BoardContext";
import { useContext, useEffect, useState } from "react";
import BoardCell from "./BoardCell";
import AspectList from "./AspectList";

const Board = ({ boardSize = 6 }: { boardSize: number }) => {
  const { setBoard, board, setCompleted } = useContext(BoardContext);
  const [boardAspects, setBoardAspects] = useState([]);
  const boardCells = Array(boardSize * boardSize).fill(0);

  let once = true;

  useEffect(() => {
    randomizeGame();
  }, []);

  useEffect(() => {
    const completed = verifyBoard();
    if (completed) {
      setCompleted(true);
    }
  }, [board]);

  const verifyBoard = () => {
    let initialAspect = {};
    let coords = "";
    let breaks = false;

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (board[`${i},${j}`]?.initial) {
          initialAspect = board[`${i},${j}`];
          coords = `${i},${j}`;
          breaks = true;
          break;
        }
      }
      if (breaks) {
        break;
      }
    }
    console.log(coords);
    return hasConnections(board, coords);
  };

  function hasConnections(board: BoardPositions, targetKey: string) {
    if (board[targetKey] && board[targetKey]?.initial) {
      const visited = new Set();

      function dfs(key) {
        visited.add(key);

        const [x, y] = key.split(",").map(Number);

        for (const neighborKey of Object.keys(board)) {
          if (!visited.has(neighborKey) && board[neighborKey]?.valid) {
            const [neighborX, neighborY] = neighborKey.split(",").map(Number);

            if (Math.abs(neighborX - x) <= 1 && Math.abs(neighborY - y) <= 1) {
              dfs(neighborKey);
            }
          }
        }
      }

      dfs(targetKey);

      let connectedInitialCount = 0;

      for (const visitedKey of visited) {
        if (board[visitedKey].initial) {
          connectedInitialCount += 1;
        }
      }

      // Check if there are at least two other connected initial cells
      return connectedInitialCount >= 3;
    }

    // If the target cell is not an initial cell, return false
    return false;
  }

  const randomCoordinate = () => {
    const randomBorder = Math.floor(Math.random() * 4) + 1;
    let randomCoordinate;
    switch (randomBorder) {
      case 1:
        randomCoordinate = `${Math.floor(Math.random() * boardSize)},0`;
        break;
      case 2:
        randomCoordinate = `${Math.floor(Math.random() * boardSize)},${
          boardSize - 1
        }`;
        break;
      case 3:
        randomCoordinate = `0,${Math.floor(Math.random() * boardSize)}`;
        break;
      case 4:
        randomCoordinate = `${boardSize - 1},${Math.floor(
          Math.random() * boardSize
        )}`;
        break;
      default:
        throw new Error("Invalid randomBorder value");
    }
    return randomCoordinate;
  };

  const randomizeGame = () => {
    if (once) {
      const randomQuantity = 3;

      const initialBoard: any = {};
      for (let i = 0; i < randomQuantity; i++) {
        initialBoard[randomCoordinate()] = {
          aspect: AspectList[Math.floor(Math.random() * AspectList.length)],
          initial: true,
        };
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
