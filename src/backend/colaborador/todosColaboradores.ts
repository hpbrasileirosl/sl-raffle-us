'use server'
import RepositoriColaborador from './RepositorioColaborador'

export default async function todosColaboradores() {
    return RepositoriColaborador.todosColaboradores()
}
