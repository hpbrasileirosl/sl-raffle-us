import { Colaborador } from '@/core/model/Colaborador'

export interface LinhaColaboradorProps {
    colaborador: Colaborador
    onClick?: (colaborador: Colaborador) => void
}

export default function LinhaColaborador(props: LinhaColaboradorProps) {
    return (
        <div
            className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
            onClick={() => props.onClick?.(props.colaborador)}
        >
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.colaborador.nome}</span>
                {props.colaborador.observacao &&
                <span className="text-sm text-green-500 font-bold text-">{props.colaborador.observacao}</span>}
                <span className="text-sm text-zinc-200 font-bold">{props.colaborador.empresa}</span>
            </div>
        </div>
    )
}
