import { BoardContext } from "@/context/BoardContext";
import Image from "next/image";
import { useContext, useEffect } from "react";

type Props = {
  a: string;
  disabled?: boolean;
  initial?: boolean;
  valid?: boolean;
};

const Aspect = ({
  a,
  disabled = false,
  initial = false,
  valid = false,
}: Props) => {
  const { activeAspect, setActiveAspect } = useContext(BoardContext);

  const handleClick = () => {
    if (!initial && !disabled) {
      setActiveAspect(a);
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`transition-all rounded-full hover:scale-110 hover:shadow-2xl ${
        (initial || valid) && "bg-orange-400"
      } ${!disabled && "hover:bg-orange-500"} ${
        activeAspect === a && !disabled && "bg-orange-500 scale-125"
      } `}
    >
      <Image alt={a} width={40} height={40} src={`/${a}.png`} />
    </div>
  );
};

export default Aspect;
