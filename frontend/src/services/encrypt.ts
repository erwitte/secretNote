const encoder = new TextEncoder();

function bufToBase64(input: ArrayBuffer | Uint8Array): string {
    const bytes = input instanceof Uint8Array
      ? input
      : new Uint8Array(input);
  
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  
  

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
  const keyString: string = bufToBase64(rawKey);

  // 3. Create a random IV (Initialization Vector) - unique for every message
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  // 4. Encrypt the actual message
  const encryptedBuf = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encoder.encode(text)
  );

  const parsedBuf = bufToBase64(encryptedBuf);
  const parsedIv = bufToBase64(iv);

  return {
    link: keyString,           // Save this for the URL # fragment
    iv: parsedIv, // Send this to Postgres
    blob: parsedBuf // Send this to Postgres
  };
}

export default encryptMessage