'use server'
import RepositorioColaborador from './RepositorioColaborador'

export default async function excluirColaborador(id: number) {
    return RepositorioColaborador.excluir(id)
}
