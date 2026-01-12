function ShowText() {  
    return (
      <div className="bg-slate-800
      p-20
      rounded">
        <div className="flex
        items-center
        gap-2
        bg-zinc-900
        border
        border-zinc-700
        rounded-lg
        p-2">
        <input
          type="text"
          readOnly
          className="flex-1 border border-gray-300 rounded px-3 py-2 bg-slate-500 text-slate-200 w-full"
        />
  
        <button
          className="
            p-2
            rounded
            bg-slate-700
            hover:bg-gray-100
            active:bg-gray-200
            text-slate-100
          "
          aria-label="Lesen"
        >
        </button>
        </div>
      </div>
    )
  }
  
  export default ShowText
  