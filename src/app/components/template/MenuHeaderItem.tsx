import Link from 'next/link'
import { ElementType } from 'react'

export interface MenuItemProps {
    icone: ElementType
    texto: string
    url: string
}

export default function MenuHeaderItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">
            <div className="flex flex-row gap-2">
            <props.icone className="text-zinc-200" size={22} stroke={1} />
            <span className="text-zinc-200">{props.texto}</span>
            </div>
        </Link>
    )
}
