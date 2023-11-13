import { BoardContext } from "@/context/BoardContext";
import React, { MouseEvent, useContext, useEffect } from "react";
import Aspect from "./Aspect";
import Logic from "./Logic";
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { firestore } from "@/services/Firebase";

type Props = {
  x: number;
  y: number;
};

const BoardCell = ({ x, y }: Props) => {
  const {
    board,
    setBoard,
    activeAspect,
    currentUser,
    setCurrentUser,
    setActiveAspect,
  } = useContext(BoardContext);

  const handleClick = async () => {
    if (activeAspect && !board[`${x},${y}`]?.initial) {
      const docRef = doc(firestore, "users", currentUser!.uid);
      const docData = await getDoc(docRef);
      const data = docData.data();
      if (data!.aspects[activeAspect] - 1 === 0) {
        setActiveAspect("");
      }
      await updateDoc(docRef, {
        [`aspects.${activeAspect}`]: increment(-1),
      });
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
        [`${x},${y}`]: undefined,
      };
    });
  };

  const checkValid = (
    x: number,
    y: number,
    aspect: string,
    valid?: boolean
  ) => {
    if (valid) {
      return true;
    }
    let flag = false;

    if (
      Logic[board[`${x + 1},${y}`]?.aspect]?.made?.includes(aspect) ||
      Logic[board[`${x + 1},${y}`]?.aspect]?.make?.includes(aspect)
    ) {
      flag = true;
    }
    if (
      Logic[board[`${x - 1},${y}`]?.aspect]?.made?.includes(aspect) ||
      Logic[board[`${x - 1},${y}`]?.aspect]?.make?.includes(aspect)
    ) {
      flag = true;
    }
    if (
      Logic[board[`${x},${y + 1}`]?.aspect]?.made?.includes(aspect) ||
      Logic[board[`${x},${y + 1}`]?.aspect]?.make?.includes(aspect)
    ) {
      flag = true;
    }
    if (
      Logic[board[`${x},${y - 1}`]?.aspect]?.made?.includes(aspect) ||
      Logic[board[`${x},${y - 1}`]?.aspect]?.make?.includes(aspect)
    ) {
      flag = true;
    }

    if (flag) {
      setBoard((prev) => {
        return {
          ...prev,
          [`${x},${y}`]: { ...prev[`${x},${y}`], valid: true },
        };
      });
      console.log("test");
    }

    return flag;
  };

  return (
    <div
      className="w-12 h-12 border border-yellow-500 rounded-lg justify-center items-center flex"
      onClick={(e) => handleClick()}
    >
      {board[`${x},${y}`]?.aspect && (
        <div className="relative group">
          <Aspect
            a={board[`${x},${y}`].aspect}
            valid={checkValid(
              x,
              y,
              board[`${x},${y}`].aspect,
              board[`${x},${y}`].valid
            )}
            disabled={true}
            initial={board[`${x},${y}`].initial}
          />
          {!board[`${x},${y}`].initial && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="rounded-full absolute -top-1 -right-1 w-4 h-4 text-[10px] text-white flex justify-center items-center bg-gray-700 group-hover:visible invisible"
            >
              x
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BoardCell;
