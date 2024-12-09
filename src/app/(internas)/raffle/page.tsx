"use client";

import { RaffleContext } from "@/contexts/raffleContext";
import { useContext } from "react";
import Image from "next/image";
import RaffleLoading from "@/app/components/RaffleLoading";

export default function Page() {
  const { winner, isLoading } = useContext(RaffleContext);

  const trataEmpresa = (empresa: string) => {
    if (empresa == "SLL") {
        return "SL - Londrina"
    }
    if (empresa === "SLM") {
        return "SL - Mauá"
    }
    if (empresa === "JD") {
        return "SL - Jundiaí"
    }
    if (empresa === "SP") {
      return "Sementes Paraná"
    }
    if (empresa === "ND") {
        return "SL - Nordeste"
    }
    return ""
  }

  return (
    <div className="min-h-screen w-full relative">
      <Image
        src="/tela-sorteio.png"
        alt="Fundo do sorteio"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute left-[64%] top-[60%] w-[500px] h-[300px] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
        {isLoading ? (
          <RaffleLoading />
        ) : (
          winner && (
            <div className="text-center">
        
              {/*@ts-ignore*/}
              <span className="text-5xl font-black text-black">{winner.value.nome}</span><br/>
              {/*@ts-ignore*/}
              <span className="text-sm text-zinc-800">{winner.value.funcao}</span><br/>
              {/*@ts-ignore*/}
              <span className="text-sm text-zinc-800">{trataEmpresa(winner.value.empresa)}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
