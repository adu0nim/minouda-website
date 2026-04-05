---
title: Mes prises de notes
---
---
title: Accueil
description: Bienvenue sur mon wiki personnel. Retrouvez ici mes notes, projets et ressources.
---

# 🌟 Bienvenue sur mon wiki

> *"Un espace pour organiser, partager et explorer mes connaissances."*

---
## 📌 À propos
Je m’appelle **Damien**, et ce site est mon **espace de connaissances** où je centralise mes notes, mes projets et mes réflexions. Que tu sois un·e visiteur·se occasionnel·le ou un·e collaborateur·rice, n’hésite pas à explorer et à me faire des retours !

📧 **Contact** : [damien@example.com](mailto:damien@example.com)

---
## 🗺️ Explorer le wiki
### 🔍 **Rechercher une note**
Utilise la barre de recherche en haut de la page pour trouver une note spécifique.

### 🌐 **Graphique des liens**
Découvre les connexions entre mes notes via le [graphique interactif](/graph).

---
## 📢 Dernières mises à jour
*(Section dynamique – utilise Dataview si tu l’as activé dans Quartz.)*
```dataview
TABLE FROM ""
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 5