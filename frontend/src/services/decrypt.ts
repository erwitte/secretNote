function base64ToBuf(base64: string): Uint8Array {
  // Replace URL-safe characters if they exist and remove whitespace
  const normalized = base64.replace(/-/g, '+').replace(/_/g, '/').trim();
  
  const binary = atob(normalized);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

const decoder = new TextDecoder();

async function decryptMessage(keyString: string, ivBase64: string, encryptedBlobBase64: string) {
  const keyBytes = base64ToBuf(keyString);
  // 1. Import the key from the Base64 string (from URL fragment)
  const key = await window.crypto.subtle.importKey(
    "raw",
    keyBytes, // Helper to convert B64 -> ArrayBuffer
    "AES-GCM",
    false,
    ["decrypt"]
  );

  // 2. Convert Base64 strings from DB back to binary
  const iv = base64ToBuf(ivBase64);
  const encryptedBlob = base64ToBuf(encryptedBlobBase64);
  // 3. Decrypt
  const decryptedBuf = await window.crypto.subtle.decrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encryptedBlob
  );

  // 4. Decode the buffer back to a string
  return new TextDecoder().decode(decryptedBuf);
}

export default decryptMessage