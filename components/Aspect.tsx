import Image from "next/image";

type Props = {
  a: string;
  activeAspect: string;
  setActiveAspect: (a: string) => void;
};

const Aspect = ({ a, setActiveAspect, activeAspect }: Props) => {
  return (
    <div
      onClick={() => setActiveAspect(a)}
      className={`transition-all rounded-full hover:scale-110 hover:shadow-2xl hover:bg-white ${
        activeAspect === a && "bg-white scale-125"
      } `}
    >
      <Image alt={a} width={40} height={40} src={`/${a}.png`} />
    </div>
  );
};

export default Aspect;
