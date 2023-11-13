import { useContext, useEffect, useState } from "react";
import Aspect from "./Aspect";
import AspectList from "./AspectList";
import { BoardContext } from "@/context/BoardContext";
import { auth, firestore as db, firestore } from "@/services/Firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import Trophies from "./Trophies";

type Props = {
  id: string;
};

const Aspects = ({ id }: Props) => {
  const { completed } = useContext(BoardContext);
  const [userAspects, setUserAspects] = useState({} as any);
  const [userTrophies, setUserTrophies] = useState([] as any);
  const [wonTrophy, setWonTrophy] = useState<string>("");
  const router = useRouter();
  const [value, loading, error] = useDocument(doc(firestore, "users", id), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (completed) {
      handleWin();
    }
  }, [completed]);

  useEffect(() => {
    if (value) {
      const data = value.data();
      setUserAspects(data!.aspects);
      setUserTrophies(data!.trophies);
    }
  }, [value]);

  const handleWin = async () => {
    const woTr = Trophies[Math.floor(Math.random() * Trophies.length)];
    const washingtonRef = doc(db, "users", id);
    console.log(wonTrophy);
    setWonTrophy(woTr);

    await updateDoc(washingtonRef, {
      trophies: arrayUnion(woTr),
    });
  };

  const translation = {
    Lantern: "Linterna",
    GlamVelvetSofa: "Sofá de terciopelo glamoroso",
    CesiumMan: "Hombre de cesio",
    CesiumMilkTruck: "Camión de leche de cesio",
    DragonAttenuation: "Atenuación del dragón",
    BoomBox: "Boom Box",
    AntiqueCamera: "Cámara antigua",
    BarramundiFish: "Pez Barramundi",
    Duck: "Pato",
    Circle: "Círculo",
  };

  return (
    <div className="grid grid-cols-3 w-[120px]">
      {AspectList.map((aspect) => (
        <div key={aspect} className="relative">
          <div className="text-white rounded-full absolute z-10 -top-1 -right-1 w-4 h-4 text-[10px] flex justify-center items-center bg-gray-700">
            {userAspects[aspect]}
          </div>
          <div
            className={`${
              userAspects[aspect] === 0 && "grayscale pointer-events-none"
            }`}
          >
            <Aspect a={aspect} />
          </div>
        </div>
      ))}
      <div
        className={`${
          completed
            ? "scale-100 visible"
            : "scale-0 pointer-events-none invisible"
        } absolute h-screen w-screen bg-yellow-300 rounded-lg flex flex-col items-center justify-center m-auto top-0 left-0 right-0 duration-[5000ms] ease-in-out z-50`}
      >
        <h1 className="text-5xl">Desbloqueaste {translation[wonTrophy]}</h1>
        <button className="bg-black rounded-lg text-white px-4 py-2 mt-4" onClick={() => router.reload()}>Volver a jugar</button>
      </div>
    </div>
  );
};

export default Aspects;
