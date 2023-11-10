import Aspects from "@/components/Aspects";
import Board from "@/components/Board";
import { motion, useDragControls } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Index = () => {
  const controls = useDragControls();
  const [activeAspect, setActiveAspect] = useState("");

  return (
    <div className="w-screen h-screen bg-yellow-100 p-20 flex justify-between">
      <Aspects
        setActiveAspect={(a) => setActiveAspect(a)}
        activeAspect={activeAspect}
      />
      <Board activeAspect={activeAspect} />
    </div>
  );
};

export default Index;
