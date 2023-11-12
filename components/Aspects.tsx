import Aspect from "./Aspect";
import AspectList from "./AspectList";

const Aspects = () => {
  return (
    <div className="grid grid-cols-3 w-[120px]">
      {AspectList.map((aspect) => (
        <Aspect key={aspect} a={aspect} />
      ))}
    </div>
  );
};

export default Aspects;
