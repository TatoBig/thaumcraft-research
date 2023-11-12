import { BoardContext } from "@/context/BoardContext";
import React, { MouseEvent, useContext, useEffect } from "react";
import Aspect from "./Aspect";

type Props = {
  x: number;
  y: number;
};

const BoardCell = ({ x, y }: Props) => {
  const { board, setBoard, activeAspect } = useContext(BoardContext);

  const handleClick = () => {
    if (activeAspect) {
      setBoard((prev) => {
        return {
          ...prev,
          [`${x},${y}`]: {
            aspect: activeAspect,
          },
        };
      });
    }
  };

  const handleRemove = () => {
    setBoard((prev) => {
      return {
        ...prev,
        [`${x},${y}`]: undefined
      };
    });
  };

  return (
    <div
      className="w-12 h-12 border border-yellow-500 rounded-lg justify-center items-center flex"
      onClick={(e) => handleClick()}
    >
      {board[`${x},${y}`]?.aspect ? (
        <div className="relative group">
          <Aspect a={board[`${x},${y}`].aspect} disabled={true} />
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            className="rounded-full absolute -top-1 -right-1 w-4 h-4 text-[10px] flex justify-center items-center bg-gray-700 group-hover:visible invisible"
          >
            x
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BoardCell;
