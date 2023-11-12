import { BoardContext } from "@/context/BoardContext";
import Image from "next/image";
import { useContext, useEffect } from "react";

type Props = {
  a: string;
  disabled?: boolean;
};

const Aspect = ({ a, disabled = false }: Props) => {
  const { activeAspect, setActiveAspect } = useContext(BoardContext);

  return (
    <div
      onClick={() => setActiveAspect(a)}
      className={`transition-all rounded-full hover:scale-110 hover:shadow-2xl ${!disabled && 'hover:bg-orange-500'} ${
        activeAspect === a && !disabled && "bg-orange-500 scale-125"
      } `}
    >
      <Image alt={a} width={40} height={40} src={`/${a}.png`} />
    </div>
  );
};

export default Aspect;
