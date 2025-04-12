export function InputButton({value, handleChangeRateNote}){
    return (
        <input type="button" value= {value} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm text-medium-grey font-bold focus:bg-medium-grey focus:text-white" onClick={() => handleChangeRateNote(value)} />
    )
}