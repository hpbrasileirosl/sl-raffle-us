'use server'
import RepositoriColaborador from './RepositorioColaborador'

export default async function todosGanhadores() {
    return RepositoriColaborador.todosGanhadores()
}
