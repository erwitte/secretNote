function Link() {
    const handleCopy = async () => {
      await navigator.clipboard.writeText("Preset Text")
    }
  
    return (
      <div className="bg-slate-800
      p-20
      rounded">
        <input
          type="text"
          value="Preset Text"
          readOnly
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
  
        <button
          onClick={handleCopy}
          className="
            p-2
            rounded
            bg-slate-700
            hover:bg-gray-100
            active:bg-gray-200
            text-slate-100
          "
          aria-label="Kopieren"
        >
          {/* Copy Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-4 12h6a2 2 0 002-2v-8a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    )
  }
  
  export default Link
  