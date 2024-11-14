import Backend from '@/backend'
import { Colaborador } from '@/core/model/Colaborador'
import { useEffect, useState } from 'react'

export default function useColaboradores() {

    const [mensagem, setMensagem] = useState<String>('')
    const [icont, setIcont] = useState<number>(0)
    const [ganhador, setGanhador] = useState<string>('')
    const [colaboradores, setColaboradores] = useState<Colaborador[]>([])
    const [colaborador, setColaborador] = useState<Partial<Colaborador> | null>(null)
    const [nao_ganhadores, setNaoGanhadores] = useState<Colaborador[]>([])
    const [selecionados, setSelecionados] = useState<Partial<Colaborador>[]>([])
    const [colabs, setColabs] = useState<Partial<Colaborador>[]>([]);

    useEffect(() => {
        Backend.colaboladores.obter().then(setColaboradores)
        Backend.colaboladores.naoGanhadores().then(setNaoGanhadores)
    }, [])

    async function salvar() {
        if (!colaborador) return
        await Backend.colaboladores.salvar(colaborador)
        const colaboradores = await Backend.colaboladores.obter()
        setColaboradores(colaboradores)
        setColaborador(null)
    }

    async function sortear(colabs: Colaborador[]) {

        var id: number = 0
        var nome: string = ""
        let min:number = 1;
        let max:number = colabs.length-1;
        let random: number = Math.floor( Math.random() * (+max - +min) + +min);
        let icont: number = 0;

        setGanhador('')
        colabs.map((colaborador: Colaborador) => {
            if (icont == random) {
                nome = colaborador.nome
                id = colaborador.id
                setGanhador(nome)
            }
            icont += 1
        })        

        if (icont > 0) {
            await Backend.colaboladores.salvar({ id: id, observacao: 'GANHOU' })
            const colaboradores = await Backend.colaboladores.obter()
            setColaboradores(colaboradores)
            const nao_ganhadores = await Backend.colaboladores.naoGanhadores()
            setNaoGanhadores(nao_ganhadores)
            setColaborador(null)
        }
    }

    async function upload(colaboradores: Partial<Colaborador>[]) {
        setMensagem("")
        setSelecionados(colaboradores)
    }

    async function importar() {
        setMensagem("")
        if (selecionados.length > 0) {
            var mensagem: String = ""
            mensagem = await Backend.colaboladores.criarVarios(selecionados)
            setMensagem(mensagem)
        }
        const colaboradores = await Backend.colaboladores.obter()
        setColaboradores(colaboradores)
        const nao_ganhadores = await Backend.colaboladores.naoGanhadores()
        setNaoGanhadores(nao_ganhadores)
        setColaborador(null)
        setSelecionados([])
    }

    async function criar() {
        if (!colaborador) return
        await Backend.colaboladores.criar(colaborador)
        const colaboradores = await Backend.colaboladores.obter()
        setColaboradores(colaboradores)
        setColaborador(null)
    }

    async function excluir() {
        if (!colaborador || !colaborador.id) return
        await Backend.colaboladores.excluir(colaborador.id)
        const colaboradores = await Backend.colaboladores.obter()
        setColaboradores(colaboradores)
        setColaborador(null)
    }

    async function excluirTodos() {
        await Backend.colaboladores.excluirTodos()
        const colaboradores = await Backend.colaboladores.obter()
        setColaboradores(colaboradores)
        setColaborador(null)
    }

    return {
        colaboradores,
        colaborador,
        nao_ganhadores,
        colabs,
        setColabs,
        sizeColabs: () => { return colabs.length },
        setMensagem,
        salvar,
        criar,
        excluir,
        excluirTodos,
        sortear, 
        importar,
        upload,
        getMensagem: () => { return mensagem },
        getContador: () => { return icont },
        setContador: (i: number) => setIcont(i),
        cancelar: () => setColaborador(null),
        ganhador: () => { return ganhador },
        newGanhador: () => { setGanhador('') },
        criarColaborador: (colaborador: Partial<Colaborador> | null) => setColaborador(colaborador),
        alterarColaborador: (colaborador: Partial<Colaborador> | null) => setColaborador(colaborador) 
    }
}
