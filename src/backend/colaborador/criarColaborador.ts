'use server'

import { Colaborador } from '@/core/model/Colaborador'
import RepositorioColaborador from './RepositorioColaborador'

export default async function criarColaborador(colaborador: Partial<Colaborador>) {
    const novoColaborador = {
        ...colaborador
    }

    return RepositorioColaborador.criar(novoColaborador as Colaborador)
}
