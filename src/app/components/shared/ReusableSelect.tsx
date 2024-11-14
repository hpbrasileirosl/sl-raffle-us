import { useState } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';

interface PropsReusableSelect {
    value: string,
    onChange: (newValue: string) => void,
    placeholder: string,
    options: string[]
}

export default function ReusableSelect({ onChange, placeholder, value, options }: PropsReusableSelect) {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative max-w-[320px] w-full">
            <div onClick={() => setOpen(!open)}
                tabIndex={0}
                className="w-full flex items-center justify-between py-3 px-3 bg-white border-2 border-gray-300 rounded-m">
                <p className={`text-sm ${value ? "text-black" : "text-gray-400"}`}>{value ? value : placeholder}</p>
                <MdKeyboardArrowDown className={ `text-base transition-all ${open ? "rotate-180" : "rotate-0"}`} />
            </div>
            {open &&
            <div className="absolute top-[110%] left-0 w-full max-h-[320px] py-2 bg-white border-2 border-gray-300 rounded-m overflow-y-scroll">
                {options.map((option) => 
                    <div onClick={() => { 
                        onChange(option)
                        setOpen(false)
                    }} 
                        className={`flex py-2 px-3 cursor-pointer ${option === value ? "bg-gray-200" : "bg-white-400"} hover:bg-gray-100`}>
                        <p className="text-sm text-black">{option}</p>
                    </div>
                )}
            </div>
            }
        </div>
    )    

}