function Link(){
    const handleCopy = async() => {
        await navigator.clipboard.writeText("copied");
    }
    return(
        <>
        <div>
            <input type="text" value="Preset Text" readOnly />
            <button onClick={handleCopy}></button>
        </div>
        </>
    )
}

export default Link