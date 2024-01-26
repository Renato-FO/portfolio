import Image from "next/image";
import succeed from "@/images/success.gif";
import { MouseEventHandler } from "react";

interface Props {
  onClose: MouseEventHandler;
  show: boolean;
}

export default function Toast({ onClose, show }: Props) {
  return (
    <div
      style={{ zIndex: 3000 }}
      className={`w-screen h-screen absolute bg-black bg-opacity-40 flex items-center justify-center transition-all ease-in ${
        show ? "" : "hidden"
      }`}
    >
      <div className="w-72 h-44 bg-white flex items-center justify-center flex-col rounded-md relative">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 font-bold hover:text-red-500 transition-all ease-in mr-2"
        >
          X
        </button>
        <Image alt={"Succeed"} src={succeed} height={100} />
        <p className="text-primary-blue font-semibold text-center">
          Email enviado com sucesso, obrigado pelo contato!
        </p>
      </div>
    </div>
  );
}
