---
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
        <div class="stat-number" id="total-notes">274</div>
        <div class="stat-label">Total notes</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">📝</div>
      <div class="stat-info">
        <div class="stat-number" id="today-edited">22</div>
        <div class="stat-label">Today edited</div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">💾</div>
      <div class="stat-info">
        <div class="stat-number" id="total-size">30MB</div>
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
    </div><br>
    <div class="recent-notes">
      <div class="section-header">
        <span>🕒 Recent notes</span>
        <div class="show-count">
          <span>Show count</span>
          <input type="number" value="10" min="1">
        </div>
      </div>
      <div class="recent-list">
        <!-- Les notes récentes seront ajoutées ici -->
        <div class="note-item">
          <div class="note-icon">📄</div>
          <div class="note-info">
            <div class="note-title">index</div>
            <div class="note-meta">0 minutes ago .md 📁 /Main/content</div>
          </div>
          <div class="note-pin">📌</div>
        </div>
        <div class="note-item">
          <div class="note-icon">📄</div>
          <div class="note-info">
            <div class="note-title">Installation Qwartz 4</div>
            <div class="note-meta">4 hours ago .md 📁 /Main/content/5 - Général/Qwartz</div>
          </div>
          <div class="note-pin">📌</div>
        </div>
      </div>
    </div>
  </div>
</div>