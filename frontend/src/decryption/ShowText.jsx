import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import encryptMessage from"../services/encrypt"

function Input({ onSave, setText}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const getEncypted = async () => {
    setLoading(true);
    const encrypted = await encryptMessage(message);
    const storeInDb = {
      iv: encrypted.iv,
      blob: encrypted.blob
    };
    try {
      const response = await fetch("http://localhost:3000/encrypt", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeInDb }),
      });
      if (response.ok) {
        setText(encrypted.link);
        onSave("Link");
      } 
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className="
        flex
        flex-col
        items-center
        gap-2
        bg-zinc-900
        border
        border-zinc-700
        rounded-lg
        p-2
      ">
        <textarea
          rows={10}
          cols={50}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded px-100 py-3 bg-transparent text-zinc-200"
          placeholder=" Nachricht hier eingeben..."
        />
  
        <button
          onClick={() => navigate("/")}
          disabled={loading}
          className="self-center
            p-2
            rounded
            bg-slate-700
            hover:bg-gray-100
            active:bg-gray-200
            text-slate-100"
        >
          Neue Nachricht
        </button>
        </div>
    )
  }
  
  export default Input
  