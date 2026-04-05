---
draft: true
tags:
---
Date de création : <% tp.file.creation_date() %>
Dernière modification : <% tp.file.last_modified_date() %>
Dossier parent : <% tp.file.folder() %>

<%*
// 1. Définir la locale en français pour les dates
moment.locale("fr");

// 2. Demander le titre de la note 
let titreNote = await tp.system.prompt("Le ticket concerné");

// 3. Variables dynamiques (à remplir manuellement ou via un prompt)
let nomClient = await tp.system.prompt("Nom du client");
let Service = await tp.system.prompt("Service concerné");
let Cause = await tp.system.prompt("Défaut constaté, détails");
let dateDuJour = tp.date.now("dddd, Do MMMM YYYY");

// 4. Contenu de l'email
tR += `
---
tags: [email, client]
title: "${titreNote}"
---
# ${titreNote}

**À :** ${nomClient}
**Service :** ${Service}
**Cause :** ${Cause}
**Date :** ${dateDuJour}

---

Bonjour ${nomClient},

Je suis Damien du support OVHcloud, je prends en charge votre concernant votre ${Service}.

Après vérification sur mes outils, je constate que ${Cause}.

Afin de progresser dans le diagnostic, j’aurais besoin des éléments suivants :

[liste des informations attendues : captures, logs, identifiant, etc.]

Dès réception de ces informations, je pourrai poursuivre le traitement et revenir vers vous rapidement. Vous pouvez simplement répondre à ce ticket pour nous les transmettre.

Je reste à votre disposition pour toute question complémentaire et vous souhaite une bonne journée.

`;
%>