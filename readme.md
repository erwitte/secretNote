# 📝 secretNote

A minimalist, **Zero-Knowledge** note-sharing app. All encryption happens in the browser; the server never sees your keys or your data.

**Built With:**
* **Frontend:** React / Tailwind CSS
* **Encryption:** Web Crypto API (AES-256-GCM)
* **Runtime/Deployment:** Node.js & Docker

---

## 🔐 How it Works
1. **AES-256-GCM:** Your note is encrypted locally using the Web Crypto API.
2. **URL Hash:** The decryption key is stored in the URL fragment (`#`). 
3. **Zero Visibility:** Since browsers do not send the `#` fragment to servers, your key never leaves your device.

---

## 🐳 Deployment (Docker)

Run the application instantly using the following commands:

```bash
# Build the image
docker build -t secret-note .

# Run the container (Access at http://localhost:80
docker run -d -p 8080:80 --name secret-note-app secret-note
