const base64ToBuf = (str: string) => Uint8Array.from(atob(str), c => c.charCodeAt(0));
const decoder = new TextDecoder();

async function decryptMessage(keyString: string, iv: string, encrypted_blob: string) {
const key = await window.crypto.subtle.importKey(
      "raw",
      base64ToBuf(keyString),
      "AES-GCM",
      false,
      ["decrypt"]
    );
  
    try {
      const decryptedBuf = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: base64ToBuf(iv) },
        key,
        base64ToBuf(encrypted_blob)
      );
  
      return decoder.decode(decryptedBuf);
    } catch (e) {
      return "Decryption failed. Wrong key or corrupted data.";
    }
  }

export default decryptMessage