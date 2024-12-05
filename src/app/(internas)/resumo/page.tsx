"use client";
import { IconReport } from "@tabler/icons-react";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import useColaboladores from "@/app/data/hooks/userColaboladores";
import { Button } from "@/app/components/ui/button";
import { Resumo as ResumoM  } from "@/core/model/Resumo";
import { Colaborador } from "@/core/model/Colaborador";
import { useEffect, useState } from "react";

export default function Resumo() {

  const { ganhadores, ganhadoresE, resumo, resumoE, getResumoGanhou, getResumoExtra, getColaboradores } = useColaboladores();

  useEffect(() => {
    getColaboradores();
    getResumoGanhou();
    getResumoExtra();
  }, []);

  const trataEmpresa = (empresa: string) => {
    if (empresa == "SLL") {
        return "Londrina"
    }
    if (empresa === "SLM") {
        return "Mauá"
    }
    if (empresa === "JD") {
        return "São Paulo"
    }
    if (empresa === "ND") {
        return "Nordeste"
    }
    return ""
  }

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo
        icone={IconReport}
        principal="Report"
        segundario="Festa SL Alimentos 2024"
      />

        <div className="flex flex-row justify-start gap-7">

            <div>
                <div className="w-full">
                    <h3 className="text-lg font-semibold ml-3 text-white-800">Resumo de ganhadores por Empresa</h3>
                    <p className="text-white-500 mb-5 ml-3">Sorteio NORMAL.</p>
                </div>
                <div className="relative flex flex-col h-full text-white-500 bg-zinc-900 shadow-md rounded-xl bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Empresa
                            </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Ganhadores
                            </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {resumo.map((item: ResumoM) => {
                        return <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {trataEmpresa(item.empresa)}
                            </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {item._count.empresa}
                            </p>
                            </td>
                        </tr>
                        })}
                    </tbody>
                    </table>
                </div>        
            </div>

            <div>
                <div className="w-full">
                    <h3 className="text-lg font-semibold ml-3 text-white-800">Resumo de ganhadores por Empresa</h3>
                    <p className="text-white-500 mb-5 ml-3">Sorteio EXTRA.</p>
                </div>
                <div className="relative flex flex-col h-full text-white-500 bg-zinc-900 shadow-md rounded-xl bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Empresa
                            </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Ganhadores
                            </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {resumoE.map((item: ResumoM) => {
                        return <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-600">
                                {trataEmpresa(item.empresa)}
                            </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {item._count.empresa}
                            </p>
                            </td>
                        </tr>
                        })}
                    </tbody>
                    </table>
                </div>        
            </div>

        </div>

        <p></p>

        <div className="flex flex-row justify-start gap-7">
            <div>
                <div className="w-full">
                    <h3 className="text-lg font-semibold ml-3 text-white-800">Ganhadores por Empresa</h3>
                    <p className="text-white-500 mb-5 ml-3">Sorteio NORMAL.</p>
                </div>
                <div className="relative flex flex-col h-full text-white-500 bg-zinc-900 shadow-md rounded-xl bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Colaborador
                            </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Função
                            </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Empresa
                            </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ganhadores.map((item: Colaborador) => {
                        return <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-600">
                                {item.nome}
                            </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-600">
                                {item.funcao}
                            </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {trataEmpresa(item.empresa)}
                            </p>
                            </td>
                        </tr>
                        })}
                    </tbody>
                    </table>
                </div>        
            </div>    

            <div>
                <div className="w-full">
                    <h3 className="text-lg font-semibold ml-3 text-white-800">Ganhadores por Empresa</h3>
                    <p className="text-white-500 mb-5 ml-3">Sorteio EXTRA.</p>
                </div>
                <div className="relative flex flex-col h-full text-white-500 bg-zinc-900 shadow-md rounded-xl bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Colaborador
                            </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Função
                            </p>
                            </th>
                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Empresa
                            </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ganhadoresE.map((item: Colaborador) => {
                        return <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-600">
                                {item.nome}
                            </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-600">
                                {item.funcao}
                            </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                {trataEmpresa(item.empresa)}
                            </p>
                            </td>
                        </tr>
                        })}
                    </tbody>
                    </table>
                </div>        
            </div>                          
        </div>

    </Pagina>
  );
}
