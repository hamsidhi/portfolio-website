# Huntii Analyser — AI Multi-Document Intelligence Tool

> **A professional-grade multi-document analysis tool powered by Groq LLMs (Llama 3.3 70B).**  
> Ingests PDFs, DOCX, and TXT files simultaneously, auto-detects domain context, and synthesizes structured executive briefs.

---

## 📌 Problem Statement
Professionals across finance, agriculture, technology, and education spend hours manually reading multi-page documents to extract key metrics, risks, and strategic takeaways. Standard AI chat interfaces lack domain awareness, process one document at a time, and often hit model token limits without smart context preservation.

## 💡 Solution
Huntii Analyser automates multi-document processing. Built with Streamlit and Groq's high-speed Llama 3.3 70B inference engine, it classifies document domain context, intelligently truncates text without losing crucial sections, and generates investor-grade Word reports.

---

## ✨ Key Features
- 🧠 **Automatic Domain Detection:** Identifies sector context (Finance, Tech, Agriculture, Education) and adjusts analysis frameworks automatically.
- 📁 **Multi-Format Processing:** Parses PDF (`PyPDF2`), DOCX (`python-docx`), and TXT files simultaneously.
- ⚡ **Groq Llama 3.3 70B Integration:** Ultra-fast LLM synthesis delivering full report generation in seconds.
- 📄 **Word Executive Brief Export:** Formats and exports structured reports directly to downloadable `.docx` files.
- ✂️ **Token-Aware Truncation:** Retains document headers, key statistics, and concluding summaries within context bounds.

---

## 🛠️ Tech Stack
- **Frontend:** Streamlit
- **LLM Engine:** Groq API (Llama 3.3 70B)
- **Document Parsers:** PyPDF2, python-docx, mammoth
- **Language:** Python 3.10+

---

## 🚀 Quick Start

```bash
# Clone repo
git clone https://github.com/hamsidhi/Doc-summrizer.git
cd Doc-summrizer

# Install dependencies
pip install -r requirements.txt

# Add Groq API Key to .env
echo "GROQ_API_KEY=your_key_here" > .env

# Run App
streamlit run app.py
```

---

## 👤 Author & Links
- **Author:** Hamza Siddiqui
- **Portfolio:** [hamsidhi.com](https://hamsidhi.com)
- **GitHub:** [@hamsidhi](https://github.com/hamsidhi)
- **LinkedIn:** [Hamza Siddiqui](https://www.linkedin.com/in/hamza-siddiqui-b84717393/)
