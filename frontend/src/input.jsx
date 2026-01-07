function Input({onSave}){
    return(
        <>
        <div>
            <p>
                zu verschnlüsselnde Nachricht eingeben:
            </p>
            <input type="text"></input>
            <button onClick = {() => onSave("link")}>Speichern</button>
        </div>
        </>
    )
}

export default Input