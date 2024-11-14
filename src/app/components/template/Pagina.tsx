import MenuHeader from './MenuHeader'

export interface PaginaProps {
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <>
        <MenuHeader />
        <div className="flex">
            <main className={`flex-1 p-7 ${props.className ?? ''}`}>{props.children}</main>
        </div>
        </>
    )
}
