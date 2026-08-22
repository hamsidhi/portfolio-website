# AGMIS — Academic Guidance & Monitoring Intelligence System

> **An intelligent, lightweight academic monitoring platform built with FastAPI, PostgreSQL, and scikit-learn.**  
> AGMIS converts raw academic records into early warning risk scores and personalized student guidance.

---

## 📌 Problem Statement
Educational institutions collect vast amounts of academic data—attendance records, semester grades, and continuous assessments—yet this data remains locked in disconnected spreadsheets. Academic risks, such as impending probation or dropout, are often identified too late in the term for faculty to intervene effectively.

## 💡 Solution
AGMIS provides a unified academic intelligence layer. It cleans and normalizes student performance records, computes rolling momentum indicators, and applies machine learning classification to score performance risk. Role-tailored dashboards deliver actionable insights for Students, Faculty, and Institutional Administrators.

---

## ✨ Key Features
- 📊 **Multi-Role Dashboards:** Customized views for Students (personal progress & advice), Faculty (class heatmaps & early warnings), and Administrators (institutional analytics).
- 🎯 **Scikit-Learn Risk Scoring:** Machine learning risk assessment scoring student academic probation probability.
- 💡 **Automated Guidance Engine:** Rule-based decision system generating tailored study advice based on specific weak subjects.
- ⚡ **FastAPI & PostgreSQL Backend:** High-performance RESTful backend engineered for sub-50ms query responses.
- 🧹 **Data Ingestion Pipeline:** Automated parsing, validation, and feature engineering from raw ERP exports.

---

## 🏗️ Technical Architecture

```
[Raw ERP CSV / Export] ──> [Pandas Pipeline] ──> [PostgreSQL Database]
                                                        │
                                                        ▼
[Faculty / Student UI] <── [FastAPI REST APIs] <── [Scikit-Learn Model & Rules Engine]
```

---

## 🛠️ Tech Stack
- **Language:** Python 3.10+
- **Backend Framework:** FastAPI, Uvicorn
- **Database:** PostgreSQL (SQLAlchemy ORM)
- **Machine Learning:** Scikit-learn, Pandas, NumPy
- **Frontend / Presentation:** HTML5, Tailwind CSS, Chart.js / Next.js
- **Deployment:** Docker, Vercel / Railway

---

## 🚀 Quick Start (Local Setup)

```bash
# 1. Clone repository
git clone https://github.com/hamsidhi/AGMIS.git
cd AGMIS

# 2. Set up virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\Activate.ps1

# 3. Install dependencies
pip install -r requirements.txt

# 4. Configure Environment
cp .env.example .env

# 5. Run FastAPI Server
uvicorn app.main:app --reload
```

---

## 📈 Future Roadmap
- [ ] Integration with Canvas LMS and Moodle webhooks.
- [ ] Automated SMS & Email parent alert notifications.
- [ ] Deep learning trajectory modeling for multi-year degree retention.

---

## 👤 Author & Links
- **Author:** Hamza Siddiqui
- **Portfolio:** [hamsidhi.com](https://hamsidhi.com)
- **GitHub:** [@hamsidhi](https://github.com/hamsidhi)
- **LinkedIn:** [Hamza Siddiqui](https://www.linkedin.com/in/hamza-siddiqui-b84717393/)
