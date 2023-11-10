type Props = {
  activeAspect: string;
};

const Board = ({ activeAspect }: Props) => {
  return (
    <div className="w-1/2 bg-yellow-200 mr-96 flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-4 w-1/2 h-1/2">
        <div className="w-10 h-10 border-2 border-white"></div>
        <div className="w-10 h-10 border-2 border-white"></div>
        <div className="w-10 h-10 border-2 border-white"></div>
        <div className="w-10 h-10 border-2 border-white"></div>
        <div className="w-10 h-10 border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Board;
