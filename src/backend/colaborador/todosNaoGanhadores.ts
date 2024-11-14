'use server'
import RepositoriColaborador from './RepositorioColaborador'

export default async function todosNaoGanhadores() {
    return RepositoriColaborador.todosNaoGanhadores()
}
