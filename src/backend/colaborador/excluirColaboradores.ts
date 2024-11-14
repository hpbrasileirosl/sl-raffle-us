'use server'
import RepositorioColaborador from './RepositorioColaborador'

export default async function excluirColaboradores() {
    return RepositorioColaborador.removeAllColaboradores();
}
