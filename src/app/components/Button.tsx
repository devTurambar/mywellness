'use client'
import { useRouter, useSearchParams  } from "next/navigation";

const Buttom = ({buttonText}:{buttonText:string;}) => {
    const router = useRouter();
    
    return (
        <button 
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
            {buttonText}
        </button>
    )
};
export default Buttom;