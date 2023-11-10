import Aspect from "./Aspect";

type Props = {
  activeAspect: string;
  setActiveAspect: (a: string) => void;
};

const Aspects = ({ setActiveAspect, activeAspect }: Props) => {
  return (
    <div className="grid grid-cols-3 w-[120px]">
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="alienis"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="aqua"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="arbor"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="auram"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="bestia"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="cognitio"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="corpus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="exanimis"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="fabrico"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="fames"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="gelum"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="herba"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="humanus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="ignis"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="instrumentum"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="iter"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="limus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="lucrum"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="lux"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="machina"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="messis"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="metallum"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="meto"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="mortuus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="motus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="ordo"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="pannus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="perfodio"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="permutatio"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="potentia"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="praecantatio"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="sano"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="sensus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="spiritus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="telum"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="tempestas"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="tenebrae"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="terra"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="tutamen"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="vacuos"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="venenum"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="victus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="vitreus"
      />
      <Aspect
        setActiveAspect={setActiveAspect}
        activeAspect={activeAspect}
        a="volatus"
      />
    </div>
  );
};

export default Aspects;