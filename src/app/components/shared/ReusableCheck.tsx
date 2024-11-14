import { InputHTMLAttributes } from "react";

export interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function ReusableCheck(props: InputCheckProps) {
    return (
        <div>
            <label className="p-3 inline-block">{props.label}</label>
            <input {...props} className="bg-black text-white p-2 rounded-md outline-none inline-block" />
        </div>
    )    
}