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

    const getValueLabel = (value: string) => {
        var search = options.filter(option => option.value == value)
        var labelFound = 'Selecionar'
        if (search.length > 0) {
            labelFound = search[0].label
        }
        return labelFound
    };  

    const [open, setOpen] = useState(false);

    const [valueLabel, setValueLabel] = useState(getValueLabel(value));

    return (
        <div className="flex flex-col gap-1 relative max-w-[120px] w-full"> 
            <label>{label}</label>
            <div onClick={() => setOpen(!open)}
                tabIndex={0}
                className="w-full flex items-center justify-between py-3 px-3 bg-black border-2 border-gray-200 rounded-m">
                <p className={`text-sm ${value ? "text-white" : "text-gray-400"}`}>{value ? valueLabel : placeholder}</p>
                <MdKeyboardArrowDown className={ `text-white transition-all ${open ? "rotate-180" : "rotate-0"}`} />
            </div>
            {open &&
            <div className="absolute top-[110%] left-0 w-full max-h-[320px] py-2 bg-black border-2 border-gray-600 rounded-m overflow-y-scroll">
                {options.map((option) => 
                    <div key={option.value} onClick={() => { 
                        onChange(option.value)
                        setValueLabel(option.label)
                        setOpen(false)
                    }} 
                        className={`flex py-2 px-3 cursor-pointer ${option.value === value ? "bg-gray-500" : "bg-black-400"} hover:bg-gray-700`}>
                        <p className="text-sm text-white">{option.label}</p>
                    </div>
                )}
            </div>
            }
        </div>
    )    

}