import { useNavigate } from "react-router-dom";

function Verify({ setShow }) {
    const navigate = useNavigate();

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
          onClick={() => setShow(true)}
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
  