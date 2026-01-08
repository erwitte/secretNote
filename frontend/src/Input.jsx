import './App.css'

function Input({ onSave }) {
    return (
      <div className="flex flex-col gap-3">
        <p>zu verschlüsselnde Nachricht eingeben:</p>
  
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2"
        />
  
        <button
          onClick={() => onSave("link")}
          className="self-center
            p-2
            rounded
            bg-slate-700
            hover:bg-gray-100
            active:bg-gray-200
            text-slate-100"
        >
          Speichern
        </button>
      </div>
    )
  }
  
  export default Input
  