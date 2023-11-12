import Aspects from "@/components/Aspects";
import Board from "@/components/Board";

const Index = () => {

  return (
    <div className="w-screen h-screen bg-yellow-50 p-20 flex justify-between">
      <Aspects />
      <Board />
    </div>
  );
};

export default Index;
