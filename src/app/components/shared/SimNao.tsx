'use client'
import { InputHTMLAttributes, useState } from 'react'

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function InputTexto(props: InputTextoProps) {
    const [option, setOption] = useState(props.value);
    const handleOptionChange = (event: any) => {
        setOption(event.target.value); 
        console.log(option); 
    };    
    return (
        <div className="flex flex-col gap-1">
            <label>{props.label}[{option}]</label> 
            <select value={props.value} {...props.onChange} className="bg-zinc-800 p-2 rounded-md outline-none">
                <option value="-1">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
            </select>
        </div>           
    )
}
