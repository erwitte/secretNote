import { useNavigate } from "react-router-dom";
import decryptMessage from"../services/decrypt"
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

function ShowText({ response}) {
    const [decryptedText, setDecryptedText] = useState("Node not found");
  const navigate = useNavigate();
  const { hash } = useLocation();
  const encodedKeyString = hash.replace("#", "");
  const keyString = decodeURIComponent(encodedKeyString);
  useEffect(() => {
    if (!response || !keyString) return;
  
    async function performDecryption() {
      try {
        const result = await decryptMessage(
          keyString,
          response.message.iv,
          response.message.encryptedBlob
        );
        setDecryptedText(result);
      } catch (err) {
        console.error(err);
        setDecryptedText("Error: Could not decrypt the message.");
      }
    }
  
    performDecryption();
  }, [response, keyString]);
  

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
          disabled={true}
          value={decryptedText}
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
  