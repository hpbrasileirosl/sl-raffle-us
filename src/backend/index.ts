
import salvarUsuario from './usuario/salvarUsuario'
import obterTodos from './usuario/obterTodos'
import excluirUsuario from './usuario/excluirUsuario'

import salvarColaborador from './colaborador/salvarColaborador'
import criarColaborador from './colaborador/criarColaborador'
import todosColaboradores from './colaborador/todosColaboradores'
import todosNaoGanhadores from './colaborador/todosNaoGanhadores'
import todosGanhadores from './colaborador/todosGanhadores'
import todosPremioExtra from './colaborador/todosPremioExtra'
import resumoGanhou from './colaborador/resumoGanhou'
import resumoExtra from './colaborador/resumoExtra'
import excluirColaborador from './colaborador/excluirColaborador'
import excluirColaboradores from './colaborador/excluirColaboradores'
import criarVarios from './colaborador/criarVarios'

// Padrão Facade
export default class Backend {
    static readonly usuarios = {
        salvar: salvarUsuario,
        obter: obterTodos,
        excluir: excluirUsuario,
    }
    static readonly colaboladores = {
        salvar: salvarColaborador,
        salvarGanhador: salvarColaborador,
        criar: criarColaborador,
        criarVarios: criarVarios,
        obter: todosColaboradores,
        excluir: excluirColaborador,
        excluirTodos: excluirColaboradores,
        naoGanhadores: todosNaoGanhadores,
        premioExtra: todosPremioExtra,
        ganhadores: todosGanhadores,
        resumoGanhou: resumoGanhou,
        resumoExtra: resumoExtra,
    }
}
