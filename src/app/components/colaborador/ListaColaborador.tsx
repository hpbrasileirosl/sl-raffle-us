import { Colaborador } from '@/core/model/Colaborador'
import LinhaColaborador from './LinhaColaborador'

export interface ListaColaboradorProps {
    colaboradores: Colaborador[]
    onClick?: (colaborador: Colaborador) => void
}

export default function ListaColaborador(props: ListaColaboradorProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.colaboradores.map((colaborador: Colaborador) => {
                return <LinhaColaborador key={colaborador.id} colaborador={colaborador} onClick={props.onClick} />
            })}
        </div>
    )
}
