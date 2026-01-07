function Input({onSave}){
    return(
        <>
        <div>
            <input type="text"></input>
            <button onClick = {() => onSave("link")}>Speichern</button>
        </div>
        </>
    )
}

export default Input