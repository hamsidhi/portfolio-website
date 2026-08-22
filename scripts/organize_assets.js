const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');
const assestsDir = path.join(baseDir, 'Assests');
const publicDir = path.join(baseDir, 'public');
const publicAssets = path.join(publicDir, 'assets');

const subdirs = [
  'profile',
  'projects/agmis',
  'projects/ai-voice-agent',
  'projects/doc-summarizer',
  'projects/spam-email-classifier',
  'projects/n8n-restaurant-bot',
  'projects/natural-voice-rag',
  'projects/code-explainer',
  'projects/code-comments-generator',
  'projects/sentiment-analysis',
  'projects/ai-system-auditor',
  'projects/archaeo-mind',
  'projects/skilmind-ai',
  'projects/snapchat-organizer',
  'certifications',
  'credentials',
  'events',
  'diagrams',
  'social',
  'general',
  'logo',
  'resume'
];

subdirs.forEach(sd => {
  fs.mkdirSync(path.join(publicAssets, sd), { recursive: true });
});

const manifestItems = [];

function copyAndManifest(srcDir, dstSubdir, projectName, usageDesc) {
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir);
  files.forEach(fname => {
    const srcFile = path.join(srcDir, fname);
    if (fs.statSync(srcFile).isFile()) {
      const dstFile = path.join(publicAssets, dstSubdir, fname);
      fs.copyFileSync(srcFile, dstFile);
      const relPath = `/assets/${dstSubdir}/${fname}`.replace(/\\/g, '/');
      manifestItems.push({
        filename: fname,
        path: relPath,
        source: 'Local Asset Audit',
        project: projectName,
        usage: usageDesc,
        format: path.extname(fname).replace('.', '').toLowerCase()
      });
    }
  });
}

const projectsSrc = path.join(assestsDir, 'Projects');

// AGMIS
copyAndManifest(path.join(projectsSrc, 'Agmis'), 'projects/agmis', 'AGMIS', 'Academic dashboard and analytical views');
fs.mkdirSync(path.join(publicAssets, 'agmis'), { recursive: true });
if (fs.existsSync(path.join(projectsSrc, 'Agmis'))) {
  fs.readdirSync(path.join(projectsSrc, 'Agmis')).forEach(f => {
    const s = path.join(projectsSrc, 'Agmis', f);
    if (fs.statSync(s).isFile()) fs.copyFileSync(s, path.join(publicAssets, 'agmis', f));
  });
}

// Voice Agent
copyAndManifest(path.join(projectsSrc, 'Ai voice agent'), 'projects/ai-voice-agent', 'AI Voice Agent', 'Voice agent interface and workflow previews');
fs.mkdirSync(path.join(publicAssets, 'voice-agent'), { recursive: true });
if (fs.existsSync(path.join(projectsSrc, 'Ai voice agent'))) {
  fs.readdirSync(path.join(projectsSrc, 'Ai voice agent')).forEach(f => {
    const s = path.join(projectsSrc, 'Ai voice agent', f);
    if (fs.statSync(s).isFile()) fs.copyFileSync(s, path.join(publicAssets, 'voice-agent', f));
  });
}

// Doc Summarizer
copyAndManifest(path.join(projectsSrc, 'Document summrizer'), 'projects/doc-summarizer', 'Huntii Analyser', 'Multi-document analysis interface screenshots');
fs.mkdirSync(path.join(publicAssets, 'doc-summarizer'), { recursive: true });
if (fs.existsSync(path.join(projectsSrc, 'Document summrizer'))) {
  fs.readdirSync(path.join(projectsSrc, 'Document summrizer')).forEach(f => {
    const s = path.join(projectsSrc, 'Document summrizer', f);
    if (fs.statSync(s).isFile()) fs.copyFileSync(s, path.join(publicAssets, 'doc-summarizer', f));
  });
}

// n8n Automation
copyAndManifest(path.join(projectsSrc, 'n8n-Automation'), 'projects/n8n-restaurant-bot', 'n8n AI Restaurant Agent', 'n8n workflow and canvas screenshots');
fs.mkdirSync(path.join(publicAssets, 'n8n-restaurant-bot'), { recursive: true });
if (fs.existsSync(path.join(projectsSrc, 'n8n-Automation'))) {
  fs.readdirSync(path.join(projectsSrc, 'n8n-Automation')).forEach(f => {
    const s = path.join(projectsSrc, 'n8n-Automation', f);
    if (fs.statSync(s).isFile()) fs.copyFileSync(s, path.join(publicAssets, 'n8n-restaurant-bot', f));
  });
}

// Spam Email Classifier
copyAndManifest(path.join(projectsSrc, 'spam-email-classifier'), 'projects/spam-email-classifier', 'Spam Classifier', 'Spam classifier UI and terminal benchmarks');
fs.mkdirSync(path.join(publicAssets, 'spam-email-classifier'), { recursive: true });
if (fs.existsSync(path.join(projectsSrc, 'spam-email-classifier'))) {
  fs.readdirSync(path.join(projectsSrc, 'spam-email-classifier')).forEach(f => {
    const s = path.join(projectsSrc, 'spam-email-classifier', f);
    if (fs.statSync(s).isFile()) fs.copyFileSync(s, path.join(publicAssets, 'spam-email-classifier', f));
  });
}

// Profile
const profSrc = path.join(assestsDir, 'profile', 'Passport size photo.jpg');
const profDst = path.join(publicAssets, 'profile', 'profile-main.jpg');
if (fs.existsSync(profSrc)) {
  fs.copyFileSync(profSrc, profDst);
  fs.copyFileSync(profSrc, path.join(publicAssets, 'profile', 'Passport size photo.jpg'));
  manifestItems.push({
    filename: 'profile-main.jpg',
    path: '/assets/profile/profile-main.jpg',
    source: 'Professional Headshot',
    project: 'Personal Profile',
    usage: 'Primary portfolio and about page profile picture',
    format: 'jpg'
  });
}

// Logo
const logoSrc = path.join(assestsDir, 'logo', 'logo.png');
if (fs.existsSync(logoSrc)) {
  fs.copyFileSync(logoSrc, path.join(publicAssets, 'logo', 'logo.png'));
  fs.copyFileSync(logoSrc, path.join(publicDir, 'logo.png'));
  manifestItems.push({
    filename: 'logo.png',
    path: '/assets/logo/logo.png',
    source: 'Brand Logo',
    project: 'Personal Brand',
    usage: 'Website header branding logo',
    format: 'png'
  });
}

// Resume
const resumeSrcDir = path.join(assestsDir, 'Resume');
const publicResumeDir = path.join(publicDir, 'resume');
fs.mkdirSync(publicResumeDir, { recursive: true });
if (fs.existsSync(resumeSrcDir)) {
  fs.readdirSync(resumeSrcDir).forEach(f => {
    const sFile = path.join(resumeSrcDir, f);
    if (fs.statSync(sFile).isFile()) {
      fs.copyFileSync(sFile, path.join(publicResumeDir, f));
      fs.copyFileSync(sFile, path.join(publicResumeDir, f.replace(/ /g, '_')));
    }
  });
}

// Accomplishment & Experience -> Credentials
const accDir = path.join(assestsDir, 'Accomplishment');
const credDir = path.join(publicAssets, 'credentials');
fs.mkdirSync(credDir, { recursive: true });
if (fs.existsSync(accDir)) {
  fs.readdirSync(accDir).forEach(f => {
    const sFile = path.join(accDir, f);
    if (fs.statSync(sFile).isFile()) {
      fs.copyFileSync(sFile, path.join(credDir, f));
      const cleanF = f.replace(/ /g, '_').replace(/:/g, '').replace(/-/g, '_');
      fs.copyFileSync(sFile, path.join(credDir, cleanF));
      manifestItems.push({
        filename: f,
        path: `/assets/credentials/${f}`,
        source: 'Local Asset Audit',
        project: 'Credentials & Certificates',
        usage: 'Verified professional credentials and badges',
        format: path.extname(f).replace('.', '').toLowerCase()
      });
    }
  });
}

const expInternDir = path.join(assestsDir, 'Exprience', 'Artificial Intelligence Intern');
if (fs.existsSync(expInternDir)) {
  const certSrc = path.join(expInternDir, 'Internship Certificate.pdf');
  const offerSrc = path.join(expInternDir, 'OFFER LETTER.pdf');
  if (fs.existsSync(certSrc)) {
    fs.copyFileSync(certSrc, path.join(credDir, 'Codec_Technologies_AI_Intern_Certificate.pdf'));
  }
  if (fs.existsSync(offerSrc)) {
    fs.copyFileSync(offerSrc, path.join(credDir, 'Codec_Technologies_AI_Intern_Offer_Letter.pdf'));
  }
}

// Write asset-manifest.json
const manifestPath = path.join(publicAssets, 'asset-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify({ total_assets: manifestItems.length, assets: manifestItems }, null, 2));

console.log(`Asset Manifest generated with ${manifestItems.length} assets.`);

