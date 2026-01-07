import './App.css'

function Input({onSave}){
    return(
        <>
        <div>
            <p>
                zu verschlüsselnde Nachricht eingeben:
            </p>
            <input type="text"></input>
            <button onClick = {() => onSave("link")}>Speichern</button>
        </div>
        </>
    )
}

export default Input