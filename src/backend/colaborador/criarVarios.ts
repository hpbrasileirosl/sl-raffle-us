'use server'

import { Colaborador } from '@/core/model/Colaborador'
import RepositorioColaborador from './RepositorioColaborador'

export default async function criarVarios(colabs: Partial<Colaborador>[]): Promise<String> {
    return RepositorioColaborador.criarVarios(colabs)
}
