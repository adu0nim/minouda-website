---
draft: true
---
Date de création : <% tp.file.creation_date() %>
Dernière modification : <% tp.file.last_modified_date() %>

---
tags: #meeting 
- meeting
Présent : 
- [ ] Serge-Alain Barbier
- [ ] Clément Brunet
- [ ] Nicolas Creel
- [ ] Eric Bloch
- [ ] Daisy
- [ ] Namariam
- [ ] Damien Beillevert
- [ ] Steeve Steimetz
- [ ] Nicolas Galdini
- [ ] Benjamin Liotard
- [ ] Anthony Jobez
---
## Agenda

- 

## Meeting Notes

- 

## Key Decisions

- 

## Follow-up

- [ ] @[[]] 

## Next Meeting

**Date:** <% tp.date.now("YYYY-MM-DD", 7) %>
**Time:** <% tp.date.now("HH:mm") %>

<%*
// Définir la locale en français
moment.locale("fr");

// Formater la date (ex: "lundi, 5 avril 2026")
const dateFrancaise = tp.date.now("dddd, Do MMMM YYYY");
%>

<% await tp.file.rename("Réunion - "+ tp.date.now("dddd, Do MMMM YYYY")) %>
