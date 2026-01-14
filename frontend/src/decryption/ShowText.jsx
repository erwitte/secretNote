import { useNavigate } from "react-router-dom";
import decryptMessage from"../services/decrypt"
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

function ShowText({ response}) {
    const [decryptedText, setDecryptedText] = useState("Decrypting...");
  const navigate = useNavigate();
  const { hash } = useLocation();
  const encodedKeyString = hash.replace("#", "");
  const keyString = decodeURIComponent(encodedKeyString);
  useEffect(() => {
    async function performDecryption() {
        try {
          // response.encrypted_blob (ensure this matches your server's property name)
          const result = await decryptMessage(
            keyString, 
            response.iv, 
            response.encryptedBlob 
          );
          setDecryptedText(result);
        } catch (err) {
          setDecryptedText("Error: Could not decrypt the message.");
          console.error(err);
        }
      }
  if (response && keyString) {
    performDecryption();
  }})

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
  