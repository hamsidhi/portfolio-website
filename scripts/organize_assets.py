import os
import shutil
import json

base_dir = r"c:\Users\hamsi\OneDrive\Desktop\portfolio-website-build"
assests_dir = os.path.join(base_dir, "Assests")
public_dir = os.path.join(base_dir, "public")
public_assets = os.path.join(public_dir, "assets")

subdirs = [
    "profile",
    "projects/agmis",
    "projects/ai-voice-agent",
    "projects/doc-summarizer",
    "projects/spam-email-classifier",
    "projects/n8n-restaurant-bot",
    "projects/natural-voice-rag",
    "projects/code-explainer",
    "projects/code-comments-generator",
    "projects/sentiment-analysis",
    "projects/ai-system-auditor",
    "projects/archaeo-mind",
    "projects/skilmind-ai",
    "projects/snapchat-organizer",
    "certifications",
    "credentials",
    "events",
    "diagrams",
    "social",
    "general",
    "logo",
    "resume"
]

for sd in subdirs:
    os.makedirs(os.path.join(public_assets, sd), exist_ok=True)

manifest_items = []

def copy_and_manifest(src_dir, dst_subdir, project_name, usage_desc):
    if not os.path.exists(src_dir):
        return
    for fname in os.listdir(src_dir):
        src_file = os.path.join(src_dir, fname)
        if os.path.isfile(src_file):
            dst_file = os.path.join(public_assets, dst_subdir, fname)
            shutil.copy2(src_file, dst_file)
            rel_path = f"/assets/{dst_subdir}/{fname}".replace("\\", "/")
            manifest_items.append({
                "filename": fname,
                "path": rel_path,
                "source": "Local Asset Audit",
                "project": project_name,
                "usage": usage_desc,
                "format": fname.split(".")[-1].lower()
            })

# Helper to sync files to multiple target directories
def sync_to_dirs(src_dir, target_dirs, project_name, usage_desc):
    if not os.path.exists(src_dir):
        return
    for fname in os.listdir(src_dir):
        src_file = os.path.join(src_dir, fname)
        if os.path.isfile(src_file):
            for tdir in target_dirs:
                os.makedirs(tdir, exist_ok=True)
                shutil.copy2(src_file, os.path.join(tdir, fname))
            # Register in manifest once
            rel_path = f"/assets/{os.path.relpath(target_dirs[0], public_assets)}/{fname}".replace("\\", "/")
            manifest_items.append({
                "filename": fname,
                "path": rel_path,
                "source": "Local Asset Audit",
                "project": project_name,
                "usage": usage_desc,
                "format": fname.split(".")[-1].lower()
            })

# Projects mapping
projects_src = os.path.join(assests_dir, "Projects")

# AGMIS
sync_to_dirs(
    os.path.join(projects_src, "Agmis"),
    [
        os.path.join(public_assets, "agmis"),
        os.path.join(public_assets, "Agmis"),
        os.path.join(public_assets, "projects", "agmis"),
        os.path.join(public_assets, "projects", "Agmis"),
    ],
    "AGMIS",
    "Academic dashboard and analytical views"
)

# Voice Agent
sync_to_dirs(
    os.path.join(projects_src, "Ai voice agent"),
    [
        os.path.join(public_assets, "voice-agent"),
        os.path.join(public_assets, "ai-voice-agent"),
        os.path.join(public_assets, "Ai voice agent"),
        os.path.join(public_assets, "projects", "voice-agent"),
        os.path.join(public_assets, "projects", "ai-voice-agent"),
        os.path.join(public_assets, "projects", "Ai voice agent"),
    ],
    "AI Voice Agent",
    "Voice agent interface and workflow previews"
)

# Doc Summarizer
sync_to_dirs(
    os.path.join(projects_src, "Document summrizer"),
    [
        os.path.join(public_assets, "doc-summarizer"),
        os.path.join(public_assets, "document-summarizer"),
        os.path.join(public_assets, "Document summrizer"),
        os.path.join(public_assets, "projects", "doc-summarizer"),
        os.path.join(public_assets, "projects", "document-summarizer"),
        os.path.join(public_assets, "projects", "Document summrizer"),
    ],
    "Huntii Analyser",
    "Multi-document analysis interface screenshots"
)

# n8n Automation
sync_to_dirs(
    os.path.join(projects_src, "n8n-Automation"),
    [
        os.path.join(public_assets, "n8n-restaurant-bot"),
        os.path.join(public_assets, "n8n-automation"),
        os.path.join(public_assets, "n8n-Automation"),
        os.path.join(public_assets, "projects", "n8n-restaurant-bot"),
        os.path.join(public_assets, "projects", "n8n-automation"),
        os.path.join(public_assets, "projects", "n8n-Automation"),
    ],
    "n8n AI Restaurant Agent",
    "n8n workflow and canvas screenshots"
)

# Spam Email Classifier
sync_to_dirs(
    os.path.join(projects_src, "spam-email-classifier"),
    [
        os.path.join(public_assets, "spam-email-classifier"),
        os.path.join(public_assets, "spam-classifier"),
        os.path.join(public_assets, "projects", "spam-email-classifier"),
        os.path.join(public_assets, "projects", "spam-classifier"),
    ],
    "Spam Classifier",
    "Spam classifier UI and terminal benchmarks"
)

# Profile
prof_src = os.path.join(assests_dir, "profile", "Passport size photo.jpg")
prof_dst = os.path.join(public_assets, "profile", "profile-main.jpg")
if os.path.exists(prof_src):
    shutil.copy2(prof_src, prof_dst)
    shutil.copy2(prof_src, os.path.join(public_assets, "profile", "Passport size photo.jpg"))
    manifest_items.append({
        "filename": "profile-main.jpg",
        "path": "/assets/profile/profile-main.jpg",
        "source": "Professional Headshot",
        "project": "Personal Profile",
        "usage": "Primary portfolio and about page profile picture",
        "format": "jpg"
    })

# Logo
logo_src = os.path.join(assests_dir, "logo", "logo.png")
if os.path.exists(logo_src):
    shutil.copy2(logo_src, os.path.join(public_assets, "logo", "logo.png"))
    shutil.copy2(logo_src, os.path.join(public_dir, "logo.png"))
    manifest_items.append({
        "filename": "logo.png",
        "path": "/assets/logo/logo.png",
        "source": "Brand Logo",
        "project": "Personal Brand",
        "usage": "Website header branding logo",
        "format": "png"
    })

# Resume
resume_src_dir = os.path.join(assests_dir, "Resume")
public_resume_dir = os.path.join(public_dir, "resume")
os.makedirs(public_resume_dir, exist_ok=True)
if os.path.exists(resume_src_dir):
    for f in os.listdir(resume_src_dir):
        s_file = os.path.join(resume_src_dir, f)
        if os.path.isfile(s_file):
            shutil.copy2(s_file, os.path.join(public_resume_dir, f))
            clean_name = f.replace(" ", "_")
            shutil.copy2(s_file, os.path.join(public_resume_dir, clean_name))

# Accomplishment & Experience -> Credentials
acc_dir = os.path.join(assests_dir, "Accomplishment")
cred_dir = os.path.join(public_assets, "credentials")
os.makedirs(cred_dir, exist_ok=True)
if os.path.exists(acc_dir):
    for f in os.listdir(acc_dir):
        s_file = os.path.join(acc_dir, f)
        if os.path.isfile(s_file):
            shutil.copy2(s_file, os.path.join(cred_dir, f))
            clean_f = f.replace(" ", "_").replace(":", "").replace("-", "_")
            shutil.copy2(s_file, os.path.join(cred_dir, clean_f))
            manifest_items.append({
                "filename": f,
                "path": f"/assets/credentials/{f}",
                "source": "Local Asset Audit",
                "project": "Credentials & Certificates",
                "usage": "Verified professional credentials and badges",
                "format": f.split(".")[-1].lower()
            })

exp_intern_dir = os.path.join(assests_dir, "Exprience", "Artificial Intelligence Intern")
if os.path.exists(exp_intern_dir):
    cert_src = os.path.join(exp_intern_dir, "Internship Certificate.pdf")
    offer_src = os.path.join(exp_intern_dir, "OFFER LETTER.pdf")
    if os.path.exists(cert_src):
        shutil.copy2(cert_src, os.path.join(cred_dir, "Codec_Technologies_AI_Intern_Certificate.pdf"))
    if os.path.exists(offer_src):
        shutil.copy2(offer_src, os.path.join(cred_dir, "Codec_Technologies_AI_Intern_Offer_Letter.pdf"))

# Write asset-manifest.json
manifest_path = os.path.join(public_assets, "asset-manifest.json")
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump({"total_assets": len(manifest_items), "assets": manifest_items}, f, indent=2)

print(f"Asset Manifest generated with {len(manifest_items)} assets.")

