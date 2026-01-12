import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import encryptMessage from"../services/encrypt"
import { useParams, useLocation } from "react-router";

function ShowText({ onSave, setText}) {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { hash } = useLocation();
  const cleanedHash = hash.replace("#", "");

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
  
  export default ShowText
  