export default function TodoComponent({value, handleCheck, checked, handleDelete}){


    return (
        <div className="flex gap-[80%] hover:bg-blue-600 pl-5 mr-[15%] group pb-2">
            <form className="flex gap-3 mt-3 text-2xl font-semibold">
                    <input 
                        type="checkbox" 
                        checked={checked}
                        onChange={handleCheck}
                        />
                    <label htmlFor="isFriendly" className={checked? "line-through" : ""} >{value}</label>   
            </form>
            <button onClick={handleDelete}><i className="gg-trash trash-icon hidden group-hover:block"></i></button>
        </div>
    )
}