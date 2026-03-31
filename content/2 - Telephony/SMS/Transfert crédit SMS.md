---
title: Transfert crédit SMS
updated: 2025-07-09 13:19:36Z
created: 2025-07-09 13:18:48Z
latitude: 50.69270490
longitude: 3.17784700
altitude: 0.0000
tags:
  - sms-transfer
---

## Transfert crédit SMS

Voici la procédure pour transférer les crédits SMS d'un service vers un autre en utilisant les API :

1 - Connectez-vous sur https://api.ovh.com/ via le bouton "Explore the OVH API" puis "Login" en haut à droite
2 - Rendez-vous sur cette API : https://api.ovh.com/console/#/sms/%7BserviceName%7D/transferCredits#POST

Voici les paramètres à renseigner :

- serviceName : XXXXX
- credits : Nombre de crédits à transférer
- smsAccountTarget : XXXXXX

Vous pouvez valider la procédure en cliquant sur "Execute".