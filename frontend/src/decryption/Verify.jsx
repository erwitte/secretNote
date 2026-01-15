import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

function Verify({ setShow, setResponse }) {
    const navigate = useNavigate();
    const { id } = useParams();

    async function getEncryptedMessage(id){
      try {
        const response = await fetch(`http://localhost:3000/decrypt/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          setResponse(data);
          setShow(true);
        } 
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    return (
      <div className="bg-slate-800
      p-20
      rounded
      flex justify-center">
        <div className="flex
        inline-flex
        items-center
        gap-2
        bg-zinc-900
        border
        border-zinc-700
        rounded-lg
        p-2">
            <button
          onClick={() => getEncryptedMessage(id)}
          className="
            p-2
            rounded
            bg-slate-700
            hover:bg-gray-100
            hover:text-slate-700
            active:bg-gray-200
            text-slate-100
          "
          aria-label="Lesen"
            >Lesen</button>

            <button 
            onClick={() => navigate("/")}
            className="
            p-2
            rounded
            bg-slate-700
            hover:bg-gray-100
            hover:text-slate-700
            active:bg-gray-200
            text-slate-100
          ">Abbrechen</button>
        </div>
      </div>
    )
  }
  
  export default Verify
  