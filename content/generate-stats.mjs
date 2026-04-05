import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notesDir = path.join(__dirname, '../content');
const outputFile = path.join(__dirname, '../content/index.md');

// Lire les fichiers Markdown
const files = fs.readdirSync(notesDir).filter(file => file.endsWith('.md'));

// Générer les statistiques
const totalNotes = files.length;
const today = new Date();
today.setHours(0, 0, 0, 0);
const todayEdited = files.filter(file => {
  const filePath = path.join(notesDir, file);
  const stats = fs.statSync(filePath);
  const modifiedDate = new Date(stats.mtime);
  return modifiedDate >= today;
}).length;

// Lire la taille totale du dossier
function getDirectorySize(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalSize = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += stats.size;
    }
  });

  return totalSize;
}

const totalSize = (getDirectorySize(notesDir) / (1024 * 1024)).toFixed(2) + 'MB';

// Lire les fichiers récents
const recentFiles = files
  .map(file => {
    const filePath = path.join(notesDir, file);
    const stats = fs.statSync(filePath);
    return {
      name: file.replace('.md', ''),
      modified: stats.mtime,
      path: filePath.replace(notesDir, '').substring(1)
    };
  })
  .sort((a, b) => b.modified - a.modified)
  .slice(0, 10);

// Générer le contenu Markdown
let markdownContent = `---
title: Accueil
---

<div class="start-page-container">
  <div class="header">
    <h1>📚 Start Page for Obsidian</h1>
    <div class="search-bar">
      <input type="text" placeholder="Type to start search...">
    </div>
  </div>

  <div class="stats">
    <div class="stat-card">
      <div class="stat-icon">📄</div>
      <div class="stat-info">
        <div class="stat-number" id="total-notes">${totalNotes}</div>
        <div class="stat-label">Total notes</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">📝</div>
      <div class="stat-info">
        <div class="stat-number" id="today-edited">${todayEdited}</div>
        <div class="stat-label">Today edited</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">💾</div>
      <div class="stat-info">
        <div class="stat-number" id="total-size">${totalSize}</div>
        <div class="stat-label">Total size</div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="pinned-notes">
      <div class="section-header">
        <span>+ Pinned notes</span>
        <button class="manage-btn">Manage</button>
      </div>
      <div class="pinned-list">
        <!-- Les notes épinglées seront ajoutées ici -->
      </div>
    </div>

    <div class="recent-notes">
      <div class="section-header">
        <span>🕒 Recent notes</span>
        <div class="show-count">
          <span>Show count</span>
          <input type="number" value="10" min="1">
        </div>
      </div>
      <div class="recent-list">
`;

recentFiles.forEach(file => {
  const modifiedTime = Math.floor((new Date() - file.modified) / (1000 * 60));
  let timeAgo;
  if (modifiedTime < 60) {
    timeAgo = `${modifiedTime} minutes ago`;
  } else if (modifiedTime < 1440) {
    timeAgo = `${Math.floor(modifiedTime / 60)} hours ago`;
  } else {
    timeAgo = `${Math.floor(modifiedTime / 1440)} days ago`;
  }

  markdownContent += `
        <div class="note-item">
          <div class="note-icon">📄</div>
          <div class="note-info">
            <div class="note-title">${file.name}</div>
            <div class="note-meta">${timeAgo} .md 📁 ${file.path}</div>
          </div>
          <div class="note-pin">📌</div>
        </div>
`;
});

markdownContent += `
      </div>
    </div>
  </div>
</div>

<script>
// Script pour gérer les interactions
document.addEventListener('DOMContentLoaded', function() {
  // Ajouter des gestionnaires d'événements ici
});
</script>

<style>
/* Ajoutez ce CSS dans votre fichier custom.scss */
.start-page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #ccc;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  color: #ff6b6b;
  font-size: 24px;
  margin: 0;
}

.search-bar input {
  background-color: #333;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 8px 12px;
  color: #ccc;
  width: 300px;
}

.search-bar input::placeholder {
  color: #888;
}

.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background-color: #222;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 15px;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 15px;
}

.stat-icon {
  font-size: 24px;
  color: #ff6b6b;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.stat-label {
  font-size: 14px;
  color: #aaa;
}

.content {
  display: flex;
  gap: 30px;
}

.pinned-notes, .recent-notes {
  flex: 1;
  background-color: #222;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 15px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #ff6b6b;
  font-size: 16px;
}

.manage-btn {
  background-color: transparent;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  color: #ccc;
  cursor: pointer;
}

.manage-btn:hover {
  background-color: #333;
}

.show-count {
  display: flex;
  align-items: center;
  gap: 10px;
}

.show-count input {
  background-color: #333;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  color: #ccc;
  width: 50px;
}

.note-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #444;
}

.note-item:last-child {
  border-bottom: none;
}

.note-icon {
  font-size: 16px;
  color: #ff6b6b;
}

.note-info {
  flex: 1;
}

.note-title {
  font-size: 14px;
  color: #fff;
  margin-bottom: 4px;
}

.note-meta {
  font-size: 12px;
  color: #888;
}

.note-pin {
  font-size: 16px;
  color: #888;
  cursor: pointer;
}

.note-pin:hover {
  color: #ff6b6b;
}
</style>
`;

fs.writeFileSync(outputFile, markdownContent);
console.log(`Fichier généré : ${outputFile}`);
