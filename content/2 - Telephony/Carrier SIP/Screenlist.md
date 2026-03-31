---
title: Screenlist
updated: 2025-07-09 07:51:01Z
created: 2025-07-09 07:50:40Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - carriersip-screenlist
---

## Screenlist

À titre d'information, vous avez aussi la possibilité d'appliquer un filtrage pour les appels sortants pour votre Carrier SIP via les API OVHcloud.

Voici la procédure pour se connecter à la console API :

- Connectez-vous sur https://api.ovh.com/ via le bouton "Explore the OVH API" puis "Login" en haut à droite

Voici la liste des API pour le filtrage d'appels sortants Carrier SIP:

- GET /telephony/{billingAccount}/screen/{serviceName} → Connaître l'état des listes de filtrage.
- PUT /telephony/{billingAccount}/screen/{serviceName} → Activer ou désactiver. le filtrage.
- GET /telephony/{billingAccount}/screen/{serviceName}/screenLists → Liste des règles.
- POST /telephony/{billingAccount}/screen/{serviceName}/screenLists → Créer une nouvelle règle.
- DELETE /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id} → Supprimer une règle.
- GET /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id} → Vérifier la règle.
