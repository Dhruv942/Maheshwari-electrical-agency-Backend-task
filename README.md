# ⚡ Maheshwari Electrical Agency - Backend Task

This backend Node.js service leverages **Google Gemini AI** to **summarize** input text and **translate** the summary into **Hindi**, **Gujarati**, and **Kannada**.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **Google Generative AI (Gemini)**
- **dotenv**
- **body-parser**

---

## ✨ Features

- ✅ Summarizes any given input text  
- 🌐 Translates the summary into:
  - Hindi 🇮🇳
  - Gujarati 🇬🇺
  - Kannada 🇰🇳

---

## 📁 Project Structure

```
maheshwari-electrical-agency-backend-task/
├── aiFunctions.js          # Contains summarization and translation logic
├── index.js                # Express server setup
├── .env                    # Stores Gemini API Key
├── package.json            # Dependencies and scripts
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd maheshwari-electrical-agency-backend-task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node index.js
```

---

## 📡 API Endpoint

### `POST /ask-ai`

**Request Body:**

```json
{
  "text": "Electricity is essential for daily life. It powers homes and industries."
}
```

**Response:**

```json
{
  "original": "Electricity is essential for daily life. It powers homes and industries.",
  "summary": "Electricity is vital for modern life, powering homes and businesses.\n",
  "translated_summary_hindi": "आधुनिक जीवन के लिए बिजली अत्यंत आवश्यक है, जो घरों और व्यवसायों को शक्ति प्रदान करती है। (Aadhunik jeevan ke liye bijli atyant avashyak hai, jo gharon aur vyavsayon ko shakti pradaan karti hai.)\n",
  "translated_summary_kannada": "ಆಧುನಿಕ ಜೀವನಕ್ಕೆ ವಿದ್ಯುತ್ ಅತ್ಯಗತ್ಯ, ಮನೆಗಳು ಮತ್ತು ವ್ಯಾಪಾರಗಳಿಗೆ ಶಕ್ತಿ ನೀಡುತ್ತದೆ. (Ādhunika jīvanakke vidyut atyagatya, manegalu mattu vyāpāragalige śakti nīḍuttade.)\n",
  "translated_summary_gujarati": "આધુનિક જીવન માટે વીજળી અત્યંત જરૂરી છે, જે ઘરો અને ધંધાઓને ચલાવે છે.  (Aadhunik jeevan maate vijali atyant jaruri chhe, je gharo ane dhandhao ne chalaave chhe.)\n"
}
```

---

## 📌 Environment Variables

Create a `.env` file in the root directory:

```
GEMINI_API_KEY=your_api_key_here
```

---

## 🧠 Author

Made with ❤️ by [Dhruv Patel](https://github.com/Dhruv942)
