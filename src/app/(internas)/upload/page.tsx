
'use client'

import { IconTools, IconToolsOff } from '@tabler/icons-react'
import Pagina from '@/app/components/template/Pagina'
import Titulo from '@/app/components/template/Titulo'
import useColaboladores from '@/app/data/hooks/userColaboladores'
import { useEffect, useState } from "react";
import UploadForm from "@/app/components/upload/FormularioUpload";
import * as XLSX from "xlsx";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table";
import { Colaborador } from '@/core/model/Colaborador'
import ImportForm from '@/app/components/upload/FormularioImport'

interface ExcelData {
  empresa: string;
  matricula: string;
  supervisor: string;
  nome: string;
  data: string;
  funcao: string;
  setor: string;
  situacao: string;
}

interface ExcelDataIn {
  id: number;
  empresa: string;
  matricula: string;
  supervisor: string;
  nome: string;
  data: string;
  funcao: string;
  setor: string;
  situacao: string;
}

export default function Page() {

  const { upload, importar, colabs, setColabs, sizeColabs, getMensagem } = useColaboladores()

  const [array, setArray] = useState<ExcelDataIn[]>([]);
  const [_, setData] = useState<ExcelData[]>([]);

  const loadDataOnlyOnce = () => {
    setColabs([]);
  };

  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  function isNumber(value: string) {
    return typeof value === 'number';
  }

  const processExcel = async (file: File) => {
    var colabsx: Partial<Colaborador>[] = [];
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer);
    const worksheet = workbook.Sheets[workbook.SheetNames[1]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet) as ExcelData[];
    setArray([]);
    setColabs([]);
    var icont = 0;
    jsonData.map((item) => {
      if (item.matricula === "Empresa:") {
        return null;
      } else {
        if (isNumber(item.matricula) == false) {
          return null;
        } else {
          const ditem = { 
            ...item,
            id: icont
          }
          setArray((array) => [...array, ditem]);
          let colab: Partial<Colaborador> = {
            "empresa": item.empresa,
            "matricula": ''+item.matricula,
            "supervisor": +item.supervisor || 0,
            "nome": item.nome,
            "data": ''+item.data,
            "funcao": item.funcao,
            "setor": item.setor,
            "situacao": item.situacao
          };
          colabsx = [...colabsx, colab];
          icont += 1;
        }
      }
    });
    setData(jsonData);
    if (colabsx.length > 0) {
      setColabs(colabsx);
      upload(colabsx);
    }
  };

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo icone={IconTools} principal="Upload" segundario="Festa SL Alimentos 2024" />
      <>
      <div className="container">
        <div className="float-left"><UploadForm onFileUpload={processExcel} /></div>
        <div className="float-right">{sizeColabs() > 0 && <ImportForm fnImport={importar} />}{getMensagem()}</div>
      </div>      
      {array.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Matricula</TableHead>
              <TableHead>Supervisor</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Funcao</TableHead>
              <TableHead>Setor</TableHead>
              <TableHead>Situacao</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {array.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>{row.empresa}</TableCell>
                <TableCell>{row.matricula}</TableCell>
                <TableCell>{row.supervisor}</TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.data}</TableCell>
                <TableCell>{row.funcao}</TableCell>
                <TableCell>{row.setor}</TableCell>
                <TableCell>{row.situacao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      </>
    </Pagina>
  )

}
