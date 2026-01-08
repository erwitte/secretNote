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
          className="self-center bg-blue-600 text-white rounded px-4 py-2 w-fit"
        >
          Speichern
        </button>
      </div>
    )
  }
  
  export default Input
  