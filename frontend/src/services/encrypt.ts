import decryptMessage from "./decrypt";

const encoder = new TextEncoder();

// Converts a buffer to a Base64 string so you can send it to your Postgres DB
const bufToBase64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));

// --- ENCRYPTION (Sender side) ---
async function encryptMessage(text: string) {
  // 1. Generate a random 128-bit key
  const key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 128 },
    true, 
    ["encrypt", "decrypt"]
  );

  // 2. Export the key as a "raw" string to put in the URL fragment (#)
  const rawKey = await window.crypto.subtle.exportKey("raw", key);
  const keyString = bufToBase64(rawKey);

  // 3. Create a random IV (Initialization Vector) - unique for every message
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  // 4. Encrypt the actual message
  const encryptedBuf = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encoder.encode(text)
  );

  const e = await decryptMessage(keyString, iv, encryptedBuf);
  console.log("OIOpijesaigjdsoijgjg");
  console.log("test stuff: ", e);

  return {
    link: keyString,           // Save this for the URL # fragment
    iv: bufToBase64(iv), // Send this to Postgres
    blob: bufToBase64(encryptedBuf) // Send this to Postgres
  };
}

export default encryptMessage