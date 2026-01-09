import { useState } from 'react'

function Input({ onSave }) {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/encrypt", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: "text" }),
      });

      if (response.ok) {
        onSave("Link");
      } 
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

    return (
      <div className="bg-slate-800
      p-20
      rounded">
        <p>zu verschlüsselnde Nachricht eingeben:</p>
  
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2"
        />
  
        <button
          onClick={handleSave}
          disabled={loading}
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
  