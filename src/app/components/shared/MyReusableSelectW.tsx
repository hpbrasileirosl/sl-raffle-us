import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';

interface OptionItem {
    value: string,
    label: string
}

interface PropsReusableSelect {
    label: string,
    value: string,
    onChange: (newValue: string) => void,
    placeholder: string,
    options: OptionItem[]
}

export default function MyReusableSelect({ onChange, placeholder, label, value, options }: PropsReusableSelect) {

    const [open, setOpen] = useState(false);

    const [valueLabel, setValueLabel] = useState(options.filter(option => option.value == value)[0].label);

    return (
        <div className="flex flex-col gap-1 relative max-w-[320px] w-full"> 
            <label>{label}</label>
            <div onClick={() => setOpen(!open)}
                tabIndex={0}
                className="w-full flex items-center justify-between py-3 px-3 bg-white border-2 border-gray-300 rounded-m">
                <p className={`text-sm ${value ? "text-black" : "text-gray-900"}`}>{value ? valueLabel : placeholder}</p>
                <MdKeyboardArrowDown className={ `text-black transition-all ${open ? "rotate-180" : "rotate-0"}`} />
            </div>
            {open &&
            <div className="absolute top-[110%] left-0 w-full max-h-[320px] py-2 bg-white border-2 border-gray-300 rounded-m overflow-y-scroll">
                {options.map((option) => 
                    <div key={option.value} onClick={() => { 
                        onChange(option.value)
                        setValueLabel(option.label)
                        setOpen(false)
                    }} 
                        className={`flex py-2 px-3 cursor-pointer ${option.value === value ? "bg-gray-200" : "bg-white-400"} hover:bg-gray-100`}>
                        <p className="text-sm text-black">{option.label}</p>
                    </div>
                )}
            </div>
            }
        </div>
    )    

}