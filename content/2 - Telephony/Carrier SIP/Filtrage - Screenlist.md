---
title: Filtrage - Screenlist
updated: 2025-07-10 08:02:57Z
created: 2025-07-10 08:01:47Z
latitude: 50.6927049
longitude: 3.177847
altitude: 0
tags:
  - carriersip-screenlist
draft: true
---

## Filtrage - Screenlist
Monsieur, 

Le filtrage d'appel pour un service Carrier SIP ne se configure pas via le manager. Il se configure par les API. La fonctionnalité screenlist est disponible sur Carrier SIP pour les appels sortants. 

Elle fonctionne comme pour les lignes classiques : vous pouvez la configurer soit en whitelist (on bloque tous les appels sortants sauf les numéros de la whitelist), soit en blacklist (on laisse tout passer, sauf les numéros vers la blacklist). 

Voici la liste des API : 

- GET /telephony/{billingAccount}/screen/{serviceName} -> Savoir si il y a un filtrage sur les appels entrants ou sortants.
- PUT /telephony/{billingAccount}/screen/{serviceName} -> Modifier les whitelists et les blacklists.
- GET /telephony/{billingAccount}/screen/{serviceName}/screenLists -> Récupérer les Id des restrictions.
- POST /telephony/{billingAccount}/screen/{serviceName}/screenLists -> Créer une nouvelle règle.
- DELETE /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id} -> Supprimer la restriction.
- GET /telephony/{billingAccount}/screen/{serviceName}/screenLists/{id} -> Vérifier la restriction.

Voici l'interface à utiliser : 

1 - Connectez-vous sur https://api.ovh.com/ via le bouton "Explore the OVH API" puis "Login" en haut à droite
2 - Rendez-vous sur cette API : https://api.ovh.com/console/#/telephony/%7BbillingAccount%7D/screen/%7BserviceName%7D/screenLists~POST

Voici les paramètres : 

- billingAccount = Groupe téléphonie.
- serviceName = Numéro du service CarrierSIP.
- callNumber = Cible du filtrage.
- nature = Type de destination.
- type = Liste blanche ou liste noire.