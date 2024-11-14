'use server'

import { Colaborador } from '@/core/model/Colaborador'
import RepositorioColaborador from './RepositorioColaborador'

export default async function salvarColaborador(colaborador: Partial<Colaborador>) {
    const updateColaborador = {
        ...colaborador,
        id: colaborador.id,
    }

    return RepositorioColaborador.salvar(updateColaborador as Colaborador)
}
