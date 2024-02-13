const TextForm = ({label,classes}:{label:string;classes:string}) => {
    let container = classes+" flex justify-center gap-2 w-40 sm:w-60 md:w-80";
    //classname = `${classes} flex justify-center` (template literal), nao funcionou
    return(
        <div className={container}>
            <div className="w-1/5">
                <label className="pr-2">
                    {label}
                </label>                           
            </div>
            <input type="text" className="bg-gray-200 border-2 rounded w-4/5"/>
        </div>
    );
}

export default TextForm;