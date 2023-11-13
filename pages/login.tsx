import { BoardContext } from "@/context/BoardContext";
import { auth } from "@/services/Firebase";
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { setCurrentUser } = useContext(BoardContext)
  const router = useRouter()

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    try {
      await setPersistence(auth, browserLocalPersistence)
      const user = await signInWithEmailAndPassword(auth, data.email, data.password)
      if (user) {
        setCurrentUser(user?.user)
        router.push('/')
      }
      console.log(user)
    } catch (error) {
      alert('Error al iniciar sesión')
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-yellow-50">
      <div className="flex flex-col p-4 bg-white shadow-2xl ">
        <Image
          width={500}
          height={500}
          alt="Banner"
          src={"/assets/r9aB2.png"}
        />
        <div className="w-full rounded-lg h-px my-10 bg-gray-300" />
        <div className="text-3xl w-full justify-center flex">Ingreso</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center flex-col"
        >
          <div className="field my-6 w-1/2">
            <input type="text" placeholder="Correo electrónico" {...register('email')}/>
            <div className="line"></div>
          </div>
          <div className="field mb-4 w-1/2">
            <input placeholder="Contraseña" type="password" {...register('password')} />
            <div className="line"></div>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 p-2 px-4 rounded-lg mt-4"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
